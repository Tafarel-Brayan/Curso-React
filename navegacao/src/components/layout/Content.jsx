import './Content.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from  'react-router-dom'

import Home from './../../views/examples/Home'
import About from './../../views/examples/About'
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';

const Content =  props => (
    <main className="Content" >
        <Switch>
            <Route exact path='/' ><Home /></Route>
            <Route path='/about' ><About /></Route>
            <Route path='/param/:id' > <Param/> </Route>
            <Route path='*' ><NotFound /></Route>
            
        </Switch>
    </main>
)

export default Content