import React , { Component } from 'react';

import PropTypes from 'prop-types';
export class TodoItem extends Component{
getstyle=() =>{

    return{
        background: this.props.todo.completed ?
        '#B5DBE7':'#C9372D',
        padding:'10px',
        margin:'5px',
        textDecoration: this.props.todo.completed ?
        'line-through':'none'
    }
}


render(){
return(
<div>
    
    <div style={this.getstyle()}>
        
        
        
        
        <p>
        
        
            {this.props.todo.title}</p>
            <button type="button" className="btn btn-success" onClick={this.props.markComplete.bind(this,this.props.todo.id)}>Completed</button>
        <button type="button" className="btn btn-danger" onClick={this.props.markUnComplete.bind(this,this.props.todo.id)}>Uncompleted</button>
        <button type="button" className="btn btn-dark" onClick={this.props.remove.bind(this,this.props.todo.id)}>Remove</button>
       

        </div>
        </div>
)
TodoItem.propTypes={

    todo: PropTypes.array.isRequired
  }    
}

}

export default TodoItem