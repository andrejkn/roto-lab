import React from 'react';
import { connect } from 'react-redux';

// import { Link } from 'react-router';

function mapStateToProps( /** state */) {
  // return {
  // };
}

function mapDispatchToProps( /** dispatch */ ) {
  // return {
  // };
}

function App({ children }) {
  return (
    <div>
      Roto-lab !
      { children }
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
