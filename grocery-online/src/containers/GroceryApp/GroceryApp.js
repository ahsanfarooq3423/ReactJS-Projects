import React, {Component} from 'react';
import GroceryTypes from '../../components/Grocery/GroceryTypes/GroceryTypes';
import GroceryItems from '../../components/Grocery/GroceryItems/GroceryItems';
import classes from './GroceryApp.module.css';


class GroceryApp extends Component {
    state = {
        
        categories : {
            bread : { name : 'Bread' , items : {
                'toast' : {}, 'pita' : {}, 'whole-wheat' : {}
            } },
            dairy : { name : 'Dairy' , items : {
                'milk' : {}, 'cheese' : {} , 'butter' : {}
            } },
            fruits : { name : 'Fruits' , items : {
                'banana' : {} , 'apple' : {} , 'grapes' : {}
            } },
            seasons_spices : { name : 'Seasonings and Spices' , items : {
                'clove' : {}, 'chili' : {} , 'oregano' : {}
            } },
            vegetables : { name : 'Vegetables', items : {
                'tomato' : {}, 'potato': {} , 'spincah' : {}
            }}

        }
    }

    getCategoriesNames = () => {
        let names =  Object.keys(this.state.categories).map (type => {
            return this.state.categories[type].name
        })
        return names;
    }


    render(){
        return(
            <div className = {classes.container}> 
                <GroceryTypes types = {this.getCategoriesNames()} />
                <GroceryItems/>
            </div>
        );
    }
}

export default GroceryApp;