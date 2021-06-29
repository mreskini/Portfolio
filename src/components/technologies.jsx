import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
export default function Technologies(){
    return(
        <div className="container-fluid position-relative">
            <div className="row m-0">
                <div className="col-lg-10 mx-auto my-5 py-3">
                    <div className="display-4 text-light mb-4">
                        <div className="hr-line mb-3"></div>
                        •
                        Technologies
                    </div>
                    <div className="h3 font-weight-light text-secondary col-lg-10">
                        I've worked with a range a technologies in the web development world. From Back-end To Design
                    </div>
                    <div className="mt-5 row m-0">
                        <div className="col-lg-3 p-3 bg-secondary-color shadow-light rounded">
                            <DiReact size="3rem" className="text-light mb-3" />
                            <div className="text-light h2">
                                Front-End
                            </div>
                            <div className="text-light h4 font-weight-light">
                                Experience with
                                <br />
                                React.js
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-3 p-3 bg-secondary-color shadow-light rounded">
                            <DiFirebase size="3rem" className="text-light mb-3" />
                            <div className="text-light h2">
                                Back-End
                            </div>
                            <div className="text-light h4 font-weight-light">
                                Experience with
                                <br />
                                Node and Databases
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-3 p-3 bg-secondary-color shadow-light rounded">
                            <DiZend  size="3rem" className="text-light mb-3" />
                            <div className="text-light h2">
                                UI/UX
                            </div>
                            <div className="text-light h4 font-weight-light">
                                Experience with
                                <br />
                                Tools like Figma
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}