export default function TimelineView(title, description) {
    return(
        <div className="col-lg-3 p-3">
            <div className="text-light h2 row m-0">
                {title} <div className="hr-line my-auto ml-4"></div>
            </div>
            <div className="text-light h6 font-weight-light mt-3">
                {description}
            </div>
        </div>
    )
}