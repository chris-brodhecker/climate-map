import React from 'react';
import PropTypes from 'prop-types';
import { Display, DropdownContent, DropdownItem } from './style';
import SvgIcon from '../../../assets/icons/SvgIcon'
import onClickOutside from "react-onclickoutside";
import { Geographies } from '../../../constants/geographies'
import { updateGeounit } from '../../../store/actions'
import { connect } from 'react-redux'


class SmallDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            carrotUp:<SvgIcon style={{ display: "flex" }} icon="upCarrot" height={24} width={24} />,
            carrotDown:<SvgIcon style={{ display: "flex" }} icon="downCarrot" height={24} width={24} />,
            initialLabel: this.props.initialLabel,
        }
        this.toggleHidden = this.toggleHidden.bind(this);
        this.fireFunctions = this.fireFunctions.bind(this);
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

    async fireFunctions(mapId, key, name) {
        await this.props.updateGeounit(mapId, key, name)
        this.changeMainLabel(name) 
        this.props.infoObject[key]()
        this.toggleHidden()
    }

    render() {
        let metric = Geographies
        const content = (
            <DropdownContent style={{ width: this.props.width }}>
                {Object.keys(this.props.infoObject).map(key => (
                    <DropdownItem key={(metric[key]) ? metric[key].display : ''}
                         onClick={() => this.fireFunctions(
                        0, key, metric[key].display)}> {(metric[key]) ? metric[key].display : ''}
                    </DropdownItem>
                ))}
            </DropdownContent>
        )
        return (
            <div style={{zIndex:'20'}}>
                
                <Display style={{ width: this.props.width }} onClick={this.toggleHidden}>
                    {this.state.initialLabel}
                    {this.state.isHidden ? this.state.carrotDown : this.state.carrotUp}
                </Display>
                {!this.state.isHidden && content}          
            </div>
        );
    }
}

SmallDropdown.propTypes = {
    infoObject: PropTypes.any.isRequired,
    initialLabel: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired, 
    updateGeounit: PropTypes.func,
};

SmallDropdown.defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    infoObject: [],
    initialLabel: '',
    width: '',
    updateGeounit: () => {},
}

const mapStateToProps = state => ({
    mid: state.mid,
})

const mapDispatchToProps = dispatch => ({
    updateGeounit: (mapId, key, name) => dispatch(updateGeounit({'mapId': mapId, 'key': key, 'name': name})),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(onClickOutside(SmallDropdown))
