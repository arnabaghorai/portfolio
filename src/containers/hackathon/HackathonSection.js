import React, { Component } from "react";
import "./Hackathon.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { hackathons } from "../../portfolio";
import { Fade } from "react-reveal";
import PopImg from './PopImg';
import VITImg from './VITImg';
import SPITImg from "./SPITImg";


function GetSkillSvg(props){
  if(props.fileName==="PopImg")
      return <PopImg theme={props.theme} />;
  else if(props.fileName==="VITImg")
      return <VITImg theme={props.theme} />;
  
return <SPITImg theme={props.theme} />;

}

class HackathonSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {hackathons.data.map(skill => {
          return (
            <div className="hackathon-main-div">
              <Fade left duration={2000}>
                <div className="hackathon-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="hackathon-text-div">
                <Fade right duration={1000}>
                  <h1 className="hackathon-heading" style={{color: theme.text }}>{skill.title}</h1>
                </Fade>
                {/* <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade> */}
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map(skillSentence => {
                      return (
												<p
													className="subTitle hackathon-text"
													style={{ color: theme.secondaryText }}
												>
													{skillSentence}
												</p>
                                                
                                                
											);
                    })}
                  </div>
                </Fade>
                
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HackathonSection;
