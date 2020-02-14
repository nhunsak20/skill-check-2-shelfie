import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0,
            imgURL: '',
            inventory: {}
        }
        this.addInventory = this.addInventory.bind(this)
    }

    componentDidMount() {
        axios.get('/api/inventory/').then(response => {

            this.setState({
                inventory: response.data
            })
        })
    }

    componentDidUpdate(prevProps) {
        if(prevProps === this.props.data){
            console.log('props ' + this.props.data)
            console.log('prev ' + prevProps)
            // this.setState({
            //     name: this.state.inventory.name,
            //     price: this.state.inventory.price,
            //     imgURL: this.state.inventory.img
            // })   
        }
        console.log('nothing')
        console.log(prevProps.data)
    }

    handleChangeImgURL(imgURL) {
        this.setState({
            imgURL: imgURL
        })

    }

    handleChangeName(name) {
        this.setState({
            name: name
        })
    }

    handleChangePrice(price) {
        this.setState({
            price: price
        })
    }

    cancelClick() {
        this.handleChangeImgURL('')
        this.handleChangeName('')
        this.handleChangePrice(0)
    }

    addInventory(name, price, img) {
        axios.post('/api/inventory',{name, price, img}).then(response => {
          this.setState({
            inventory: response.data
          })
        }).catch(err => console.log(err))
      }

    render() {
        return(
            <div className='form'>
                <div className='form-content'>
                    <div className='form-flex'>
                        <div className='form-image'>
                            {this.state.imgURL ? (
                                <img src={this.state.imgURL} alt=''/>
                            ): (
                                <div className="form-image-nothing"></div>
                            )}
                        </div>
                    
                        <div className='form-inputs'>
                            <label>Image URL:</label>
                            <input type='textarea' value={this.state.imgURL} onChange={e => this.handleChangeImgURL(e.target.value)}/>
                            <label>Product Name:</label>
                            <input type='textarea' value={this.state.name} onChange={e => this.handleChangeName(e.target.value)}/>
                            <label>Price:</label>
                            <input type='number' value={this.state.price} onChange={e => this.handleChangePrice(e.target.value)}/>
                        </div>
                        <div className='form-buttons'>
                            <Link to='/'>
                                <button className='form-button' onClick={() => this.cancelClick()}>Cancel</button>
                            </Link>
                            <Link to='/'>
                                <button className='form-button' onClick={() => this.addInventory(this.state.name, this.state.price, this.state.imgURL)}>Add to Inventory</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form