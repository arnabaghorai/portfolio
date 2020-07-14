/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
	isSplash: false, // Change this to false if you don't want Splash screen.
};


//Home Page
const greeting = {
	intro:"আমি Arnab Ghorai",
	title: "Arnab Ghorai",
	logo_name: "ArnabGhorai",
	nickname: "urban",
	subTitle: "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
	resumeLink: "https://drive.google.com/file/d/1i62dHHv0-smrxejSkOXG9r2-n0gNVQ55/view?usp=sharing",
	portfolio_repository: "https://github.com/arnabaghorai",
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/arnabaghorai",
	linkedin: "https://www.linkedin.com/in/arnab-ghorai/",
	gmail: "arnabaghorai@gmail.com",
	instagram: "https://www.instagram.com/arnabghorai/"
};

const hackathons = {
	data: [{
			title: "POP 91+ Innovation Challenge",
			fileName: "PopImg",
			skills: [
				"Bangalore, Aug 2019",
				"IOT India Congress | IET | Skillenza",
				" ", 
				" ",
				"🎉 Winner - 🥇 1st Place (Agriculture Track)",
				"⚡  Developed a cross-platform application (Flutter) that provides personalised scheme recommendation applicable to the farmer.",
				"⚡  Developed an interface that displayed the shortest route between warehouse and consumers using Genetic Algorithm.",
				"⚡  Created a tool that provides aid in sorting crops by predicting bad crops from given video source."
			],
			
		},
		{
			title: "CSI S.P.I.T Hackathon 2020",
			fileName: "SPITImg",
			skills: [
				"Mumbai , Jan 2020",
				"CSI | Matic | Wolfram",
				" ",
				" ",
				"🎉 Winner - 🥇 1st Place (Blockchain Domain)",
				"⚡ Developed a tamper-proof and trustless identity management system using Ethereum blockchain.",
				"⚡ Private IPFS cluster used for storing user's data.",
				"⚡ Business Logic implemented using Smart Contracts written in Solidity",
				"⚡ Endpoints created in Flask along with web3.js",
				"⚡ Developed a cross-platform (Flutter) mobile application.",

			],
		},
		{
			title: "V.I.T Hacks'19",
			fileName: "VITImg",
			skills: [
				"Vellore, Sept 2019",
				"Gravitas'19 | V.I.T ",
				" ",
				" ",
				"🎉 Winner - 🥈 2nd Place (Education Track)",
				"⚡ Developed an application that takes speech query as an input and seeks to the particular time in the video where the keyword occurs using Named Entity recognition.",
				"⚡ Developed a QnA chatbot by fine tuning BERT(Bidirectional Encoder Representations from Transformations) on SQUAD-2.0 dataset.",
				

			],
		},
		
	]
};


const skills = {
	data: [{
			title: "Data Science & AI",
			fileName: "DataScienceImg",
			skills: [
				"⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
				"⚡ Experience of working with Computer Vision and NLP projects",
				"⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"
			],
			softwareSkills: [{
					skillName: "Python",
					fontAwesomeClassname: "ion-logo-python",
					style: {
						backgroundColor: "transparent",
						color: "#3776AB"
					}
				},
				{
					skillName: "Tensorflow",
					fontAwesomeClassname: "logos-tensorflow",
					style: {
						backgroundColor: "transparent"
					}
				},
				{
					skillName: "Keras",
					fontAwesomeClassname: "simple-icons:keras",
					style: {
						backgroundColor: "white",
						color: "#D00000"
					}
				},
				{
					skillName: "PyTorch",
					fontAwesomeClassname: "logos-pytorch",
					style: {
						backgroundColor: "transparent"
					}
				},
				

			]
		},
		{
			title: "Full Stack Development",
			fileName: "FullStackImg",
			skills: [
				"⚡ Creating application backend in Django, Flask & Node",
				"⚡ Building resposive website front end",
				"⚡ Developing mobile applications using Flutter",

			],
			softwareSkills: [{
					skillName: "Django",
					fontAwesomeClassname: "simple-icons:django",
					style: {
						color: "#04260d"
					}
				},
				{
					skillName: "Flask",
					fontAwesomeClassname: "ion-logo-python",
					style: {
						color: "#663399"
					}
				},
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "simple-icons:node-dot-js",
					style: {
						color: "#339933"
					}
				},
				{
					skillName: "HTML5",
					fontAwesomeClassname: "simple-icons:html5",
					style: {
						color: "#E34F26"
					}
				}, 
				// {
				// 	skillName: "CSS3",
				// 	fontAwesomeClassname: "fa-css3",
				// 	style: {
				// 		color: "#1572B6"
				// 	}
				// },
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "simple-icons:javascript",
					style: {
						backgroundColor: "#000000",
						color: "#F7DF1E"
					}
				}, {
					skillName: "ReactJS",
					fontAwesomeClassname: "simple-icons:react",
					style: {
						color: "#61DAFB"
					}
				},
				// {
				// 	skillName: "Gatsby",
				// 	fontAwesomeClassname: "simple-icons:gatsby",
				// 	style: {
				// 		color: "#663399"
				// 	}
				// },


				{
					skillName: "Flutter",
					fontAwesomeClassname: "simple-icons:flutter",
					style: {
						color: "#02569B"
					}
				}
			]
		},
		{
			title: "Cloud Infra-Architecture",
			fileName: "CloudInfraImg",
			skills: [
				"⚡ Experience working on multiple cloud platforms",
				"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
				"⚡ Deploying deep learning models on cloud to use on mobile devices",
				"⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"
			],
			softwareSkills: [{
					skillName: "GCP",
					fontAwesomeClassname: "simple-icons:googlecloud",
					style: {
						color: "#4285F4"
					}
				},
				{
					skillName: "AWS",
					fontAwesomeClassname: "simple-icons:amazonaws",
					style: {
						color: "#FF9900"
					}
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "simple-icons:microsoftazure",
					style: {
						color: "#0089D6"
					}
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "simple-icons:firebase",
					style: {
						color: "#FFCA28"
					}
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "simple-icons:postgresql",
					style: {
						color: "#336791"
					}
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "simple-icons:mongodb",
					style: {
						color: "#47A248"
					}
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "simple-icons:docker",
					style: {
						color: "#1488C6"
					}
				},
				{
					skillName: "Kubernetes",
					fontAwesomeClassname: "simple-icons:kubernetes",
					style: {
						color: "#326CE5"
					}
				}
			]
		},
		
		// {
		// 	title: "UI/UX Design",
		// 	fileName: "DesignImg",
		// 	skills: [
		// 		"⚡ Designing highly attractive user interface for mobile and web applications",
		// 		"⚡ Customizing logo designs and building logos from scratch",
		// 		"⚡ Creating the flow of application functionalities to optimize user experience"
		// 	],
		// 	softwareSkills: [{
		// 			skillName: "Adobe XD",
		// 			fontAwesomeClassname: "simple-icons:adobexd",
		// 			style: {
		// 				color: "#FF2BC2"
		// 			}
		// 		},
		// 		{
		// 			skillName: "Figma",
		// 			fontAwesomeClassname: "simple-icons:figma",
		// 			style: {
		// 				color: "#F24E1E"
		// 			}
		// 		},
		// 		{
		// 			skillName: "Adobe Illustrator",
		// 			fontAwesomeClassname: "simple-icons:adobeillustrator",
		// 			style: {
		// 				color: "#FF7C00"
		// 			}
		// 		},
		// 		{
		// 			skillName: "Inkscape",
		// 			fontAwesomeClassname: "simple-icons:inkscape",
		// 			style: {
		// 				color: "#000000"
		// 			}
		// 		}
		// 	]
		// }
	]
};


// Education Page
const competitiveSites = {
	competitiveSites: [{
			siteName: "HackerRank",
			iconifyClassname: "simple-icons:hackerrank",
			style: {
				color: "#2EC866"
			},
			profileLink: "https://www.hackerrank.com/arnabaghorai"
		},
		{
			siteName: "Codechef",
			iconifyClassname: "simple-icons:codechef",
			style: {
				color: "#5B4638"
			},
			profileLink: "https://www.codechef.com/users/urbang"
		},
		{
			siteName: "Kaggle",
			iconifyClassname: "simple-icons:kaggle",
			style: {
				color: "#20BEFF"
			},
			profileLink: "https://www.kaggle.com/arnabghorai"
		},
		{
			siteName: "CodeForces",
			iconifyClassname: "simple-icons:codeforces",
			style: {
				color: "#1F8ACB"
			},
			profileLink: "https://codeforces.com/profile/arnabaghorai"
		},
		{
			siteName: "Hackerearth",
			iconifyClassname: "simple-icons:hackerearth",
			style: {
				color: "#323754"
			},
			profileLink: "https://www.hackerearth.com/@arnabaghorai"
		},
		
	]
}

const degrees = {
	degrees: [{
		title: "Sardar Patel Institute of Technology, Mumbai",
		subtitle: "B.Tech. in Computer Engineering",
		logo_path: "spit_logo.png",
		alt_name: "S.P.I.T",
		duration: "2017 - Present",
		descriptions: [
			"⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
			"⚡ Apart from this, I have done courses on Deep Learning, Data Science,  and Web Development.",
		],
		website_link: "http://spit.ac.in"
	}]
}

const certifications = {
	certifications: [{
			title: "Digital Solution for Enforcing Social Distancing",
			subtitle: "- ICDAM 2020 | Elsevier | SSRN",
			logo_path: "else.png",
			certificate_link: "https://ssrn.com/abstract=3614898",
			alt_name: "Digital Solution for Enforcing Social Distancing",
			color_code: "#00000000"
		},
		{
			title: "AI Enabled Method to Predict Acne vs Non-Acne",
			subtitle: "- National Conference on AI in Health Informatics and Virtual Reality,TISS,2019",
			logo_path: "skinzy-blue.png",
			certificate_link: "#",
			alt_name: "AI Enabled Method to Predict Acne vs Non-Acne",
			color_code: "#00000099"
		}
	]
};
// const certifications = {
// 	certifications: [{
// 			title: "Digital Solution for Enforcing Social Distancing",
// 			subtitle: "- ICDAM 2020 | Elesv | SSRN",
// 			logo_path: "stanford_logo.png",
// 			certificate_link: "https://ssrn.com/abstract=3614898",
// 			alt_name: "Stanford University",
// 			color_code: "#8C151599"
// 		},
// 		{
// 			title: "Deep Learning",
// 			subtitle: "- Andrew Ng",
// 			logo_path: "deeplearning_ai_logo.png",
// 			certificate_link: "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
// 			alt_name: "deeplearning.ai",
// 			color_code: "#00000099"
// 		},
// 		{
// 			title: "ML on GCP",
// 			subtitle: "- GCP Training",
// 			logo_path: "google_logo.png",
// 			certificate_link: "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
// 			alt_name: "Google",
// 			color_code: "#0C9D5899"
// 		},
// 		{
// 			title: "Data Science",
// 			subtitle: "- Alex Aklson",
// 			logo_path: "ibm_logo.png",
// 			certificate_link: "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
// 			alt_name: "IBM",
// 			color_code: "#1F70C199"
// 		},
// 		{
// 			title: "Big Data",
// 			subtitle: "- Kim Akers",
// 			logo_path: "microsoft_logo.png",
// 			certificate_link: "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
// 			alt_name: "Microsoft",
// 			color_code: "#D83B0199"
// 		},
// 		{
// 			title: "Advanced Data Science",
// 			subtitle: "- Romeo Kienzler",
// 			logo_path: "ibm_logo.png",
// 			certificate_link: "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
// 			alt_name: "IBM",
// 			color_code: "#1F70C199"
// 		},
// 		{
// 			title: "Advanced ML on GCP",
// 			subtitle: "- GCP Training",
// 			logo_path: "google_logo.png",
// 			certificate_link: "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
// 			alt_name: "Google",
// 			color_code: "#0C9D5899"
// 		},
// 		{
// 			title: "DL on Tensorflow",
// 			subtitle: "- Laurence Moroney",
// 			logo_path: "deeplearning_ai_logo.png",
// 			certificate_link: "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
// 			alt_name: "deeplearning.ai",
// 			color_code: "#00000099"
// 		},
// 		{
// 			title: "Fullstack Development",
// 			subtitle: "- Jogesh Muppala",
// 			logo_path: "coursera_logo.png",
// 			certificate_link: "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
// 			alt_name: "Coursera",
// 			color_code: "#2A73CC"
// 		},
// 		{
// 			title: "Kuberenetes on GCP",
// 			subtitle: "- Qwiklabs",
// 			logo_path: "gcp_logo.png",
// 			certificate_link: "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
// 			alt_name: "GCP",
// 			color_code: "#4285F499"
// 		},
// 		{
// 			title: "Cryptography",
// 			subtitle: "- Saurabh Mukhopadhyay",
// 			logo_path: "nptel_logo.png",
// 			certificate_link: "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
// 			alt_name: "NPTEL",
// 			color_code: "#FFBB0099"
// 		},
// 		{
// 			title: "Cloud Architecture",
// 			subtitle: "- Qwiklabs",
// 			logo_path: "gcp_logo.png",
// 			certificate_link: "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
// 			alt_name: "GCP",
// 			color_code: "#4285F499"
// 		}
// 	]
// };


// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Internship and Volunteership",
	description: "I have experience of working with many evolving startups as a ML and DL developer, Mentor, Data Analyst.",
	header_image_path: "experience.svg",
	sections: [
		// {
	// 		title: "Work",
	// 		experiences: [{
	// 				title: "Associate AI Engineer",
	// 				company: "Legato Health Technology",
	// 				company_url: "https://legatohealthtech.com/",
	// 				logo_path: "legato_logo.png",
	// 				duration: "June 2020 - PRESENT",
	// 				location: "Hyderabad, Telangana",
	// 				description: "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
	// 				color: "#0879bf",
	// 			},
	// 			{
	// 				title: "Android and ML Developer",
	// 				company: "Muffito Incorporation",
	// 				company_url: "https://www.linkedin.com/company/muffito-inc/about/",
	// 				logo_path: "muffito_logo.png",
	// 				duration: "May 2018 - Oct 2018",
	// 				location: "Pune, Maharashtra",
	// 				description: "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
	// 				color: "#9b1578",
	// 			},
	// 			{
	// 				title: "Android Developer",
	// 				company: "FreeCopy Pvt. Ltd.",
	// 				company_url: "https://www.linkedin.com/company/freecopy/about/",
	// 				logo_path: "freecopy_logo.png",
	// 				duration: "Nov 2017 - Dec 2017",
	// 				location: "Ahmedabad, Gujarat",
	// 				description: "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
	// 				color: "#fc1f20",
	// 			},
	// 		],
	// 	},
		{
			title: "Internships",
			experiences: [{
					title: "Chief of Machine Learning & Research",
					company: "Skinzy Pvt. Ltd.",
					company_url: "https://www.delhivery.com/",
					logo_path: "skinzy-blue.png",
					duration: "May 2019 - Sept 2019",
					location: "Mumbai, Maharashtra",
					description: "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
					color: "#0071C5",
				},
				{
					title: "Data Analyst",
					company: "O.I.T",
					company_url: "#",
					logo_path: "sptbi.png",
					duration: "Nov 2018 - Dec 2018",
					location: "Mumbai, Maharashtra",
					description: "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
					color: "#0071C5",
				},
				{
					title: "Machine Learning Intern",
					company: "Skinzy Pvt. Ltd.",
					company_url: "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
					logo_path: "skinzy-blue.png",
					duration: "Nov 2018 - Dec 2018",
					location: "Work From Home",
					description: "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
					color: "#0071C5",
				},
			],
		},
		{
			title: "Volunteerships",
			experiences: [{
					title: "Mentor Virtual Labs",
					company: "S.P.I.T",
					company_url: "https://spit.ac.in/",
					logo_path: "spit_logo.png",
					duration: "June 2019 - April 2020",
					location: "Mumbai, Maharashtra",
					description: "Developed an interactive platform where students can learn about latest technologies like deep-learning through simulations.",
					color: "#4285F4",
				},
				
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description: "My projects make use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications.",
	avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "arnab_pic.png",
		description: "Connect with me...",
	},
	blogSection: {
		title: "Blogs",
		subtitle: "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
		link: "#",
		avatar_image_path: "blogs_image.svg",
	},
	addressSection: {
		title: "Address",
		subtitle: "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
		avatar_image_path: "address_image.svg",
		location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
	},
	phoneSection: {
		title: "Phone Number",
		subtitle: "+91 8320758513",
	},
};

export {
	settings,
	greeting,
	socialMediaLinks,
	skills,
	hackathons,
	competitiveSites,
	degrees,
	certifications,
	experience,
	projectsHeader,
	contactPageData,
};