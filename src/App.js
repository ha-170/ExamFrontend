import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Courses from './Components/Courses.js';
import facade from "./Components/ApiFacade";
import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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
                    <Route path='/user'>
                        show user
                    </Route>
                    <Route path='/admin'>
                        show admin stuff
                    </Route>
                    <Route path='/courses'>
                        <Courses />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;