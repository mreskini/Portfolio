import { useState } from "react"

export default function AboutMe(){
    const [cards, setCards] = useState([
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
    ])
    const createAboutMeCardTemplate = (title, description) => {
        return(
            <div className="col-lg-3 p-3">
                <div className="text-light h2 row m-0">
                    {title} <div className="hr-line my-auto ml-4"></div>
                </div>
                <div className="text-light h6 font-weight-light mt-3">
                    {description}
                </div>
            </div>
        )
    }
    return(
        <div className="container-fluid position-relative">
            <div className="row m-0">
                <div className="col-lg-10 mx-auto my-5 py-3">
                    <div className="display-4 text-light mb-4">
                        <div className="hr-line mb-3"></div>
                        •
                        About Me
                    </div>
                    <div className="h3 font-weight-light text-secondary col-lg-10">
                        The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
                    </div>
                    <div className="mt-5 row m-0">
                        {
                            cards.map(card => createAboutMeCardTemplate(card.title, card.description))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}