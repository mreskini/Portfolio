import { useState } from "react"
import TitleView from "../views/title-view"

export default function Accomplishments(){
    const [cards, setCards] = useState([
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
    ])
    const createAccomplishmentsCardTemplate = (title, description) =>{
        return(
            <>
                <div className="col-lg-3 p-4 bg-secondary-color text-center shadow-light rounded">
                    <div className="text-light h2">
                        {title}
                    </div>
                    <div className="text-light h4 font-weight-light mt-4">
                        {description}
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </>
        )
    }
    return(
        <div className="container-fluid position-relative">
            <div className="row m-0">
                <div className="col-lg-10 mx-auto my-5 py-3">
                    {
                        TitleView("Accomplishments")
                    }
                    <div className="mt-5 row m-0">
                    {
                        cards.map(card => createAccomplishmentsCardTemplate(card.title, card.description))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}