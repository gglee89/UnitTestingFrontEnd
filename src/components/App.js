import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

// Components
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
  renderButton = () => {
    const { auth } = this.props;

    return (
      <button onClick={() => this.props.changeAuth(!auth)}>{auth ? 'Sign Out' : 'Sign In'}</button>
    )    
  }

  renderHeader = () => {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li>{this.renderButton()}</li>
      </ul>
    )
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path='/' exact component={CommentList} />
        <Route path='/post' component={CommentBox} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(App);