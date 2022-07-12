import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class RetirementIcon extends Component {
    render() {
        return (
            <svg width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            
              <g id="01_Setup" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Project-setup" transform="translate(-570.000000, -340.000000)">
                  <g id="Industry" transform="translate(24.000000, 276.000000)">
                    <g id="retirement---default" transform="translate(472.000000, 32.000000)">
                      <g id="Piggy-bank-money-economy-cash-coin" transform="translate(75.000000, 33.000000)">
                        <path d="M55.46,36 C55.46,25.7 44.53,17.38 31,17.38 C28.984714,17.3932081 26.9754039,17.6008368 25,18 C24.5194235,16.84658 23.8198583,15.7972321 22.94,14.91 C21.1454921,13.1208259 18.7140472,12.1173154 16.18,12.1199946 L16.18,21.27 C11.6,23.94 8.3,27.82 7.11,32.27 L0.25,32.27 L0.25,46.07 L10.54,46.07 C12.4193615,48.2272927 14.6934298,50.0058177 17.24,51.31 L17.24,62 L25.73,62 L29.07,54.51 C29.72,54.51 30.38,54.57 31.07,54.57 C32.4071575,54.5674894 33.7429358,54.4840033 35.07,54.32 L38.47,62 L47,62 L47,50 C52.17,46.63 55.46,41.59 55.46,36 Z" id="Path" stroke={this.props.fill}></path>
                        <path d="M61.75,31.19 C61.75,34.7080539 58.8980539,37.56 55.38,37.56" id="Path" stroke={this.props.fill}></path>
                        <circle id="Oval" stroke={this.props.fill} cx="31" cy="7.03" r="7"></circle>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          )
      }
  }

RetirementIcon.propTypes = {
  fill: PropTypes.string
}

RetirementIcon.defaultProps = {
  fill: "#000000"
}
