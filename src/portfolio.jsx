import emoji from "react-easy-emoji";
import evrazlogo from "./assets/img/icons/common/evrazLogo.svg";
import sgilogo from "./assets/img/icons/common/sgiLogo.svg";
export const greetings = {
  name: "Favor Fasunwon",
  title: "Hello, My name is Favor",
  description:
    "I am a 3rd year Software Systems Engineering student at the University of Regina, Canada. I have a passion for web development, and will continue advancing in this fascinating field 😊. I love to learn and challenge myself; even if it means failing at times to succeed. I will work hard and continue to evolve my skills as a Web developer.",
  resumeLink:
    "https://onedrive.live.com/embed?cid=C4919A0D4CD538C6&resid=C4919A0D4CD538C6%21573746&authkey=AFhA9TpGXzNqcOg&em=2",
};
export const socialLinks = {
  linkedIn: "https://www.linkedin.com/in/favor-fasunwon-2538a0195/",
  github: "https://github.com/fasunwon",
  codepen: "https://codepen.io/Fasunwon",
};

export const github = {
  username: "fasunwon",
};

export const skillsSection = {
  title: "My interests",
  subtitle:
    "Aspiring Front-End Engineer with the drive to learn more front-end frameworks",
  skills: [
    emoji("✨ Prefer to work as a Front-end Developer"),
    emoji("✨ Develop interactive UI/UX design for web applications"),
    emoji(
      "✨ Constantly striving to learn and grow within the field of Web Dev "
    ),
    emoji("✨ Integrating third party services such as Firebase and Netlify"),
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "vscode-icons:file-type-js",
    },
    {
      skillName: "React",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "SCSS",
      fontAwesomeClassname: "vscode-icons:file-type-sass",
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "vscode-icons:file-type-firebase",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "vscode-icons:file-type-git",
    },
    {
      skillName: "C-plus-plus",
      fontAwesomeClassname: "logos:c-plusplus",
    },
    {
      skillName: "C-sharp",
      fontAwesomeClassname: "logos:c-sharp",
    },
    {
      skillName: "Netlify",
      fontAwesomeClassname: "vscode-icons:file-type-netlify",
    },
  ],
};

export const educationInfo = [
  {
    rep: "la:university",
    schoolName: "University of Regina",
    subHeader: "Bachelor of Software Systems Engineering",
    duration: "September 2018 - June 2023 (expected)",
    description: "Engineering Society: RESS",
    descBullets: [
      "Object-Oriented design",
      "Web Development",
      "Data Structures",
      "Software Engineering Management",
    ],
  },
  {
    rep: "simple-icons:freecodecamp",
    schoolName: "FreeCodeCamp",
    subHeader: "Front-End Development Libraries",
    duration: "May 2021 - October 2021",
    description: "Certification",
    descBullets: ["React Js", "Bootstrap", "jQuery", "SASS"],
  },
];

export const experienceInfo = [
  {
    role: "Software Developer",
    company: "EVRAZ NA",
    companyLogo: evrazlogo,
    date: "September 2021 - December 2021",
    desc: "Co-op IT Student",
    descBullets: [
      "Assisted with improving previous application builds",
      "Developed WPF applications using ASP.NET MVC/MVVM C# and SQL",
      "Developed SSRS reports using .NET framework and SQL query commands",
    ],
  },
  {
    role: "Systems Trainee",
    company: "Saskatchewan Government Insurance",
    companyLogo: sgilogo,
    date: "January 2021 - August 2021",
    desc: "Help Desk Agent",
    descBullets: [
      "Provided support for clients on hardware, software, and printers in desktop applications",
      "Tracked hardware, software and their licensed use at SGI using Service Now",
      "Assisted in the acquisition and implementation of new desktop technologies",
    ],
  },
];

export const projectInfo = [
  {
    name: "Amazon Clone",
    desc: "Clone of Amazon Website using React.js as the Front-end, Node.js/Express as the backend for API endpoint, and Stripe API for payment transactions",
    github: "https://github.com/fasunwon/AmazonClone",
    link: "https://clone-879e8.web.app",
  },
  {
    name: "Covid Tracking Website",
    desc: "This is a Covid-19 Tracking react website that fetches updated information from the API set in disease.sh",
    github: "https://github.com/fasunwon/Covid-19-Tracking",
    link: "https://coronna-tracker.netlify.app",
  },
  {
    name: "Google Clone",
    desc: "This is a Google Search Clone that was created with Modern UI using Tailwind CSS, and React.js. This Clone fetches data from Google Search API using RapidAPI.",
    github: "https://github.com/fasunwon/GoogleClone",
    link: "https://goooogle-search-clone.netlify.app",
  },
  {
    name: "Video Call App",
    desc: "This is a Video Calling App that was created to imitate a Zoom Call. Tools used includes: nodejs/express, React, Material UI, and Socket.io",
    github: "https://github.com/fasunwon/VideoApp",
    link: "https://sample-video-call-app.netlify.app",
  },
];

export const feedback = [
  {
    name: "Emmanuel Idun",
    feedback:
      "I partnered with Favor a lot in our web development class. We shared ideas, did pair programming and learned from each other. It is great to work with Favor, both as a person and as a software engineer. He possesses good collaborative skills. He is also goal-oriented, and ready to learn. A great addition.",
    link: "https://ca.linkedin.com/in/emmanuel-idun-40880b17b?trk=people-guest_people_search-card",
  },
  {
    name: "Ayden Mack",
    feedback:
      "Favor is driven and hard-working; he is always focused on furthering his knowledge and skillset, not only to benefit himself, but also current/future employers.",
    link: "https://ca.linkedin.com/in/ayden-mack?trk=people-guest_people_search-card",
  },
];
