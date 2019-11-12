import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Auth = (props) => (props.user ? props.children: <Redirect to="/" />)


Auth.propTypes = {
    user : PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        user: state.user.userName
    }
};

export default connect(mapStateToProps)(Auth)
