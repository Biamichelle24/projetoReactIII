import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../Pages/Home'
import Drag from '../Pages/Drag'
import Sobre from '../Pages/Sobre'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>                
                <Route path="/drag" component={Drag}/>  
                <Route path="/sobre" component={Sobre}/>   
            </Switch>   
        </BrowserRouter>
    )
}

export default Routes