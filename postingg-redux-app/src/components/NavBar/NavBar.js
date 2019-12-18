import React from 'react';
import classes from './NavBar.module.css';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const navbar = (props) => {
    return(
    <div className  = {classes.mainnav}>
        <nav role={classes.navigation}>
        <div className={classes.menuToggle}>
        
            <input type="checkbox" />
            
        
            <span></span>
            <span></span>
            <span></span>
            
            <ul className={classes.menu}>
            <p className = {classes.brandtoggle}>Posting App</p>
            <Link to = "/"><li>Home</li></Link>
            <Link to = "/"><li>All Posts</li></Link>
            <Link to = "/login" ><li>Login</li></Link>
            <Link to = "/signup"><li>Sign Up</li></Link>
           
            </ul>
        </div>
        </nav>




        <div className = {classes.leftnav}>
            <p className = {classes.brand}>Posting App</p>
            <div className = {classes.leftlinks}>
                <p>Home</p>
                <p onClick = {() => {
                    let to = "/"
                    props.history.push(to)
                }}>All Posts</p>
            </div>
            
        </div>
       <div className = {classes.rightnav}>
            <p onClick = {()=> {
                let to = "/login"
                props.history.push(to)
                props.onSwitch()
            }}>Login</p>
            <p onClick = {()=> {
                let to = "/signup"
                props.history.push(to)
                props.onSwitch()
            }}>Sign Up</p>
        </div>
    </div>
    )
    
}


const mapDispatchToProps = dispatch => {
    return {
        onSwitch : () => dispatch(actions.switchAuth())
    }
}

export default withRouter(connect(null,mapDispatchToProps)(navbar));