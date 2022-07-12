import styled from 'styled-components';

export const LegendContainer = styled.div`
  width: 200px;
  height: 177px;
  border: solid 1px #d9d9d9;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 4;
  display:flex;
  flex-direction: column;
  width: ${props => props.width ? props.width+"px" : "200px"};
`

export const Title = styled.div` 
  font-family: TheInhardtPan;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: 1.05px;
  color: #000000;
  margin-top: 16px;
  margin-left: 16px;    
`
export const ColorBox = styled.div`
    height:19px;
    width:19px;
    background-color: ${props => props.color ? props.color : 'white'}

    `
export const ColorLabel = styled.div` 
font-family: TheInhardtPan;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.49px;
  color: #7f7f7f;
  margin-left: 8px;
`
export const ColorContainer = styled.div` 
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
    margin: 12px 0px 14px 14px;
    height: 128px;
    
`
export const Labels = styled.div` 
    display:flex;
    flex-direction:row;
    padding: 2px;
    align-items:center;
`

