export default function AccomplishmentCardView(title, description){
    return(
        <>
            <div className="col-lg-3 p-4 bg-secondary-color mb-4 mb-lg-0 text-center shadow-light rounded">
                <div className="text-light h2">
                    {title}
                </div>
                <div className="text-light h4 font-weight-light mt-4">
                    {description}
                </div>
            </div>
            <div className="col-lg-1"></div>
        </>
    )
}