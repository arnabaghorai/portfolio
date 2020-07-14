import React, { Component } from 'react'
import SPITLogo from '../../assests/images/spit.jpg'

export default class SPITImg extends Component {
    render() {
        return (
            
                <img 
                style={{maxWidth:"100%",height:"auto",borderRadius:"30px"}}
                 src={SPITLogo} alt="POP Innovation Challenge">
                    
                 </img>
           
            
        )
    }
}
