import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todos from './components/Todos';
import HeaderTodo from './components/header';
import { AddTodo } from './components/addtodo';
import uuid from 'uuid';
import {BrowserRoute as Router,Route} from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

class App extends Component{

 state={
Todos:[
    {   
        id: uuid.v4(),
        title:"Add your Todo`s here",
        completed : false
    }
    

]

 }
 markComplete=(id) =>{
   this.setState({Todos:this.state.Todos.map(todo => {
if(todo.id === id){
    todo.completed=true
}
return todo;

   })});
}

remove=(id)=>{
this.setState({Todos:[...this.state.Todos.filter(todo=> todo.id!== id)]})


}

markUnComplete=(id) =>{
    this.setState({Todos:this.state.Todos.map(todo => {
 if(todo.id === id){
     todo.completed=false;
 }
 return todo;
 
    })});
 }

addTodo=(title)=>{
const newTodo={
    id:uuid.v4(),
    title,
    completed:false


}
this.setState({Todos:[...this.state.Todos,newTodo]})

}

  render(){
      
    //   console.log(this.state.Todos);
      return <div>
 <HeaderTodo Todos={this.state.Todos}/>
 <AddTodo addTodo={this.addTodo}/>
  <Todos Todos={this.state.Todos} markComplete={this.markComplete} markUnComplete={this.markUnComplete} remove={this.remove} />
  </div> }
    
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
