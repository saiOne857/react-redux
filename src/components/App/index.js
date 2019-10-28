import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import {connect } from 'react-redux';
import { fetchPosts } from './../../actions/basic.actions'
import Page from './../Page'
const App = props => <Page>
    <div>
        <RaisedButton label={'Click get Posts'} onClick={() => props.onClick()} />
        {props.counter}
        {JSON.stringify(props.posts)}
    </div>
</Page>
App.propTypes = {
 counter: PropTypes.number.isRequired,
 onClick: PropTypes.func.isRequired
}
App.defaultProps = {
 counter: 10,
 onClick: () => console.log('default click action')
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.basic.counter,
    posts: state.basic.posts
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      onClick: () => dispatch(fetchPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
