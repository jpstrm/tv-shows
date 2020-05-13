import React from 'react';
import './Search.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchByName, updateSearch } from '../../store/actions/showsActions';

/**
 * TODO Need added automatically search
 * @param props
 * @returns {*}
 * @constructor
 */
function Search(props) {
    function keyPressed(event) {
        if (event.key === 'Enter') {
            props.updateSearch(event);
            props.searchByName();
        }
    }
    return (
        <div className="search">
            <input type="text" placeholder="Search"
                   value={props.searchValue}
                   onChange={e => props.updateSearch(e)}
                   onKeyPress={e => keyPressed(e)}/>
        </div>
    );
}

const mapToProps = state => ({ searchValue: state.shows.search });
const mapDispatchToProps = dispatch => bindActionCreators({ searchByName, updateSearch }, dispatch);
export default connect(mapToProps, mapDispatchToProps)(Search)
