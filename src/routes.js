import React from 'react'
import Catcher from './Components/Catcher'
import Pokedex from './Components/Pokedex'
import { Switch, Route } from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component={Pokedex} />
        <Route path='/tallgrass' component={Catcher} />
    </Switch>
)