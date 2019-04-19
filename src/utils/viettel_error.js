const trade = {
  '22': 'KH nhập sai OTP tại CTT',
  V01: 'Sai check_sum',
  V02: 'KH nhập sai OTP tại CTT',
  V03: 'OTP hết hạn',
  '21': 'KH nhập sai mật khẩu (mã PIN)',
  '685': 'KH nhập sai mật khẩu (mã PIN)',
  '16': 'KH không đủ số dư để thanh toán',
  W04:
    'Kết nối timeout (bao gồm trường hợp user không thao tác trên web CTT thì sau 3 phút sẽ bị redirect về return_url)',
  V04: 'Có lỗi khi truy vấn hệ thống tại VIETTEL',
  V05: 'Không xác nhận được giao dịch (Gọi sang API xác nhận giao dịch của đối tác thất bại)',
  V06: 'Khách hàng hủy thanh toán',
  S_MAINTAIN: 'CTT bảo trì',
  '99': 'Lỗi không xác định',
  M01: 'Mã đối tác chưa được đăng ký (liên hệ kỹ thuật Viettel để kiểm tra)',
  M02: 'Chưa thiết lập tài khoản nhận tiền cho đối tác (liên hệ kỹ thuật Viettel)',
  M03: 'Hình thức thanh toán không phù hợp (liên hệ kỹ thuật Viettel)',
  M04: 'Ảnh QR bị lỗi hoặc không đọc được giá trị cần thiết từ ảnh',
  '813': 'Lỗi kết nối tới CTT'
};

const cancel = {
  '00': 'Hoàn hủy thành công',
  M01: 'Không tìm thấy thông tin của đối tác. Cần rà soát lại cấu hình.',
  M05: 'Cấu hình hoàn tiền không phù hợp. Cần rà soát lại thông tin.',
  '218': 'Lỗi không truyền sang mã giao dịch của đối tác.',
  KG3: 'Không tìm được giao dịch thanh toán tương ứng với thông số đối tác truyền sang.',
  '27': 'Giao dịch không phải của đối tác.',
  KG8: 'Số tiền hoàn không hợp lệ.',
  '176':
    'Trạng thái giao dịch thanh toán này không phù hợp để tiếp tục thực hiện hoàn hủy. Có thể đã hoàn hủy thành công hoặc đang không xác định hoặc đã quá hạn...(cần dựa vào error_msg)',
  '485': 'Giao dịch thanh toán không thành công nên không được phép hoàn hủy.',
  '655': 'Không đủ dữ liệu để thực hiện hoàn tiền cho Khách hàng.',
  '457': 'Không đủ dữ liệu để thực hiện hoàn tiền cho Khách hàng.',
  '17':
    'Tài khoản ViettelPay/BankPlus của Khách hàng không đủ điều kiện để nhận tiền hoàn. Liên hệ với Viettel.',
  '159': 'Không hỗ trợ hoàn tiền vào loại tài khoản BankPlus này của Khách hàng.',
  '813': 'Lỗi trong quá trình hoàn hủy tại Viettel. Hãy thử lại sau.',
  '927': 'Lỗi trong quá trình hoàn hủy tại Viettel. Hãy thử lại sau.'
};

export default { trade, cancel };
