import React, { Component } from 'react';

export default class UnauthorizedErr extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3 mx-auto">
          <div className="text-center">
            <div className="error-icon">
            <span className="material-symbols-outlined text-danger">warning</span>            
            </div>
            <p>Unauthorized! You do not have enough permission to access this page</p>
          </div>
        </div>
      </div>
    );
  }
}