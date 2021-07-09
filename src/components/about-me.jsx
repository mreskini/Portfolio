import TimelineView from "../views/time-line-view"
import TitleView from "../views/title-view"
export default function AboutMe(){
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