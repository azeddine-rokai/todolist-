import React, { Component } from 'react';
import './App.css';
import Todoitems from './component/todoitems/todoitems' ;
import Additems from './component/additems/additems' ;
import {Modal } from 'react-bootstrap' ;
import { Media , Navbar, NavbarBrand } from 'reactstrap';
import Image from './c-1.jpg' ;





class  App extends Component {

  state = {
    items :[ {
      id :1 , 
      name : 'rokai' ,
      prenom :'azeddine' ,
      age :23 ,
           } ,
           {
     id :2 ,         
     name : 'tigiti' ,
     prenom :'abdrazak' ,
     age :23 ,
           },
        {
     id :3 ,     
     name : 'daryf' ,
     prenom :'abdhakime' ,
     age :23 ,
        } ,
        {
          id :4 ,     
          name : 'blekayd' ,
          prenom :'nourdine' ,
          age :23 ,
        }

    ]
  }

  additem=(item) => {
    item.id= Math.random()*10 ;
    let items=this.state.items ;
    items.push(item) ;
    this.setState({
      items :items 
    })

  }

  delete =(id) => {
   
    let items =this.state.items.filter(item => {
      return item.id !== id 
    })
    this.setState({
      items
    })
  }
  render() {
  return (
   <div>
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand style={{color :"white"}} href ="/">TodoList</NavbarBrand>
      </div>
      </Navbar>
      <Media style={{padding:"20px"}}>
      <Media left middle>
        <Media object src={Image} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras azeddine flix sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
     <Modal.Dialog>
       <Modal.Header closeButton>
         <Modal.Title>Todo App</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <Todoitems items={this.state.items} deleteitem={this.delete} />
         <Additems additem={this.additem} />
       </Modal.Body>  
     </Modal.Dialog> 
    </div>   
  );
}
}
export default App;
