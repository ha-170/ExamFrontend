import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import AddCourse from './Components/AddCourse.js';
import AddClass from './Components/AddClass.js';
import facade from "./Components/ApiFacade";
import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Classes from './Components/Classes';

function App() {

    const token = facade.getToken();
    const isLoggedIn = token!==null;
    const [loggedIn, setLoggedIn] = useState(isLoggedIn);
    
    return (
        <div>
        <Header loggedIn={loggedIn}/>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path='/login'>
                        <Login setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
                    </Route>
                    <Route path='/add-course'>
                        <AddCourse />
                    </Route>
                    <Route path='/add-class'>
                        <AddClass />
                    </Route>
                    <Route path='/classes'>
                        <Classes />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;