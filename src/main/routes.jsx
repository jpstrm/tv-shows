import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import ShowDetail from '../components/shows/detail/ShowDetail';
import ShowOverview from '../components/shows/detail/ShowOverview';
import ShowEpisodes from '../components/shows/detail/ShowEpisodes';
import ShowDescription from '../components/shows/detail/ShowDescription';
import ShowCast from '../components/shows/detail/ShowCast';

const routing = (props) => {
    return (
        <Router>
            <div>
                <Route path='/' component={App}/>
                <Route path='/shows/detail/:id' component={ShowDetail}/>
                <Route path="/shows/detail/:id/#overview"  component={ShowOverview} />
                <Route path="/shows/detail/:id/#episodes"  component={ShowEpisodes} />
                <Route path="/shows/detail/:id/#details"  component={ShowDescription} />
                <Route path="/shows/detail/:id/#cast"  component={ShowCast} />
            </div>
        </Router>
    );
};

export default routing;
