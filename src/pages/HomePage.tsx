import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { updateApp } from '../actions/App.actions';


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