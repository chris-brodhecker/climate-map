import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Overflow extends Component {
    render() {
        return (
            <svg width="15px" height="4px" viewBox="0 0 20 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <title>_iconography/Menu/Overflow</title>
                <desc>Created with Sketch.</desc>
                <g id="01_Setup" stroke={this.props.fill} strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Project-setup---upload---overflow-menu" transform="translate(-1393.000000, -894.000000)" fill="#051C2C">
                        <g id="_iconography/Menu/Overflow" transform="translate(1391.155210, 884.000000)">
                            <path d="M4.24,10.56 C5.296,10.56 6.16,11.424 6.16,12.48 C6.16,13.536 5.296,14.4 4.24,14.4 C3.184,14.4 2.32,13.536 2.32,12.48 C2.32,11.424 3.184,10.56 4.24,10.56 Z M19.76,10.56 C20.816,10.56 21.68,11.424 21.68,12.48 C21.68,13.536 20.816,14.4 19.76,14.4 C18.704,14.4 17.84,13.536 17.84,12.48 C17.84,11.424 18.704,10.56 19.76,10.56 Z M12,10.56 C13.056,10.56 13.92,11.424 13.92,12.48 C13.92,13.536 13.056,14.4 12,14.4 C10.944,14.4 10.08,13.536 10.08,12.48 C10.08,11.424 10.944,10.56 12,10.56 Z" id="Color"></path>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}


Overflow.propTypes = {
    fill: PropTypes.string
}

Overflow.defaultProps = {
    fill: "#000000"
}