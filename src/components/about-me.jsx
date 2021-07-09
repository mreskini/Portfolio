import TimelineView from "../views/time-line-view"
import TitleView from "../views/title-view"
import { cards } from "../model/data"
export default function AboutMe(){
    return(
        <div className="container-fluid p-0 position-relative" id="about">
            <div className="row m-0">
                <div className="col-lg-10 mx-auto my-lg-5 py-3">
                    {
                        TitleView("About Me")
                    }
                    <div className="h4 font-weight-light text-secondary col-lg-10">
                        The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
                    </div>
                    <div className="mt-5 row m-0">
                        {
                            cards.map(card => TimelineView(card.title, card.description))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}