/* eslint-disable no-undef */
/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    EditIcon, SettingsIcon, DownloadIcon, 
    MaximizeIcon, OverflowIcon, OneMap,
    TwoMap, ThreeMap,DownCarrot,
    UpCarrot,TreeMap,BarGraph,LeftCarrot,
    RightCarrot, Info, Search, LeftArrow, RightArrow,
    Dots,Export, Check, Minus, Empty, TrashIcon, Draw
} from './IconPaths'


export default class SvgIcon extends Component {
    constructor(props) {
        super(props)
        let fill, stroke

        if(this.props.stroke === "#ffffff"){
            fill = "#ffffff"
            stroke = "#ffffff"

        }else if (this.props.selected) {
            fill = "#1f40e6"
            stroke = "#ffffff"
        }
        else {
            fill = "#000000"
            stroke = "#000000"
        }
        this.state = {
            fill: fill,
            stroke: stroke,
            hover: false
        }
    }
    
    getIconPath() {
        switch (this.props.icon) {
            case 'edit':
                return EditIcon()
            case 'download':
                return DownloadIcon()
            case 'maximize':
                return MaximizeIcon()
            case 'overflow':
                return OverflowIcon()
            case 'onemap':
                return OneMap(this.props.selected, this.state.hover)
            case 'twomap':
                return TwoMap(this.props.selected, this.state.hover)
            case 'threemap':
                return ThreeMap(this.props.selected, this.state.hover)
            case 'downCarrot':
                return DownCarrot()
            case 'upCarrot':
                return UpCarrot()
            case 'rightCarrot':
                return RightCarrot()
            case 'leftCarrot':
                return LeftCarrot()
            case 'barGraph':
                return BarGraph(this.props.selected, this.state.hover)
            case 'treeMap':
                return TreeMap(this.props.selected, this.state.hover)
            case 'info':
                return Info()
            case 'search':
                return Search()
            case 'leftArrow':
                return LeftArrow()
            case 'rightArrow':
                return RightArrow()
            case 'dots':
                return Dots()
            case 'export':
                return Export()
            case 'check':
                return Check()
            case 'minus':
                return Minus()
            case 'settings':
                return SettingsIcon()
            case 'empty':
                return Empty()
            case 'trash':
                return TrashIcon()
            case 'draw':
                return Draw(this.props.highlight)
            default:
                return EditIcon()
        }
    }

    hoverFill() { 
        this.setState({ hover: true })
        if(this.props.noHover===true){
            // do nothing
        }
        else if (!this.props.selected) {
            this.setState({ fill: "#1f40e6", stroke: "#1f40e6" })
        }
    }

    defaultFill() {
        this.setState({ hover: false })
        if(this.props.noHover===true){
            // do nothing
        }
        else if (!this.props.selected) {
            this.setState({ fill: "#000000", stroke: "#000000" })
        }
    }

    fillColor(highlight) {
        if(this.props.noHover===true){
            //if background is electric blue
            return  "#ffffff"
        }
        if(highlight) {
            //if it is in the header and it "clicked"
            return "#1f40e6"
        }
        return this.state.fill
    }
    
    render() {
        const height = `${this.props.height}px`
        const width = `${this.props.width}px`
        return (
            <div style = {{display:"flex", cursor: "pointer", justifyContent: "center"}} 
            onMouseEnter={() => this.hoverFill()} 
            onMouseLeave={() => this.defaultFill()}>
                <svg height={height} width={width} stroke={this.fillColor(this.props.highlight)} 
                fill={this.fillColor(this.props.highlight)} strokeWidth="0px"  viewBox="0 0 24 24">
                    {this.getIconPath()}
                </svg >
            </div>)
    }
}

SvgIcon.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    icon: PropTypes.string,
    selected: PropTypes.bool,
    noHover: PropTypes.bool,
    stroke: PropTypes.string,
    fill: PropTypes.string,
    highlight: PropTypes.bool
}

SvgIcon.defaultProps = {
    height: '24',
    width: '24',
    icon: '',
    selected: false,
    noHover: false,
    stroke: "#000000",
    fill: "#000000",
    highlight: false
}
