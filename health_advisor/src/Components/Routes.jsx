import React from 'react';
import {Route} from 'react-router-dom'
import Form from './Form';
import Result from './Result';

function Routes(){
    return (
        <div>
            <Route path="/" exact>
                <Form></Form>
            </Route>
            <Route path="/results">
                <Result></Result>
            </Route>
        </div>
    )
}
export default Routes