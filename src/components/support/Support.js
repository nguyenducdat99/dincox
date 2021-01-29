import './Support.scss'
function Support() {
    // excute when click top
    var onFocusTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    // excute when click phone number
    var onCall = () => {
        window.open("tel: +0987654321");
    }

    return(
        <div className="support">
            <div className="support__social-network">
                <a href="https://facebook.com/" target="_blank" className="support__social-network__facebook">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>         
                    <p> Facebook</p>      
                </a>
                <a href="https://instagram.com/" target="_blank" className="support__social-network__instagram">
                    <i className="fa fa-instagram" aria-hidden="true"></i> 
                    <p>Instagram</p>
                </a>
                <a href="https://youtube.com/" target="_blank" className="support__social-network__youtube">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    <p> Youtube</p>
                </a>
                <div className="support__social-network__top" onClick={onFocusTop}>
                    <i className="fa fa-angle-up" aria-hidden="true"></i> 
                    <p>Top</p>
                </div>
            </div>
            <div className="support__mobile-phone" onClick={onCall}>
                <div className="support__mobile-phone__animation">
                    <div className="support__mobile-phone__animation__icon">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                </div>
                <p>0987654321</p>
            </div>
        </div>
        
    );
}
export default Support;