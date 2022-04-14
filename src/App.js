import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Question from './Components/Question';

function App() {
    var [score, setScore] = React.useState(0);
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Link to='/question/1'>Attempt</Link>
                    </Route>
                    {/* <Route path='/question/:id'>
                        <Question score={score} setScore={setScore} />
                    </Route> */}
                    <Route
                        path='/question/:id'
                        render={() => (
                            <Question score={score} setScore={setScore} />
                        )}></Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
