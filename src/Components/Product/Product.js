import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'


import './Product.css'
class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inventory: this.props.inventory
        }
        this.edit = this.edit.bind(this)
    }

    edit() {

        console.log(`product: ${this.state.inventory}`)
        return <Form data={this.state.inventory.name} />
    }

    render() {
    return(
        <div className='product'>
            <div className='product-content'>
                <div className='product-flex'>
                    <img src={this.state.inventory.img} alt={`${this.state.inventory.name}-img`}/>
                    <div className='product-info'>
                        <p>
                            {this.state.inventory.name}
                        </p>
                        <p>
                            ${this.state.inventory.price}
                        </p>
                        <div className='product-buttons'>
                            <button onClick={() => this.pro.deleteFn(this.state.inventory.id)}>Delete</button>
                            <Link to={`/edit/${this.state.inventory.id}`}>
                                <button onClick={this.edit}>Edit</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
    }
}

export default Product