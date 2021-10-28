import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { updateApp } from '../actions/App.actions';
import { DisplayNews } from './DisplayNews';
import DisplayTimeForTimeZone from './DisplayTimeForTimeZone';
import { SecondsCouter } from './SecondsCounter';
import Select from './Select';

class HomePage extends Component<any> {

    componentDidMount() {
        // console.log(this.props);
    }

    handleClick = () => {
        const { updateApp } = this.props;
        updateApp();
    }

    render() {
        return (
            <div>
                This is Home Page
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        randomData: state.homePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateApp: () => dispatch(updateApp())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);