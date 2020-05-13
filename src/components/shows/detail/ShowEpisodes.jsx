import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './ShowEpisodes.css';
import { findAllEpisodes, findAllSeasons, findById } from '../../../store/actions/showsActions';
import EpisodeImg from './EpisodeImg';


class ShowEpisodes extends Component {

    render() {
        const { show, seasons, episodes } = this.props;
        if (show.id && !seasons.length) {
            // Improve to call both once
            this.props.findAllSeasons();
        }
        if (seasons.length && !episodes.length) {
            this.props.findAllEpisodes(seasons[0].id)
        }

        function getOptions(seasons) {
            return seasons.map(season =>
                <option key={season.id} value={season.id}>
                    Season {season.number}
                </option>
            );
        }

        function getEpisodes(episodes) {
            return episodes.map(ep => {
                return <EpisodeImg key={ep.id} episode={ep} />
            })
        }

        return (
            <div className="ShowEpisodes">
                <div className="seasons">
                    <select id="episodes"
                            onChange={e => this.props.findAllEpisodes(+e.target.value)}>
                        {getOptions(this.props.seasons)}
                    </select>
                </div>
                <div className="episodes">
                    {getEpisodes(this.props.episodes)}
                </div>
            </div>
        );
    }
}

const mapToProps = state => ({
    show: state.shows.selected,
    seasons: state.shows.seasons,
    episodes: state.shows.episodeList
});
const mapDispatchToProps = dispatch => bindActionCreators({
    findById,
    findAllSeasons,
    findAllEpisodes
}, dispatch);
export default connect(mapToProps, mapDispatchToProps)(ShowEpisodes);

