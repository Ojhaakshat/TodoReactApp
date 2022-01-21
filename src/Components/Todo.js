import React, { Component, Fragment } from 'react';

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            currTask : '',
            tasks: []
        }
    }
    handleChange = (e) => {
        this.setState({
            currTask: e.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            tasks: [...this.state.tasks, {task: this.state.currTask,id: this.state.tasks.length+1}],
            currTask: ''
        })
    }
    handleDelete = (id) => {
        let narr = this.state.tasks.filter((ele) => (
            ele.id !== id
        ))
        this.setState({
            tasks: [...narr]
        })
    }
    render() {
        return(
            <React.Fragment>
                <input type='text'  value={this.state.currTask} onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>Add</button>
                <ul>
                    {
                        this.state.tasks.map((ele) => {
                            return (<li key = {ele.id}>
                                        <p>{ele.task}</p>
                                        {/* here we don't want handleDelete to be called when dom is rendered, so in
                                        onclick we pass its definition instead of function call hence made it arro function*/}
                                        <button onClick={() => this.handleDelete(ele.id)}>Delete</button>
                                    </li>)
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
}
