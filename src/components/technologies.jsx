import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import TechnologyCardView from '../views/technology-card-view'
import TitleView from '../views/title-view'
export default function Technologies(){
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