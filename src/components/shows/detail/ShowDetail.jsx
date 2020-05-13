import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ShowDetail.css';
import { bindActionCreators } from 'redux';
import { Link, Route, Switch } from 'react-router-dom';
import { findById } from '../../../store/actions/showsActions';
import ShowOverview from './ShowOverview';
import ShowEpisodes from './ShowEpisodes';
import ShowDescription from './ShowDescription';
import ShowCast from './ShowCast';

class ShowDetail extends Component {

    componentDidMount() {
        const { id } = this.props.match.params || 1;
        this.props.findById(id);
    }

    render() {
        const show = this.props.show || {};
        const image = show.image ? show.image.medium : '';
        const genres = show.genres || [];
        const url = this.props.match.url;

        return (
            <div className="ShowDetail">
                <Switch>
                    <Route exact path={`${url}`}>
                        <div className="row">
                            <ShowOverview/>
                        </div>
                    </Route>
                    <Route exact path={`${url}/overview`}>
                        <div className="row">
                            <ShowOverview/>
                        </div>
                    </Route>
                    <Route exact path={`${url}/episodes`}>
                        <div className="row">
                            <ShowEpisodes />
                        </div>
                    </Route>
                    <Route exact path={`${url}/details`}>
                        <div className="row">
                            <ShowDescription />
                        </div>
                    </Route>
                    <Route exact path={`${url}/cast`}>
                        <div className="row">
                            <ShowCast />
                        </div>
                    </Route>
                </Switch>
                <div className="row">
                    <div>
                        <Link to={`${url}/overview`}>Overview</Link>
                        <Link to={`${url}/episodes`}>Episodes</Link>
                        <Link to={`${url}/details`}>Details</Link>
                        <Link to={`${url}/cast`}>Cast</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapToProps = state => ({ show: state.shows.selected });
const mapDispatchToProps = dispatch => bindActionCreators({ findById }, dispatch);
export default connect(mapToProps, mapDispatchToProps)(ShowDetail);
