import React from 'react';
import Nav from './SpeechTextNav/Nav';

import classes from './SpeechText.module.css';
import { Switch, Route } from 'react-router-dom';

import LiveSpeech from './LiveSpeechText/LiveSpeechText';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import CallsHistory from './CallsHistory/CallsHistory';




const SpeechText = (props) => {
    return (
        <div className = {classes.main}> 
            <Nav/>  

            <Switch>
                {/* <Route path = '/speech/live' exact component = {() => <LiveSentiment/> } /> */}
                {/* <LiveSpeech/> */}
                {/* <GeneralInfo/> */}
                <CallsHistory/>
            </Switch>
        </div>
    )
}

export default SpeechText;