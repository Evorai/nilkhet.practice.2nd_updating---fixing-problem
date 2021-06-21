import React, { Component } from 'react'

export default class LoadingBox extends Component {
    render() {
        return (
            <div className="loading">
                <i  className="fa fa-spinner fa-spin"></i>
                <h1>LoadingBox</h1>
            </div>
        )
    }
}
