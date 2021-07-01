import { useState } from "react"
import AccomplishmentCardView from "../views/accomplishment-card-view"
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
    
    return(
        <div className="container-fluid p-0 position-relative">
            <div className="row m-0">
                <div className="col-lg-10 mx-auto my-5 py-3">
                    {
                        TitleView("Accomplishments")
                    }
                    <div className="mt-5 row m-0">
                    {
                        cards.map(card => AccomplishmentCardView(card.title, card.description))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}