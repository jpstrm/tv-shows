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
        const schedule = show.schedule || {};
        schedule.days = schedule.days || [];

        return (
            <div className="ShowOverview">
                <div className="img">
                    <ShowImg show={show}/>
                </div>
                <div className="details">
                    <p className="title">{show.name}</p>
                    <p className="season">Season: <strong>{episode.season}</strong></p>
                    <p className="season">
                        Schedule: <span>{schedule.days.join(', ')} </span>
                        at <strong>{schedule.time}</strong>
                    </p>
                    <p className="season">Status: <strong>{show.status}</strong></p>
                    <p className="season">Show Type: <strong>{show.type}</strong></p>
                    <p className="season">Genres: <strong>{show.type}</strong></p>
                </div>
            </div>
        );
    }
}

const mapToProps = state => ({
    show: state.shows.selected,
    episode: state.shows.episode,
});
const mapDispatchToProps = dispatch => bindActionCreators({findLastEpisode}, dispatch);
export default connect(mapToProps, mapDispatchToProps)(ShowOverview);
