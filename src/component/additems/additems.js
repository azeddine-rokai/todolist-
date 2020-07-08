import React, { Component } from 'react';
import {Button , Form} from 'react-bootstrap' ;

class Additems extends Component {

    state ={
        name :'',
        prenom :'' ,
        age :''
    }

    handlchange =(e) => {
        this.setState({
            [e.target.id] :e.target.value 
        })
    }

    handlsubmit =(e) => {
     e.preventDefault() ;
      this.props.additem(this.state)
      this.setState({
          name :'',
          prenom :'' ,
          age :''
      }) 
    }

 render(){
     return(
       <div>
                <Form onSubmit={this.handlsubmit}> 
                
                    <Form.Control type='text' placeholder='enter name here...' id="name" onChange={this.handlchange} value={this.state.name} />
                    <br />
                    <Form.Control type='prenom' placeholder='enter prenom here...' id="prenom" onChange={this.handlchange} value={this.state.prenom} />
                    <br />
                    <Form.Control type='number' placeholder='enter number here...' id="age" onChange={this.handlchange} value={this.state.age} />
                    <br />
                    <Button type='submit' value='Add' variant="success">Success</Button>
               
                </Form>
              
        </div>
        )
    }
}

export default Additems ;