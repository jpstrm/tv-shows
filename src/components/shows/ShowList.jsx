import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './ShowList.css';
import { findAll } from '../../store/actions/showsActions';
import Card from '../card/Card';
import If from '../commons/If';

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
            const image = show.image ? show.image.medium : '';

            return (
                <Card key={show.id}  hasImg={!!image}>
                    <If test={image}>
                        <img src={image} alt="Show"/>
                    </If>
                    <If test={!image}>
                        <p>{show.name}</p>
                    </If>
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
