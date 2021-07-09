import TechnologyCardView from '../views/technology-card-view'
import TitleView from '../views/title-view'
import {technologies} from '../model/data'
export default function Technologies(){
    return(
        <div className="container-fluid p-0 position-relative" id="technologies">
            <div className="row m-0">
                <div className="col-lg-10 mx-auto my-lg-5 py-3">
                    {
                        TitleView("Technologies")
                    }
                    <div className="h4 font-weight-light text-secondary col-lg-10 col-12">
                        I've worked with a range a technologies in the web development world. From Back-end To Design
                    </div>
                    <div className="mt-5 row m-0">
                        {
                            technologies.map( technology => TechnologyCardView(technology.icon, technology.title, technology.description))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}