import * as types from "../constands/ActionTypes";
const initialState = [
	{
		id_new: 1,
		id_account: 'Tuấn phong',
		title: '3 cách nhận biết máy Mac bị nhiễm virus',
		create_at: '01/02/2021',
		edited_at: '',
		contents: 'Máy Mac của bạn có đang hoạt động hơi lạ không? Dù bạn đang nhìn thấy những quảng cáo bạn không thể giải thích hay hệ thống của bạn chậm một cách bất thường, bạn có thể cho rằng vấn đề là do phần mềm độc hại. Và bạn có thể đúng trong trường hợp này.',
		is_active: 1
	},
	{
		id_new: 2,
		id_account: 'Phương Phùng',
		title: 'Những điều cần biết về nghĩa vụ quân sự 2021',
		create_at: '01/03/2021',
		edited_at: '',
		contents: 'Dưới đây là những điều cần biết về nghĩa vụ quân sự như lịch khám sức khỏe nghĩa vụ quân sự, thời gian thực hiện nghĩa vụ quân sự, tiêu chuẩn chọn đi nghĩa vụ quân sự… theo quy định tại Luật Nghĩa vụ quân sự 2015 và các văn bản liên quan khác.',
		is_active: 1
	},
	{
		id_new: 3,
		id_account: 'N.T.C',
		title: 'Phải làm gì nếu máy tính của bạn nhiễm virus?',
		create_at: '01/04/2021',
		edited_at: '',
		contents: 'Nên làm gì khi thấy máy tính bị nhiễm virus? Hãy đọc bài viết dưới đây để biết cách ứng phó khi bạn thấy thông báo virus bị phát hiện trên máy tính nhé.',
		is_active: 1
	},
	{
		id_new: 4,
		id_account: 'Phạm Hải',
		title: 'Cách xóa tài khoản Telegram',
		create_at: '01/05/2021',
		edited_at: '',
		contents: 'Telegram là một trong số ít các ứng dụng nhắn tin đa nền tảng có khả năng bảo mật được đánh giá cao hiện nay.',
		is_active: 1
	},
	{
		id_new: 5,
		id_account: 'Hạnh',
		title: 'Stt cho người yêu đi nghĩa vụ quân sự cảm động nhất',
		create_at: '07/02/2021',
		edited_at: '',
		contents: 'Stt tiễn người yêu đi lính cảm động sau đây sẽ là những lời tiễn người yêu đi lính, lời chúc người yêu đi bộ đội hay nhất!',
		is_active: 1
	},
	{
		id_new: 6,
		id_account: 'Phương Phùng',
		title: 'Ý nghĩa màu sắc của hoa hồng',
		create_at: '08/04/2021',
		edited_at: '',
		contents: 'Hoa hồng có nhiều màu sắc khác nhau như đỏ, hồng, trắng, xanh, vàng, đen… và mỗi màu sắc lại có ý nghĩa riêng. Vậy, ý nghĩa màu hoa hồng là gì, hoa hồng màu đỏ có ý nghĩa gì, hoa hồng vàng có ý nghĩa gì…',
		is_active: 1
	},
	{
		id_new: 7,
		id_account: 'Nguyễn Trang',
		title: 'Cách tra mã vận đơn VNPost',
		create_at: '01/08/2021',
		edited_at: '',
		contents: 'Việc tra mã vận đơn VNPost sẽ giúp khách hàng có thể biết được tình trạng hàng hóa của mình như thế nào, hiện đã được giao hàng hay chưa.',
		is_active: 1
	},
	{
		id_new: 8,
		id_account: 'Hạnh',
		title: 'Cách kết nối wifi cho Smart tivi Sony',
		create_at: '01/09/2021',
		edited_at: '',
		contents: 'Nếu bạn đang tìm cách kết nối wifi cho Smart tivi Sony, thì hãy tham khảo bài viết này của chúng tôi nhé!',
		is_active: 1
	},
	{
		id_new: 9,
		id_account: 'Nguyễn Thu Hà',
		title: 'Download Free Screen Recorder 10.7',
		create_at: '10/04/2021',
		edited_at: '',
		contents: 'Thundersoft Free Screen Recorder là trình ghi màn hình dành cho PC. Đó là một phần mềm quay phim màn hình miễn phí dễ sử dụng để ghi lại âm thanh, video và âm thanh micro.',
		is_active: 1
	},
	{
		id_new: 10,
		id_account: 'Đinh Kiều Trang',
		title: 'Cách chỉ để Admin gửi tin nhắn trong nhóm chat WhatsApp',
		create_at: '06/02/2021',
		edited_at: '',
		contents: 'Mỗi một nhóm chat WhatsApp sẽ đều có Admin đóng vai trò quản lý nhóm như thêm thành viên vào nhóm, khóa quyền chỉnh thông tin nhóm trên WhatsApp. Bài viết dưới đây sẽ hướng dẫn bạn đọc cách khóa gửi tin nhắn nhóm chat WhatsApp.',
		is_active: 1
	}
];
var ListNew = (state=initialState, action) => {
    switch (action.type) {
        case types.LIST_NEW:
            return state;
    
        default:
            return state;
    }
}

export default ListNew;