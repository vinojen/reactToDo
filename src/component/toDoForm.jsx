import React, { Component } from "react";
import ToDoTable from "./toDoTable";

class ToDoForm extends Component {
  state = {
    task: {
      name: "",
      desc: "",
      id: ""
    },
    tasks: []
  };

  handleChange = (e)=> {
    console.log(e.target.name);
     const task1={...this.state.task}// spread operation
    task1[e.target.name]=e.target.value;
    this.setState({task : task1 });
     // task1.name=e.target.value
    // this.setState({ task: task1 });

  };

  handleADDS=()=>{
    this.setState({tasks:[...this.state.tasks,this.state.task]});
    const task={...this.state.task};
    task.id='';
    task.name='';
    task.desc='';
    this.setState({task:task})
    console.log(this.state.task)
  };

  handleDelete=(task)=>{
  const tasks=this.state.tasks.filter(t=>t.id !== task.id)
  this.setState({ tasks  });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="id"
          name="id"
          value={this.state.task.id}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.task.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="desc"
          name="desc"
          value={this.state.task.desc}
          onChange={this.handleChange}
        />
        <input type="button" value="add" onClick={this.handleADDS} />
        <ToDoTable tasks={this.state.tasks} onDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default ToDoForm;
