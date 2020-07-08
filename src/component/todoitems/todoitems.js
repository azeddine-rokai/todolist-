import React from 'react' ;
import './todoitems.css'
import {Table ,Button} from 'react-bootstrap' ;


const Todoitems =(props) => {
    const {items , deleteitem} = props ;

    let taille= items.length ;

    console.log(taille)

    const listitems = taille ? (
        items.map(item =>{
        return( 
     <div key={item.id}>
        <Table striped bordered hover>
           <thead>
              <tr className='Listitems'>
                <th>Name</th>
                <th>Prenom</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
             </thead>
            <tbody>      
             <tr>   
              <td>{item.name}</td>
              <td>{item.prenom}</td>
              <td>{item.age}</td>
              <Button size="lg" onClick={()=> deleteitem(item.id)} variant="danger" block>Delete</Button>
            </tr>
           </tbody>  
        </Table>  
     </div>  
        )
    }) ) : 
    (<p>there is no item to show here </p>)
    return (
        <div>
           
             {listitems}
             
        </div>
    )
}

export default Todoitems ;