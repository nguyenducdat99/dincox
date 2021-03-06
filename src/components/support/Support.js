import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Support.scss'
function Support(props) {
    // declare state
    const [isActiveHeader,setIsActiveHeader] = useState(false);

    // get props
    const { liveAccountRec } = props;

    // get position of account
    var position = liveAccountRec?liveAccountRec.position:-1;

    // update state when user scroll page
    useEffect(
        () => {
            setIsActiveHeader(props.isActiveScroll);
        },[props.isActiveScroll]
    )
   

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
        window.open("tel: +0961988840");
    }

    return(
        <div className="support">
            <div className="support__social-network">
                
                {
                    position<1?'':
                    <Link to='/managers' className="support__social-network__facebook support__setting">
                        <i className="fa fa-cogs" aria-hidden="true"></i>         
                        <p> Quản lý</p>      
                    </Link>
                }
                <a href="https://facebook.com/" target="_blank" rel='noreferrer' className="support__social-network__facebook">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>         
                    <p> Facebook</p>      
                </a>
                <a href="https://instagram.com/" target="_blank"  rel='noreferrer' className="support__social-network__instagram">
                    <i className="fa fa-instagram" aria-hidden="true"></i> 
                    <p>Instagram</p>
                </a>
                <a href="https://youtube.com/" target="_blank"  rel='noreferrer' className="support__social-network__youtube">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    <p> Youtube</p>
                </a>
                <div className={isActiveHeader?"support__social-network__top":"support__social-network__top--disable"} onClick={onFocusTop}>
                    <i className="fa fa-angle-up" aria-hidden="true"></i> 
                    <p>Top</p>
                </div>
            </div>
            <div className={isActiveHeader?"support__mobile-phone--none":"support__mobile-phone"} onClick={onCall}>
                <div className="support__mobile-phone__animation">
                    <div className="support__mobile-phone__animation__background">
                    </div>
                    <div className="support__mobile-phone__animation__icon">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                </div>
                <p>0961.988.840</p>
            </div>
        </div>
        
    );
}
export default Support;