export default function TechnologyCardView (icon, title, description) {
    return(
        <>
            <div className="col-lg-3 p-3 mb-4 mb-lg-0 bg-secondary-color shadow-light rounded">
                {
                    icon
                }
                <div className="text-light h2">
                    {
                        title
                    }
                </div>
                <div className="text-light h4 font-weight-light">
                    Experience with
                    <br />
                    {
                        description
                    }
                </div>
            </div>
            <div className="col-lg-1"></div>
        </>
    )
}