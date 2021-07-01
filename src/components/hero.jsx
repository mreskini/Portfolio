import BackgroundAnimation from "../views/background-animation"
export default function Hero(){
    return(
        <div className="container-fluid p-0 position-relative">
            <div className="row m-0">
                <div className="col-lg-10 mx-auto my-lg-5 py-3">
                    <div className="col-lg-8">
                        <div className="display-4 hero-title text-white font-weight-bold">
                            Welcome To
                            <br />
                            My Personal Portfolio
                        </div>
                        <div className="h3 font-weight-light mt-5 text-secondary">
                            The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
                        </div>
                        <div className="btn call-to-action px-5 mt-5 py-3">
                            Learn More
                        </div>
                    </div>
                    <BackgroundAnimation />
                </div>
            </div>
        </div>
    )
}