// import React from 'react'
import React from 'react';
import {LegendContainer, Title, ColorBox, ColorContainer,Labels,ColorLabel} from './styles'

import { TemperatureBucketRanges } from '../../constants/temperatureRanges';

class Legend extends React.Component{

    

    generateBoxes(){
        {
            const legendArray=(TemperatureBucketRanges.map((rangeObject, i) => {
                return(
                    <Labels key={rangeObject.Name}>
                        <ColorBox color={rangeObject.Color}></ColorBox> <ColorLabel>{rangeObject.Range[0]} - {rangeObject.Range[1]}</ColorLabel>
                    </Labels>
                )
            }))

            return {legendArray :legendArray,longestString:8}
        
        }
    }

    render() {
        let colors = this.generateBoxes()
        let width=200;
        if(colors.longestString>9){
            width=300
        }
        return(
            <LegendContainer width={width}>
                <Title>LEGEND (F)</Title>
                <ColorContainer>{colors.legendArray}</ColorContainer>
            </LegendContainer>
        )
    }
}

Legend.defaultProps = {
    maxValue: 100,
    realMax: 0
}


export default Legend
