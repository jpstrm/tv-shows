import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import ShowList from './components/shows/ShowList';
import { Link, Route, Switch } from 'react-router-dom';
import ShowDetail from './components/shows/detail/ShowDetail';

/**
 * Missing responsive style
 * @returns {*}
 * @constructor
 */
function App(props) {
    return (
        <div className="App">
            <div className="row">
                <Link to="/">
                    <Header title="TV Shows & Movies"/>
                </Link>
            </div>
            <Switch>
                <Route exact path="/">
                    <div className="row">
                        <Search/>
                    </div>
                    <div className="row">
                        <ShowList />
                    </div>
                </Route>
                <Route exact path="/shows/detail">
                    <div className="row">
                        <ShowDetail />
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
