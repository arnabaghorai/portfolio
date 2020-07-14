import React, { Component } from 'react'
import PopLogo from '../../assests/images/popwinner.jpg'

export default class PopImg extends Component {
    render() {
        return (
           
                <img 
                style={{maxWidth:"100%",height:"auto",borderRadius:"30px"}} 
                src={PopLogo} alt="POP Innovation Challenge"></img>
            
            
            
        )
    }
}
