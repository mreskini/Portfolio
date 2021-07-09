import PortfolioCardView from "../views/portfolio-card-view"
import TitleView from "../views/title-view"
import { projects } from "../data/data"
export default function Projects(){
    return(
        <div className="container-fluid p-0 position-relative" id="projects">
            <div className="row m-0">
                <div className="col-lg-10 mx-auto my-5 py-3">
                    {TitleView("Projects")}
                    <div className="row">
                        {
                            projects.map(sample => PortfolioCardView(sample.title, sample.description, sample.image))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}