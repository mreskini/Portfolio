export default function TitleView(title){
    return(
        <div className="display-4 text-light mb-4">
            <div className="hr-line mb-3"></div>
            <span className="align-middle mr-3">•</span>
            <span className="index-title align-middle">
                {title}
            </span>
        </div>
    )
}