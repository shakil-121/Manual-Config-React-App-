import React from 'react'
import { Helloworld } from './another';
import Home from './Home';

const App=()=>{
    return (
        <React.Fragment>
        <h1>This is a text line</h1> 
        <Helloworld /> 
        <anoutherHello/> 
        <Home></Home>
        </React.Fragment> 
    )
    
 
} 
 
export default App; 