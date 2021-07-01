import { useState } from "react"
import image1 from "../assets/images/sample-1.png"
import image2 from "../assets/images/sample-2.png"
import image3 from "../assets/images/sample-3.jpg"
import image4 from "../assets/images/sample-4.jpg"
import PortfolioCardView from "../views/portfolio-card-view"
import TitleView from "../views/title-view"
export default function Projects(){
    const samples = [
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
    return(
        <div className="container-fluid p-0 position-relative">
            <div className="row m-0">
                <div className="col-lg-10 mx-auto my-5 py-3">
                    {TitleView("Projects")}
                    <div className="row">
                        {
                            samples.map(sample => PortfolioCardView(sample.title, sample.description, sample.image))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}