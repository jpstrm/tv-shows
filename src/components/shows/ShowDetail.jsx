import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ShowList.css';
import Card from '../card/Card';

/**
 * TODO Create detail page
 */
class ShowDetail extends Component {

    render() {
        const show = this.props.selected || {};
        const image = show.image ? show.image.medium : '';

        return (
            <div>
                <Card>
                    <img src={image} alt="Show"/>
                </Card>
                <table>
                    <thead>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Schedule</th>
                    <th>Status</th>
                    <th>Show Type</th>
                    <th>Genres</th>
                    </thead>
                </table>
                <tbody>
                <tr>{show.name}</tr>
                <tr>{show.runtime}</tr>
                <tr>{show.schedule}</tr>
                <tr>{show.status}</tr>
                <tr>{show.type}</tr>
                <tr>{show.genres.join(' - ')}</tr>
                </tbody>
            </div>
        );

    }
}

const mapToProps = state => ({ selected: state.shows.selected });
export default connect(mapToProps)(ShowDetail)
