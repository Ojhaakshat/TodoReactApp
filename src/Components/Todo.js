import React, { Component, Fragment } from 'react';

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            currTask : '',
            tasks: [{task: 'F o', id: 1}, {task: 'f i', id: 2}]
        }
    }
    
    render() {
        return(
            <React.Fragment>
                <input type='text'></input>
                <button>Submit</button>
                <ul>
                    {
                        this.state.tasks.map((ele) => {
                            return <li key = {ele.id}><p>{ele.task}</p><button>Delete</button></li>
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
}
