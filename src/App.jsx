import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Search from './components/search/Search';
import ShowList from './components/shows/ShowList';

/**
 * Missing responsive style
 * @returns {*}
 * @constructor
 */
function App() {

    return (
        <div className="App">
            <div className="row">
                <Header title="TV Shows & Movies"/>
            </div>
            <div className="row">
                <Search/>
            </div>
            <div className="row">
                <ShowList />
            </div>
        </div>
    );
}

export default App;
