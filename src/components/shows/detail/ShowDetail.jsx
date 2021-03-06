import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ShowDetail.css';
import { bindActionCreators } from 'redux';
import { Link, Route, Switch } from 'react-router-dom';
import { clearSelected, findById } from '../../../store/actions/showsActions';
import ShowOverview from './ShowOverview';
import ShowEpisodes from './ShowEpisodes';
import ShowDescription from './ShowDescription';
import ShowCast from './ShowCast';

class ShowDetail extends Component {

    componentDidMount() {
        const { id } = this.props.match.params || 1;
        this.props.findById(id);
    }

    componentWillUnmount() {
        this.props.clearSelected();
    }

    render() {
        const url = this.props.match.url;

        return (
            <div className="ShowDetail">
                <div className="content">
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
                </div>
                <div className="row menu">
                    <ul>
                        <li><Link to={`${url}/overview`}>Overview </Link></li>
                        <li><Link to={`${url}/episodes`}>Episodes </Link></li>
                        <li><Link to={`${url}/details`}>Details </Link></li>
                        <li><Link to={`${url}/cast`}>Cast</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapToProps = state => ({ show: state.shows.selected });
const mapDispatchToProps = dispatch => bindActionCreators({ findById, clearSelected }, dispatch);
export default connect(mapToProps, mapDispatchToProps)(ShowDetail);
