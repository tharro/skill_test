import React, { Component } from 'react';
import UserView from './UserView';
import { connect } from 'react-redux';
import * as userActions from '../action';
import { getUserState } from '../selectors';

class UserContainer extends Component {
    render() {
        return <UserView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        loading: state.userReducers.isLoading,
        user_data: getUserState(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetUser: () => dispatch(userActions.requestUser())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer);
