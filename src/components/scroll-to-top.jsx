import { BsChevronUp } from "react-icons/bs"
export default function ScrollToTop(){
    window.onscroll = () => {
        let btn = document.getElementById("btn-scroll-to-top")
        window.pageYOffset > 200 ? (btn.classList.remove("d-none")) : (btn.classList.add("d-none"))
    };
    const scrollToView = () => {
        document.querySelector("#header").scrollIntoView({
            behavior: "smooth",
        })
    }
    return (
        <div className="btn btn-primary py-2 btn-to-top d-none index-999" id="btn-scroll-to-top" onClick={ scrollToView }>
            <BsChevronUp className="h5 my-auto bold align-top" />
        </div>
    )
}