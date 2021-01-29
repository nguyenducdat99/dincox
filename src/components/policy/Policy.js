// import scss library
import './Policy.scss';

function Policy() {
    return(
        <div className="policy">
            <div className="wrapper">
                <div className="policy-grid">
                    <div className="policy-grid__transport">
                        <a href=""><i className="fa fa-truck" aria-hidden="true"></i> Miễn phí vận chuyển</a>
                    </div>
                    <div className="policy-grid__checkout">
                        <a href=""><i className="fa fa-credit-card-alt" aria-hidden="true"></i> Thanh toán đảm bảo</a>
                    </div>
                    <div className="policy-grid__warranty">
                        <a href=""><i className="fa fa-refresh" aria-hidden="true"></i> Bảo hành 6 tháng</a>
                    </div>
                    <div className="policy-grid__support">
                        <a href=""><i className="fa fa-life-ring" aria-hidden="true"></i> Hỗ trợ 24/7</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default Policy;