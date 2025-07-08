// Icons
import js from "../assets/icons/skills-icon/javascript.svg";
import firebase from "../assets/icons/skills-icon/firebase.png";
import html from "../assets/icons/skills-icon/html.svg";
import express from "../assets/icons/skills-icon/express.png";
import css from "../assets/icons/skills-icon/css.svg";
import figma from "../assets/icons/skills-icon/figma.svg";
// import md from "../assets/icons/skills-icon/mongodb.svg";
import nextjs from "../assets/icons/skills-icon/nextjs.svg";
import nodejs from "../assets/icons/skills-icon/nodejs.svg"; 
import mongodb from "../assets/icons/skills-icon/mongodb.png";
import react from "../assets/icons/skills-icon/react-js.svg";
import tailwind from "../assets/icons/skills-icon/tailwindcss.svg";
// import php from "../assets/icons/skills-icon/php.svg";
// import ml from "../assets/icons/skills-icon/ml.png"

// projectImagess
import respireX from "../assets/images/projectImages/spotify.jpg"
import zenhack from "../assets/images/projectImages/project2.png"
import notesApp from "../assets/images/projectImages/notesapp.png"
import nQueen from "../assets/images/projectImages/nqueen.png"
import studyNotion from "../assets/images/projectImages/studynotionImg.jpg"
import snapIt from "../assets/images/projectImages/snpaIt.png"


export const Projects = {
    "SpotifyClone": {
      image: respireX,
      title: "Spotify Clone",
      subTitle: "Music Streaming Web App",
      insights: {
        desc: `A full-stack music app with playlist, login and streaming functionality.`,
        category: "Entertainment",
        techStack: [react, tailwind, nodejs, express, mongodb],
        reportLink: ""
      },
      githubLink: "https://github.com/sahilpate-221s/Spotify-Clone.git"
    },
    "Zenhack": {
      image: zenhack,
      title: "Zenhack",
      subTitle: "Hackathon Manager",
      insights: {
        desc: `Manage hackathons, registration, and judging via one platform.`,
        category: "Event Management",
        techStack: [nextjs, tailwind, firebase],
        reportLink: ""
      },
      githubLink: "https://github.com/sahilpate-221s/Zenhack.git"
    },
    "NotesApp": {
      image: notesApp,
      title: "NotesApp",
      subTitle: "Note-Taking App",
      insights: {
        desc: `Create, edit, and organize notes with markdown support.`,
        category: "Productivity",
        techStack: [react, tailwind, firebase],
        reportLink: ""
      },
      githubLink: "https://github.com/sahilpate-221s/NotesApp.git"
    },
    "NQueenVisualizer": {
      image: nQueen,
      title: "N Queen Visualizer",
      subTitle: "Backtracking Visual Tool",
      insights: {
        desc: `Visual tool demonstrating the N-Queen problem step-by-step.`,
        category: "Algorithms, Visualization",
        techStack: [html, css, js],
        reportLink: ""
      },
      githubLink: "https://github.com/sahilpate-221s/N-Queen-Visualizer.git"
    },
    "StudyNotion": {
      image: studyNotion,
      title: "StudyNotion",
      subTitle: "Learning Platform",
      insights: {
        desc: `E-learning platform for courses, enrollment, and dashboards.`,
        category: "Education",
        techStack: [react, tailwind, nodejs, express, mongodb],
        reportLink: ""
      },
      githubLink: "https://github.com/sahilpate-221s/StudyNotion.git"
    },
    "SnapIt": {
      image: snapIt,
      title: "Snap It",
      subTitle: "Image Sharing App",
      insights: {
        desc: `Social app for sharing pictures, comments, and profile feeds.`,
        category: "Social Media",
        techStack: [react, tailwind, firebase],
        reportLink: ""
      },
      githubLink: "https://github.com/sahilpate-221s/Snap-It.git"
    }
  };
  
