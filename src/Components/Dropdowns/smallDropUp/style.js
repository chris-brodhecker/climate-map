import styled from 'styled-components';

export const Display = styled.div`
    cursor: pointer;
    height: 44px;
    background-color: rgb(255,255,255,0.9);
    font-family: TheInhardtPan;
    font-size: 15px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 0.5px; 
    color: #000000;
    display: flex;
    align-items: center;
    &:hover {color:#1f40e6};
    &:click {color:#1f40e6};
    padding: 0px 16px 0px 16px;
    margin-left: 12px;
    justify-content: space-between;
    position: relative;
    &:hover svg {
      fill: #1f40e6;
      stroke: #1f40e6;
    }
`
export const DropdownContent = styled.div `
  cursor: pointer;
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
  bottom: 46px;
  background: #ffffff;
  padding-left: 16px;
  padding-right: 16px;
  text-align: left;
  border: 1px solid #D3D3D3;
  z-index: 2;
  padding-top: 8px;
  padding-bottom:8px;
  margin-left: 12px;
  width: inherit;
`
export const DropdownItem = styled.div `
cursor: pointer;
height: 36px;
display: flex;
align-items: center;
&:hover {color:#1f40e6};
`