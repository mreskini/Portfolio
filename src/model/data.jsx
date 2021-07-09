import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import image1 from "../assets/images/sample-1.png"
import image2 from "../assets/images/sample-2.png"
import image3 from "../assets/images/sample-3.jpg"
import image4 from "../assets/images/sample-4.jpg"

const technologies = [
    {
        icon: <DiReact size="3rem" className="text-light mb-3" />,
        title: "Front-End",
        description: "React.js",
    },
    {
        icon: <DiFirebase size="3rem" className="text-light mb-3" />,
        title: "Back-End",
        description: "Node and Databases",
    },
    {
        icon: <DiZend  size="3rem" className="text-light mb-3" />,
        title: "UI/UX",
        description: "Tools like Figma",
    },
]
const projects = [
    {
        title: "MERN Memories",
        description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
        image: image1,
    },
    {
        title: "E-Commerce",
        description: "While building it you'reStripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
        image: image2,
    },
    {
        title: "WebRTC App",
        description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
        image: image3,
    },
    {
        title: "Unichat",
        description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
        image: image4,
    },
]
const cards = [
    {
        title: "2018",
        description: "Started my journey",
    },
    {
        title: "2019",
        description: "Worked as a freelance developer",
    },
    {
        title: "2020",
        description: "Founded JavaScript Mastery",
    },
    {
        title: "2021",
        description: "Shared my projects with the world",
    },
]
const accomplishments = [
    {
        title: "20+",
        description: "Open Source Projects",
    },
    {
        title: "1000+",
        description: "Students",
    },
    {
        title: "1900+",
        description: "Github Followers",
    },
]
export {
    technologies,
    projects,
    cards,
    accomplishments,
}