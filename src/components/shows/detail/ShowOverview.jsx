import React, { Component } from 'react';
import './ShowOverview.css';
import ShowImg from './ShowImg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findLastEpisode } from '../../../store/actions/showsActions';

class ShowOverview extends Component {

    render() {
        const { show, episode } = this.props;
        if (show.id && !episode.id) {
            this.props.findLastEpisode();
        }

        return (
            <div className="ShowOverview">
                <div className="img">
                    <ShowImg show={show}/>
                </div>
                <div>
                    <p className="title">{show.name}</p>
                    <p className="season">Season <strong>{episode.season}</strong></p>
                </div>
            </div>
        );
    }
}

const mapToProps = state => ({
    show: state.shows.selected,
    episode: state.shows.episode,
});
const mapDispatchToProps = dispatch => bindActionCreators({ findLastEpisode }, dispatch);
export default connect(mapToProps, mapDispatchToProps)(ShowOverview);