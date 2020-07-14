import React, { Component } from 'react'
import WinnerLogo from "../../assests/images/winners.svg"

export default class HackathonsImg extends Component {
    render() {
        const theme = this.props.theme;
        return (
            <img src={WinnerLogo}></img>
            
            
        )
    }
}
