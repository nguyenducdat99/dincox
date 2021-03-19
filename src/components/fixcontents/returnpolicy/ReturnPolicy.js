// import style library
import './ReturnPolicy.scss'
import SmallBanner from '../smallbanner/SmallBanner'
// code function here
function ReturnPolicy(){
    return(
        <>
            <SmallBanner title="Chính sách hoàn trả"/>
            <div className="return-policy">
            <div className="wrapper">
                <h1>Chính sách đổi trả</h1>
                <div className="return-policy__contents">
                    <p>
                        <strong>1. Điều kiện đổi trả</strong>
                    </p>

                    <table>
                        <tbody>
                        <tr>
                            <td>Lý do đổi trả</td>
                            <td>Thời gian đổi trả</td>
                            <td>Chính sách</td>
                            <td>Phí giao hàng</td>
                        </tr>
                        <tr>
                            <td>Lỗi do nhà sản xuất</td>
                            <td>Trong vòng 2 tháng kể từ ngày mua giày</td>
                            <td>Đổi trả không hoàn phí</td>
                            <td>Miễn phí</td>
                        </tr>
                        <tr>
                            <td>Chọn không đúng size giày</td>
                            <td>Trong vòng 1 tháng kể từ ngày mua giày</td>
                            <td>Đổi trả không hoàn phí</td>
                            <td>Người mua chi trả</td>
                        </tr>
                        </tbody>
                    </table>


                    <ul>
                        <li>Với sản phẩm mua tại cửa hàng, thời hạn đổi sản phẩm là <strong>07 ngày</strong>, tính từ ngày bạn mua hàng. Còn với sản phẩm mua online, thời hạn đổi sản phẩm là <strong>14 ngày</strong>, tính từ ngày nhận được hàng.</li>
                        <li>Sản phẩm đổi phải còn mới và chưa qua sử dụng.</li>
                        <li>Chỉ áp dụng đổi hàng <strong>01 lần</strong> duy nhất cho sản phẩm.</li>
                        <li>Dincox <strong>chỉ ưu tiên hỗ trợ đổi size</strong>. Trong trường hợp sản phẩm hết size cần đổi tại kho xử lí, bạn vui lòng đổi sang 01 sản phẩm khác:
                            <ul>
                                <li>Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).</li>
                                <li>Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.</li>
                            </ul>
                        </li>
                        <li><strong>Dincox</strong> không hoàn trả tiền mặt trong bất cứ trong trường hợp nào. Mong bạn thông cảm. ( trừ khi hàng bị lỗi từ phía dincox )</li>
                        <li>Quy định đổi hàng không áp dụng cho các sản phẩm phụ kiện, các sản phẩm Sale Off từ 50% trở lên ,các sản phẩm có dấu hiệu đã qua sử dụng, đã giặt tẩy, bám bẩn, biến dạng.</li>
                    </ul>
                    <p>
                        <strong>2. Hướng dẫn đổi hàng</strong>
                    </p>

                    <ul>
                        <li><strong>Đối với các sản phẩm mua trực tiếp tại cửa hàng:</strong>
                            <ul>
                                <li>Việc đổi sản phẩm chỉ áp dụng tại cửa hàng mà bạn đã mua hàng. Không áp dụng đổi tại cửa hàng khác.</li>
                                <li>Thời hạn đổi sản phẩm với sản phẩm là giày 07 ngày, tính từ ngày bạn mua hàng.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Đối với các sản phẩm mua tại trang dincox.com cùng các trang thương mại điện tử đối tác khác:</strong>
                            <span> Vui lòng liên hệ lại với của hàng qua số điện thoại để dược hỗ trợ.</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        </>
    );
}
export default ReturnPolicy;