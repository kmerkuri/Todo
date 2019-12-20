import React ,{Component} from 'react';
import ReactDom from 'react-dom';
import TodoItem from './todoitem';
import PropTypes from 'prop-types';
class Todos extends Component{


    render(){
// console.log(this.props.Todos);
        return this.props.Todos.map((todo)=>(
    <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} markUnComplete={this.props.markUnComplete} remove={this.props.remove}/>

        ));

      Todos.propTypes={

        todo: PropTypes.array.isRequired
      }    
        

       
    }
}

export default Todos;