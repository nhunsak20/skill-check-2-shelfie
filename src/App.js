// import React, { Component } from 'react'
// import axios from 'axios';

// import Dashboard from './Components/Dashboard/Dashboard';
// import Form from './Components/Form/Form';
// import Header from './Components/Header/Header'

// import './App.css';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       inventorys : [],
//       selected: 0
//     }

//     this.addInventory = this.addInventory.bind(this)
//     this.editInventory = this.editInventory.bind(this)
//     this.updateInventory = this.updateInventory.bind(this)
//     this.deleteInventory = this.deleteInventory.bind(this)
//   }

//   componentDidMount() {
//     this.getInventorys()
//   }

//   componentDidUpdate(_, prevState){
//       if(this.state.inventorys !== prevState.inventorys){
//         this.getInventorys()
//       }
//   }

//   getInventorys(){
//     axios.get(`/api/inventory/`).then(response => {
//       this.setState({
//           inventorys: response.data
//       })
//     }).catch(err => console.log(err))
//   }

//   addInventory(inventory){
//     const { name, price, img } = inventory
//     axios.post('/api/inventory', {name, price, img }).then(response => {
//       this.setState({
//         inventorys: response.data
//       })
//     })
//   }

//   updateInventory(inventory){
//     const {name, price, img } = inventory
//     axios.put(`/api/inventory/${this.state.selected.id}`, { name, price, img }).then(response => {
//       this.setState({
//         inventorys: response.data
//       })
//     }).catch(err => console.log(err))
//   }

//   editInventory(id){
//     this.setState({
//       selected: id
//     })
//   }

//   deleteInventory(id){
//     axios.delete(`/api/inventory/${id}`).then(response => {
//       this.setState({
//         inventorys: response.data
//       })
//     })
//   }

//   render() {
//     return(
//       <div className='App'>
//         <Header />
//         <section className='app-section'>
//           <Dashboard inventorys={this.state.inventorys} editFn={this.editInventory} deleteFn={this.deleteInventory} />
//           <Form addFn={this.addInventory} updateFn={this.updateInventory} selected={this.state.selected}/>
//         </section>
//       </div>
//     )
//   }
// }

// export default App;

import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Header from './Components/Header/Header'

import routes from './routes'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {routes}
      </div>  
    </Router>
  )
}
export default App;


