export default function PortfolioCardView(title, description, image) {
    return(
        <div className="col-lg-6 px-5 py-4">
            <div className="shadow-light bg-secondary-color">
                <img src={image} alt="Sample" style={{maxHeight: "300px"}} className="img-fluid rounded h-100" />
                <div className="text-light h2 font-weight-light p-3">
                    {title}
                </div>
                <div className="p-3 text-secondary">
                    {description}
                </div>
                <div className="list-inline mx-auto pb-4 py-2 text-light text-center font-weight-light h4">
                    <div className="list-inline-item col-3 m-0 p-0">
                        Node
                    </div>
                    <div className="list-inline-item col-3 m-0 p-0">
                        CSS
                    </div>
                    <div className="list-inline-item col-3 m-0 p-0">
                        React
                    </div>
                    <div className="list-inline-item col-3 m-0 p-0">
                        Php
                    </div>
                </div>
            </div>
        </div>
    )
}