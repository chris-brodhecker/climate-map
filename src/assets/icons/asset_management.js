import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class AssetMgmtIcon extends Component {
    render() {
        return (
              <svg width="63px" height="63px" viewBox="0 0 63 63" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="01_Setup" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Project-setup" transform="translate(-334.000000, -340.000000)" stroke={this.props.fill}>
                      <g id="Industry" transform="translate(24.000000, 276.000000)">
                          <g id="asset-management---default" transform="translate(236.000000, 32.000000)">
                              <g id="Business-money-sponsor-revenue-economy" transform="translate(75.000000, 33.000000)">
                                  <rect id="Rectangle" x="0" y="28" width="11" height="24"></rect>
                                  <path d="M11,32 L20.23,32 C21.3554544,32.0060195 22.4332461,32.4550993 23.23,33.25 L32,42 C33.6419083,43.6630171 33.6419083,46.3369829 32,48 L30,50" id="Path"></path>
                                  <path d="M23,43 L34,54 L47.21,54 C48.4812013,53.9973378 49.7011039,54.5011421 50.5999809,55.4000191 C51.4988579,56.2988961 52.0026622,57.5187987 52.0000105,58.79 L52.0000105,61 L29,61 L11,50" id="Path"></path>
                                  <path d="M30.27,5.27 C31.9161835,3.6294754 33.8611828,2.31923153 35.9999926,1.41 C40.4784344,-0.464478355 45.5215656,-0.464478355 49.9999926,1.41 C54.3187462,3.24296374 57.7570363,6.68125376 59.59,11 C61.4644784,15.4784344 61.4644784,20.5215656 59.59,25 C57.7570363,29.3187462 54.3187462,32.7570363 49.9999926,34.59 C45.5215656,36.4644784 40.4784344,36.4644784 35.9999926,34.59 C31.6812538,32.7570363 28.2429637,29.3187462 26.41,25 C25.4772557,22.7842393 24.9978237,20.4040804 24.9999926,18" id="Path"></path>
                                  <path d="M38,22.17 C38,24.47 40.24,26.33 43,26.33" id="Path"></path>
                                  <path d="M48,22.17 C48,24.47 45.76,26.33 43,26.33" id="Path"></path>
                                  <path d="M48,13.83 C48,11.53 45.76,9.67 43,9.67" id="Path"></path>
                                  <path d="M38,13.83 C38,11.53 40.24,9.67 43,9.67" id="Path"></path>
                                  <path d="M43,18 C45.76,18 48,19.86 48,22.17" id="Path"></path>
                                  <path d="M43,18 C40.24,18 38,16.14 38,13.83" id="Path"></path>
                                  <path d="M43,9.67 L43,6.33" id="Path"></path>
                                  <path d="M43,29.67 L43,26.33" id="Path"></path>
                                  <path d="M25,15 L25,11.57" id="Path"></path>
                                  <path d="M25,6.43 L25,3" id="Path"></path>
                                  <path d="M31,9 L27.57,9" id="Path"></path>
                                  <path d="M22.43,9 L19,9" id="Path"></path>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
              </svg>
        )
      }
}

AssetMgmtIcon.propTypes = {
  fill: PropTypes.string
}

AssetMgmtIcon.defaultProps = {
  fill: "#000000"
}
