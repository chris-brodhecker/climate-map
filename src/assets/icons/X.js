/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class X extends Component {
    render() {
        // const viewBox = `0 0 ${this.props.width} ${this.props.height}`
        const height = `${this.props.height}px`
        const width = `${this.props.width}px`
        return (
            <svg width={width} height={height} viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <path d="M5.58927072,19.6849882 L12.0005078,13.273751 L18.4109501,19.6841933 C18.7630819,20.0354419 19.3334525,20.0363251 19.6847011,19.6850765 C20.036833,19.3329446 20.036833,18.7616909 19.6847011,18.4104422 L13.2742589,12 L19.6847011,5.58867456 C20.036833,5.23742592 20.036833,4.66705536 19.6847011,4.31501184 C19.3334525,3.96367488 18.7621987,3.96367488 18.4109501,4.31501184 L12.0005078,10.7253658 L5.58927072,4.31501184 C5.23713888,3.96288 4.66676832,3.96367488 4.31551968,4.31501184 C4.1464658,4.48382734 4.05147226,4.71293341 4.05147226,4.9518432 C4.05147226,5.19075299 4.1464658,5.41985906 4.31551968,5.58867456 L10.7267568,11.9991168 L4.31463648,18.4113254 C3.96338784,18.7625741 3.96338784,19.3337395 4.31463648,19.6849882 C4.66676832,20.0363251 5.23713888,20.03712 5.58927072,19.6849882" id="path-1"></path>
                </defs>
                <g id="01_Setup" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Project-setup---upload---comment-modal" transform="translate(-1018.000000, -290.000000)">
                        <g id="Group" transform="translate(379.000000, 255.000000)">
                            <g id="Group-7">
                                <g id="_Guidelines/Iconography/Primary/Close" transform="translate(635.000000, 31.000000)">
                                    <mask id="mask-2" fill="white">
                                        <use href="#path-1"></use>
                                    </mask>
                                    <use id="Color" fill="#051C2C" fillRule="evenodd" href="#path-1"></use>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}

X.propTypes = {
    fill: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
}

X.defaultProps = {
    fill: "#000000",
    height: '24',
    width: '24'
}