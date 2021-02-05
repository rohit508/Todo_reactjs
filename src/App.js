import React, { Component } from "react";
import "./index.css"
class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: [{ title: " rohit", edit: false }],
      value: ''
    }
  }
  
  add_todo = () => {
    if(this.state.value !== ''){
    let obj = { title: this.state.value }
    this.setState({
      todo: [...this.state.todo, obj],
      value: ''
    })
}
  }

  Delete_Todo = (index) => {
    this.state.todo.splice(index, 1)
    this.setState({
      todo: this.state.todo
    })

  }


  Edit_Todo = (index) => {
    this.state.todo[index].edit = true;

    this.setState({
      todo: this.state.todo
    })
  }
  handleChange = (e, index) => {
    this.state.todo[index].title = e.target.value;
    this.setState({
      todo: this.state.todo
    })
  }

  update = (index) => {
    this.state.todo[index].edit = false;

    this.setState({
      todo: this.state.todo
    })

  }

  render() {
    let { todo, value } = this.state;
  
    return (

      <div style={{ textAlign: "center" }}>
        <h1 className="heading">Todo Application</h1>

        <br />

        <input  className="input" type="text" value={value} onChange={(e) => this.setState({ value: e.target.value })} placeholder='Enter Your Todo' />
        <button className="add" type="button"  onClick={this.add_todo}>Add</button>

        <ul>
          {todo.map((v, i) => {
            return <li className="font" key={i}>{v.edit ? <input className="inputadit" type="text" value={v.title} onChange={(e) => this.handleChange(e, i)} /> : v.title}
              {v.edit ? <button type="button"  className="update" onClick={() => this.update(i)}>Update</button>
                : <button type="button" className="Edit" onClick={() => this.Edit_Todo(i)}>Edit</button>
              }
              <button type="button" className="dlt" onClick={() => this.Delete_Todo(i)}>Delete</button>
            </li>
          })}
        </ul>
      </div>

    )
  }
}

export default App;