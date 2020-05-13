import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './ShowList.css';
import { findAll } from '../../store/actions/showsActions';
import Card from '../card/Card';
import ShowImg from './detail/ShowImg';

/**
 * TODO Add pagination
 */
class ShowList extends Component {

    componentDidMount() {
        this.props.findAll();
    }

    render() {
        const shows = this.props.list || [];

        const cardItems = shows.map(show => {
            return (
                <Card key={show.id}  hasImg={!!show.image}>
                    <ShowImg show={show}/>
                </Card>
            )
        });

        return (
            <div className="ShowList">
                {cardItems}
            </div>
        )
    }
}

const mapToProps = state => ({ list: state.shows.list });
const mapDispatchToProps = dispatch => bindActionCreators({ findAll }, dispatch);
export default connect(mapToProps, mapDispatchToProps)(ShowList)
