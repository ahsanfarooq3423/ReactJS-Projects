import React, {Component} from 'react';
import classes from './AllNotes.module.css';
import Note from './Note/Note';
import NewNote from './NewNote/NewNote';

class AllNotes extends Component {
    state = {
        t1 : 'hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the',
        t2 : 'hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the hello my name is ahsan farooq ahsan farooq is simply dummysdfgsfgsfgsfgext of the printing and typesetting industry. Lorem Ipsum has been the'
    }
    render(){
        return(
            <div>
                <NewNote/>
                <div className = {classes.grid}>
                    <Note text = {this.state.t1} />
                    <Note text = {this.state.t2}/>
                    <Note text = {this.state.t1}/>
                    <Note text = {this.state.t1}/>
                    <Note text = {this.state.t2}/>
                    <Note text = {this.state.t1}/>
                    <Note text = {this.state.t1}/>
                    <Note text = {this.state.t2}/>
                    <Note text = {this.state.t1}/>
                    <Note text = {this.state.t1}/>
                </div>
            </div>
            
        )
    }
}

export default AllNotes;