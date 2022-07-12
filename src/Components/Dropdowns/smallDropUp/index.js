import React from 'react';
import PropTypes from 'prop-types';
import { Display, DropdownContent, DropdownItem } from './style';
import SvgIcon from '../../../assets/icons/SvgIcon'
import onClickOutside from "react-onclickoutside";


class SmallDropup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: true,
            infoObject: this.props.infoObject,
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

    fireFunctions(key) {
        this.changeMainLabel(key) 
        this.state.infoObject[key]()
        this.toggleHidden()

    }
    render() {
        const content = (
            <DropdownContent style={{ width: this.props.width }}>
                {Object.keys(this.state.infoObject).map(key => (
                    <DropdownItem key={key} onClick={() => this.fireFunctions(key)}>{key} </DropdownItem>
                ))}
            </DropdownContent>
        ) 
        return (
            <div style={{position: 'relative'}}>
                {!this.state.isHidden && content}
                <Display style={{ width: this.props.width }} onClick={this.toggleHidden}>
                    {this.state.initialLabel}
                    {this.state.isHidden ? this.state.carrotDown : this.state.carrotUp}
                </Display>
                
            </div>

        );
    }
}

SmallDropup.propTypes = {
    infoObject: PropTypes.any.isRequired,
    initialLabel: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
   
};

SmallDropup.defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    infoObject: [],
    initialLabel: '',
    width: '',
   
  }

export default onClickOutside(SmallDropup)
