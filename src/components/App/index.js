import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import {connect } from 'react-redux';
const App = props => <div>
 <RaisedButton label={'Click to increment'} onClick={props.onClick} />
 {props.counter}
</div>
App.propTypes = {
 counter: PropTypes.number.isRequired,
 onClick: PropTypes.func.isRequired
}
App.defaultProps = {
 counter: 10,
 onClick: () => console.log('default click action')
}

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    counter: state.basic.counter
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      onClick: () => {
        dispatch({type: 'INCREMENT'})
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
