import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
export default function ContactMe(){
    return(
        <div className="container-fluid position-relative">
            <div className="row m-0">
                <div className="col-lg-10 mx-auto pb-5 pt-3">
                    <div className="hr-light"></div>
                    <div className="row text-light">
                        <div className="col-lg-4">
                            <div className="h3 mb-3">
                                Call
                            </div>
                            <div className="text-secondary h5">
                                111-111-1111
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="h3 mb-3">
                                Email
                            </div>
                            <div className="text-secondary h5">
                                mreskini30@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="row text-secondary mt-5">
                        <div className="col-lg-8">
                            <div className="h3 font-weight-light">
                                Innovating one project at a time
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="h3 justify-content-end row text-light">
                                <div className="pointer icon-hoverable my-auto px-2 pt-1 pb-2">
                                    <AiFillGithub size="2rem" />
                                </div>
                                <div className="pointer icon-hoverable my-auto px-2 pt-1 pb-2">
                                    <AiFillLinkedin size="2rem" />
                                </div>
                                <div className="pointer icon-hoverable my-auto px-2 pt-1 pb-2">
                                    <AiFillInstagram size="2rem"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}