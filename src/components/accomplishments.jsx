import AccomplishmentCardView from "../views/accomplishment-card-view"
import TitleView from "../views/title-view"
import { accomplishments } from "../data/data"
export default function Accomplishments(){
    return(
        <div className="container-fluid p-0 position-relative">
            <div className="row m-0">
                <div className="col-lg-10 mx-auto my-lg-5 py-3">
                    {
                        TitleView("Accomplishments")
                    }
                    <div className="mt-5 row m-0">
                    {
                        accomplishments.map(card => AccomplishmentCardView(card.title, card.description))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}