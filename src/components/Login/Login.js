import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

const Login = (props) => {};

Login.propTypes = {};

function mapStateToProps(state) {
  return { ...state.data };
}

export default connect(mapStateToProps)(Login);
