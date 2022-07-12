import React from 'react';
import PropTypes from 'prop-types';
import { Display, DropdownContent, DropdownItem } from './style';
import SvgIcon from '../../../assets/icons/SvgIcon'
import onClickOutside from "react-onclickoutside";


class GeneralDropdown extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            isHidden: true,
            infoObject: {},
            carrotUp: <SvgIcon style={{ display: "flex" }} icon="upCarrot" height={24} width={24} />,
            carrotDown: <SvgIcon style={{ display: "flex" }} icon="downCarrot" height={24} width={24} />,
            initialLabel: this.props.initialLabel,
        }
        this.toggleHidden = this.toggleHidden.bind(this);
        this.fireFunctions = this.updateDropDown.bind(this);
        this.changeMainLabel = this.changeMainLabel.bind(this);

    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        });

    }
    changeMainLabel(newLabel) {
        this.setState({
            initialLabel: newLabel
        })
    }
    handleClickOutside() {
        this.setState({
            isHidden: true
        })
    }

    async updateDropDown(key, name) {
        this.props.actionOnChange(this.props.infoObject[key])
        this.changeMainLabel(name)
        // this.props.infoObject[key]()
        this.toggleHidden()
    }

    render() {
        let Metrics = this.props.infoObject
        const content = (
            <DropdownContent style={{ width: this.props.width }} >
                {Object.keys(Metrics).map(key => (
                    <DropdownItem key={(Metrics[key]) ? Metrics[key].display : ''} onClick={(e) => { this.updateDropDown(key, Metrics[key].display) }}>{(Metrics[key]) ? Metrics[key].display : ''}
                    </DropdownItem>
                ))}
            </DropdownContent>
        )
        return (
            <div>
                <Display style={{ width: this.props.width }}
                    onMouseEnter={() => this.props.mouseEnterHandler()}
                    onClick={this.toggleHidden}>
                    {this.state.initialLabel}
                    {!this.state.isHidden ? this.state.carrotUp : this.state.carrotDown}
                </Display>
                {!this.state.isHidden && content}
            </div>
        )
    }
}

GeneralDropdown.propTypes = {
    infoObject: PropTypes.any.isRequired,
    initialLabel: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    mapId: PropTypes.number.isRequired,
    selectionType: PropTypes.string.isRequired,
    updateGeounit: PropTypes.func,
    updateMetric: PropTypes.func,
    mouseEnterHandler: PropTypes.func,
}

GeneralDropdown.defaultProps = {
    infoObject: [],
    initialLabel: '',
    width: '',
    selectionType: 'Metric',
    mapId: -1,
    updateGeounit: () => { },
    updateMetric: () => { },
    mouseEnterHandler: () => { }
}


export default (onClickOutside(GeneralDropdown))
