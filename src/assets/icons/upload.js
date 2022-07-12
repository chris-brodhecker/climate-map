import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class UploadIcon extends Component {
    render() {
        return (
            <svg width="62px" height="42px" viewBox="0 0 62 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <title>Cloud upload-digital-data-storage-technology</title>
                <desc>Created with Sketch.</desc>
                <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Upload" transform="translate(-665.000000, -66.000000)" stroke={this.props.fill}>
                        <g id="drag-n-drop">
                            <g transform="translate(0.000000, 32.000000)">
                                <g id="Cloud-upload-digital-data-storage-technology" transform="translate(665.000000, 35.000000)">
                                    <polyline id="Path" strokeLinejoin="bevel" points="32 35 32 6 22.19 15.81 32 6 41.81 15.81"></polyline>
                                    <path d="M51.5,20 C50.7460777,20.0045839 49.9949278,20.091771 49.26,20.26 C49.4111023,19.3475716 49.491342,18.4248148 49.5,17.5 C49.4938182,8.10005602 42.0588229,0.386073202 32.6654806,0.0337892484 C23.2721382,-0.318494706 15.2802372,6.8169243 14.57,16.19 C13.8869258,16.0659476 13.1942433,16.0023681 12.5,16 C5.872583,16 0.5,21.372583 0.5,28 C0.5,34.627417 5.872583,40 12.5,40 L51.5,40 C57.0228475,40 61.5,35.5228475 61.5,30 C61.5,24.4771525 57.0228475,20 51.5,20 Z" id="Path"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

UploadIcon.propTypes = {
    fill: PropTypes.string
}

UploadIcon.defaultProps = {
    fill: "#000000"
}