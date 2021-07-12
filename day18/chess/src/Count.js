import React from 'react'
import Box from './Box'

const Count = ({color1, color2}) => {

    return (
        <div className="count">
        <div className="count-container">
            <Box color={color1}/>
            <Box color={color2}/>
            <Box color={color1}/>
            <Box color={color2}/>
            <Box color={color1}/>
            <Box color={color2}/>
            <Box color={color1}/>
            <Box color={color2}/>
            </div>
        </div>
    )
}

export default Count
