import React, {Component} from 'react';
import Card from './Card/Card';
import classes from './List.module.css';


class List extends Component {

    changeHandler = () => {
        console.log('input changed')
    }
   
    render(){

        let cards = [];
        if (this.props.items){
            for (let card in this.props.items.items){
                cards.push(card);
            }
        }
        


        let title = <input
                        onChange = {this.changeHandler} 
                        type = 'text' 
                        value = {this.props.name} 
                        className = {classes.titleInput}/>
        return(
            <div className = {classes.list}>
                <div className = {classes.title} >
                    <div className = {classes.field}>{title}</div>
                    <div className = {classes.more}><p>...</p></div>
                </div>

                <div>
                    {cards.map((card,index) => {
                        return <Card 
                                key = {index}
                                card = {card} />
                    })}
                </div>
                
            </div>
        )
    }
}


export default List;