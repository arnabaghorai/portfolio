import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
// import Certifications from '../../containers/certifications/Certifications';
// import CompetitiveSites from '../../components/competitiveSites/CompetitiveSites';
import HackathonsImg from './HackathonsImg';
// import {competitiveSites}  from "../../portfolio";
import Hackathon from "../../containers/hackathon/Hackathon"
import "./Hackathons.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
	  const theme = this.props.theme;
    return (
			<div className="hacakthon-main">
				<Header theme={this.props.theme} />
				<div className="basic-hackathon">
					<Fade bottom duration={2000} distance="40px">
						<div className="heading-div">
							<div className="heading-img-div">
								{/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
								<HackathonsImg theme={theme} />
							</div>
							<div className="heading-text-div">
								<h1 className="heading-text" style={{ color: theme.text }}>Achievements</h1>
								<p className="heading-sub-text subTitle" style={{ color: theme.secondaryText, fontSize:"20px" }}>
								I have participated in various hackathons and competitions,where I developed skills like team-work, leadership and time-management and also learned how to evaluate the feasibilty and business aspect of a product. 
								</p>
								{/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
							</div>
						</div>
					</Fade>
					<Hackathon theme={this.props.theme} />
					{/* <Certifications theme={this.props.theme} /> */}
				</div>
				<Footer theme={this.props.theme} />
			</div>
		);
  }
}

export default Education;
