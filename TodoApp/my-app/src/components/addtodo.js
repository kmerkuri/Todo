import React, { Component } from 'react'


export class AddTodo extends Component{
state={
    title:''
}
onchange=(e) =>{
    this.setState({[e.target.name]:e.target.value});
}

onsubmit=(e) =>{
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title:''})

}
render(){


    return( 

        <div>
<form onSubmit={this.onsubmit}>
  <div className="form-group row">
    <div className="col-sm-10">
      <input type="text " name="title" className="form-control form-control-sm" id="colFormLabelSm" placeholder="Add ToDo`s" value={this.state.title} onChange={this.onchange}/>
      </div>
    <input type="submit" value="Submit" className="btn btn-info" />
  </div>
</form>

        </div>
    )
}




}