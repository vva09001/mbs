import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'container/layout/layout';

const Term = () => {
  const { t } = useTranslation();
  return (
    <Layout type={1} title="Xác thực giao dịch mua">
      <div className="bond-detail font12">
        <h4 className="text-center mtitle text-uppercase xtgdm">
          {t('CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN KHI GIAO DỊCH MUA Trái phiếu')}
        </h4>
        <div className="bg-white p-4 mt-3">
          <p>
            Khách hàng (“KH”) và CTCP Chứng khoán MB (MBS) thống nhất mua, bán Trái Phiếu theo các
            quy định được nêu tại Các Điều khoản và Điều kiện mua Trái Phiếu sau đây:
          </p>
          <h3 className="mb-3">CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN&nbsp;MUA TRÁI PHIẾU</h3>
          <h4 className="mb-2">ĐIỀU 1: GIẢI THÍCH THUẬT NGỮ</h4>
          <p>
            1.1 <b>Trái Phiếu</b>: Là trái phiếu được xác định tại Đăng Ký Mua Trái Phiếu.
          </p>
          <p>1.2 Tổ Chức Phát Hành: Là doanh nghiệp phát hành Trái Phiếu.</p>
          <p>
            1.3 Tổ Chức Lưu Ký Trái Phiếu: là Trung tâm Lưu ký chứng khoán Việt Nam hoặc tổ chức là
            thành viên của Trung tâm Lưu ký chứng khoán Việt Nam thực hiện dịch vụ lưu ký trái phiếu
            doanh nghiệp cho Tổ Chức Phát Hành.
          </p>
          <p>1.4 Thông Tin Trái Phiếu Giao Dịch: Là bản tóm tắt thông tin về Trái Phiếu.</p>
          <p>
            1.5 Các Văn Kiện Trái Phiếu: Gồm Bản Công Bố Thông Tin do Tổ Chức Phát Hành công bố và
            các tài liệu khác có liên quan (nếu có).
          </p>
          <p>
            1.6 Bản Công Bố Thông Tin: Là bản công bố thông tin về Trái Phiếu do Tổ Chức Phát Hành
            ban hành.
          </p>
          <p>
            1.7 Ngày Giao Dịch: Là ngày MBS chấp nhận Đăng Ký Mua Trái Phiếu của KH được xác nhận
            trên hệ thống của MBS và KH chuyển tiền mua Trái Phiếu thành công.
          </p>
          <p>
            1.8 Đơn Giá Giao Dịch: Là giá trị của 1 Trái Phiếu tại Ngày Giao Dịch. Đơn Giá Giao Dịch
            do MBS xác định theo chính sách của MBS từng thời kỳ.
          </p>
          <p>1.9 Giá Trị Giao Dịch: Giá Trị Giao Dịch = Đơn Giá Giao Dịch x Số lượng giao dịch</p>
          <p>
            1.10 Thuế, Phí Giao Dịch: Là thuế, phí KH phải trả khi thực hiện giao dịch mua, bán Trái
            Phiếu, bao gồm:
          </p>
          <p>
            – Phí khớp lệnh KH trả cho MBS để chuyển nhượng trái phiếu thông qua Sở giao dịch chứng
            khoán, áp dụng với các trái phiếu niêm yết. Phí khớp lệnh được xác định theo quy
            định/chính sách của Sở giao dịch chứng khoán từng thời kỳ;
          </p>
          <p>
            – Phí môi giới KH trả cho MBS để tìm kiếm đối tác mua Trái Phiếu trong trường hợp KH có
            nhu cầu bán Trái Phiếu trước ngày đáo hạn của Trái Phiếu. Phí môi giới được xác định
            theo chính sách của MBS từng thời kỳ.
          </p>
          <p>
            – Phí chuyển nhượng Trái Phiếu KH phải trả cho Đại lý chuyển nhượng (nếu có) để chuyển
            nhượng trái phiếu, áp dụng với trái phiếu chưa niêm yết. Phí chuyển nhượng được xác định
            theo quy định, chính sách của Đại lý chuyển nhượng Trái Phiếu từng thời kỳ.
          </p>
          <p>– Thuế chuyển nhượng Trái Phiếu theo quy định của pháp luật.</p>
          <p>
            1.11 Tổng Giá Trị Giao Dịch: Tổng Giá Trị Giao Dịch = Giá Trị Giao Dịch + Thuế, Phí Giao
            Dịch (nếu có)
          </p>
          <p>
            1.12 Coupon: Là lãi Trái Phiếu (đã trừ thuế thu nhập cá nhân (nếu có)) do Tổ Chức Phát
            Hành thanh toán. Lãi suất coupon và cách tính lãi coupon căn cứ theo quy định của Tổ
            Chức Phát Hành đối với Trái Phiếu.
          </p>
          <p>
            1.13 Giá trị tái đầu tư coupon: là lãi tái đầu tư coupon KH nhận được, tính từ ngày Tổ
            Chức Phát Hành thanh toán coupon đến ngày Trái Phiếu đáo hạn (với giả định KH tiếp tục
            đầu tư khoản coupon nhận được trong thời gian nắm giữ Trái Phiếu).
          </p>
          <p>
            1.14 Giá trị KH nhận được cuối kỳ: Là giá trị KH bán Trái Phiếu cho bên nhận chuyển
            nhượng, hoặc giá trị Tổ Chức Phát Hành Trái Phiếu thanh toán gốc Trái Phiếu tại ngày đáo
            hạn Trái Phiếu, tùy thuộc vào thời hạn KH nắm giữ Trái Phiếu.
          </p>
          <p>1.15 Tổng dòng tiền từ Trái Phiếu:</p>
          <p>
            Tổng dòng tiền từ Trái Phiếu = Giá trị KH nhận được cuối kỳ + Coupon (nếu có) + Giá trị
            tái đầu tư Coupon (nếu có).
          </p>
          <p>
            1.16 Lãi suất đáo hạn (tính trên thu nhập sau khi đã khấu trừ thuế thu nhập cá nhân nếu
            KH là cá nhân): là lãi suất KH nhận được nếu giữ Trái Phiếu đến đáo hạn, tính
            theo&nbsp;%/năm/Giá trị đầu tư Trái Phiếu&nbsp;trên cơ sở 1 năm có 365 ngày.
          </p>
          <p>
            Giả định Tổ Chức Phát Hành thanh toán đúng hạn, đủ gốc, lãi trái phiếu và coupon của các
            kỳ chưa xác định lãi suất được giả định như tại&nbsp;Chi tiết dòng tiền.
          </p>
          <img src="/img/images1.png" alt="logo" className="w-100" />
          <p>Trong đó:</p>
          <ul>
            <li>Tổng dòng tiền từ Trái Phiếu được xác định như mục 1.14 Điều 1;</li>
            <li>
              Giá trị đầu tư Trái Phiếu: Là Giá Trị Giao Dịch được xác định tại Đăng Ký Mua Trái
              Phiếu;
            </li>
            <li>
              Thời gian đầu tư: Là thời gian KH nắm giữ Trái Phiếu, (tính từ (và gồm cả) Ngày Giao
              Dịch đến (nhưng không bao gồm cả) ngày đáo hạn Trái Phiếu.
            </li>
          </ul>
          <h4 className="mb-2">ĐIỀU 2: QUY ĐỊNH VỀ GIAO DỊCH TRÁI PHIẾU</h4>
          <p>
            2.1 Trái Phiếu giao dịch: Là Trái Phiếu được nêu tại Đăng Ký Mua Trái Phiếu, có các đặc
            điểm được nêu tại Thông Tin Trái Phiếu
          </p>
          <p>2.2 Ngày giao dịch: Là Ngày Giao Dịch được nêu tại Đăng Ký Mua Trái Phiếu</p>
          <p>2.3 Khối lượng giao dịch: Là Khối Lượng được nêu tại Đăng Ký Mua Trái Phiếu.</p>
          <p>
            2.4 Đơn giá giao dịch trái phiếu: Là Đơn Giá Giao Dịch được nêu tại Đăng Ký Mua Trái
            Phiếu
          </p>
          <p>
            2.5 Tổng giá trị giao dịch: Là Tổng Giá Trị Giao Dịch được nêu tại Đăng Ký Mua Trái
            Phiếu
          </p>
          <p>
            2.6 Thanh toán: KH thực hiện thanh toán cho MBS như quy định tại Mục 2.5 Điều này trong
            Ngày Giao Dịch.
          </p>
          <p>
            2.7 Chuyển nhượng Trái Phiếu: Khi Đăng Ký Mua Trái Phiếu của KH được MBS chấp nhận trên
            hệ thống, MBS và KH chấp thuận chuyển nhượng Trái Phiếu với các nội dung như được nêu
            tại Đề nghị chuyển nhượng Trái Phiếu. Việc chuyển nhượng được thực hiện ngay trong Ngày
            Giao Dịch, sau khi KH đã thanh toán cho MBS như quy định tại mục 2.6 điều này. KH trở
            thành chủ sở hữu Trái Phiếu và được hưởng các quyền, lợi ích từ các Trái Phiếu kể từ
            ngày hoàn thành việc chuyển nhượng Trái Phiếu.
          </p>
          <p>
            2.8 Hủy giao dịch: Giao dịch sẽ mua bán Trái Phiếu giữa KH và MBS sẽ bị hủy trong trường
            hợp KH không hoàn tất thanh toán đúng thời hạn như quy định tại Mục 2.6 Điều này.
          </p>
          <h4 className="mb-2">ĐIỀU3: HÌNH THÀNH HỢP ĐỒNG</h4>
          <p>
            3.1 Thông Tin Trái Phiếu Giao Dịch, Đăng Ký Mua Trái Phiếu, Các Điều Khoản và Điều Kiện
            mua Trái Phiếu cùng các tài liệu kèm theo sẽ hợp thành một hợp đồng mua bán trái phiếu
            giữa KH và MBS (“Hợp đồng”). Hợp đồng có hiệu lực kể từ thời điểm MBS chấp nhận Đăng Ký
            Mua Trái Phiếu của KH trên hệ thống. MBS sẽ (nhưng không phải là nghĩa vụ bắt buộc)
            thông báo lại cho KH việc chấp nhận này.
          </p>
          <p>
            3.2 Hợp đồng&nbsp;được lập và lưu trữ dưới dạng dữ liệu điện tử trên hệ thống của MBS và
            có giá trị như một hợp đồng được ký dưới dạng văn bản.
          </p>
          <h4 className="mb-2">ĐIỀU 4: QUYỀN VÀ NGHĨA VỤ CỦA CÁC BÊN</h4>
          <p>4.1 Quyền và nghĩa vụ của MBS</p>
          <p>
            – MBS có trách nhiệm thực hiện các công việc liên quan đến việc chuyển nhượng Trái Phiếu
            cho KH theo đúng quy định tại Hợp đồng này, Các Văn Kiện Trái Phiếu và quy định của pháp
            luật có liên quan.
          </p>
          <p>
            – MBS được nhận tiền bán Trái Phiếu từ KH theo Tổng giá trị giao dịch quy định tại Điều
            2 Các Điều Khoản và Điều Kiện mua Trái Phiếu;
          </p>
          <p>
            – Xác nhận giao dịch đặt mua Trái Phiếu của KH thành công trên hệ thống (ngoại trừ
            trường hợp do lỗi hệ thống tin nhắn/ email do đường truyền); hiển thị, cung cấp số dư
            Trái Phiếu mà KH nắm giữ trong trường hợp KH đã thanh toán đầy đủ, thành công cho MBS
            (trong trường hợp KH yêu cầu).
          </p>
          <p>
            – Chịu các khoản Thuế, Phí Giao Dịch áp dụng đối với giao dịch mua, bán Trái Phiếu (nếu
            có);
          </p>
          <p>
            – Các quyền và nghĩa vụ khác theo thỏa thuận tại Hợp đồng này, Các Văn Kiện Trái Phiếu
            và quy định của pháp luật.
          </p>
          <p>4.2. Quyền và nghĩa vụ của KH</p>
          <p>
            – Được Tổ Chức Phát Hành Trái Phiếu thanh toán đầy đủ, đúng hạn gốc, lãi trái phiếu khi
            đến hạn và bảo đảm việc thực hiện các quyền kèm theo (nếu có) theo các điều kiện, điều
            khoản của Trái Phiếu khi phát hành.
          </p>
          <p>
            – Được dùng Trái Phiếu để chuyển nhượng, cho, tặng, để lại, thừa kế, chiết khấu và sử
            dụng Trái Phiếu làm tài sản bảo đảm trong các quan hệ dân sự và quan hệ thương mại theo
            quy định của pháp luật.
          </p>
          <p>
            – KH cam kết thông tin của KH cung cấp cho MBS trên hệ thống này là chính xác, trung
            thực và sử dụng thông tin này để thực hiện thủ tục mua, bán Trái Phiếu giữa KH và MBS.
          </p>
          <p>
            – Chịu các khoản Thuế, Phí Giao Dịch áp dụng đối với giao dịch mua, bán Trái Phiếu (nếu
            có).
          </p>
          <p>
            – KH đồng ý rằng trừ trường hợp có sai sót rõ ràng về mặt số liệu tính toán, số liệu do
            MBS tính toán là số liệu cuối cùng được sử dụng.
          </p>
          <p>
            – Trong trường hợp thông tin của KH thay đổi, KH có trách nhiệm thông báo về các thông
            tin thay đổi đó cho Tổ Chức Lưu Ký Trái Phiếu theo phương thức mà Tổ Chức Lưu Ký Trái
            Phiếu quy định. KH hoàn toàn chịu trách nhiệm và các thiệt hại phát sinh (nếu có) từ
            việc chậm thông báo này.
          </p>
          <p>
            – KH cam kết nguồn tiền KH sử dụng để mua Trái Phiếu theo Các Điều Khoản và Điều Kiện
            mua Trái Phiếu là nguồn tiền hợp pháp, thuộc quyền sở hữu của KH;
          </p>
          <p>
            – KH tuân thủ đầy đủ các điều khoản và điều kiện về giao dịch điện tử mà MBS áp dụng đối
            với Tài khoản giao dịch chứng khoán tại MBS (được sửa đổi, bổ sung, thay thế theo chính
            sách MBS từng thời kỳ).
          </p>
          <p>– KH thừa nhận, cam đoan và bảo đảm với MBS rằng:</p>
          <p>
            (i) Tham vấn với các bên tư vấn: Để bảo vệ quyền lợi cho KH khi tham gia đầu tư, KH tự
            chịu trách nhiệm thực hiện (i) tham vấn với các chuyên gia tư vấn về pháp lý, thuế, kinh
            doanh, đầu tư, tài chính và kế toán liên quan đến việc mua Trái Phiếu của KH trong phạm
            vi mà KH cho là cần thiết, (ii) tiếp cận, xem xét và nghiên cứu tất cả thông tin mà KH
            tin tưởng là cần thiết hoặc phù hợp liên quan đến việc mua Trái Phiếu của KH, (iii)
            nghiên cứu mọi thông tin mà KH cho là thích hợp liên quan đến việc mua Trái Phiếu và tự
            đưa ra quyết định đầu tư dựa trên những thông tin mà KH đã thu thập, đánh giá, đã tham
            vấn độc lập (nếu có) mà không phụ thuộc vào tư vấn, đánh giá của MBS hoặc tổ chức/cá
            nhân nào thay mặt cho MBS.
          </p>
          <p>
            (ii) Để tránh nhầm lẫn, KH thừa nhận rằng (a) các thông tin về Trái Phiếu mà MBS cung
            cấp cho KH trên hệ thống giao dịch điện tử là các thông tin chính xác mà Tổ Chức Phát
            Hành đã công bố về đợt phát hành Trái Phiếu và Tổ Chức Phát Hành; (b) đối với việc lựa
            chọn kênh giao dịch Trái Phiếu trên hệ thống giao dịch điện tử, KH đồng ý và xác nhận
            rằng MBS sẽ không đóng vai trò là bên tư vấn: tài chính, đầu tư, thuế, và kế toán liên
            quan đến việc mua Trái Phiếu của KH và (c) tất cả các hợp đồng, thỏa thuận và tài liệu
            liên quan đến việc mua Trái Phiếu của KH được giao kết giữa KH và MBS (bao gồm cả Các
            Điều Khoản và Điều Kiện mua Trái Phiếu) được dựa trên cơ sở tự do, tự nguyên cam kết,
            thỏa thuận của Các Bên;
          </p>
          <p>
            (iii) Không phụ thuộc: KH hiểu và đồng ý rằng KH không dựa vào bất kỳ việc thẩm tra hoặc
            điều tra nào của MBS có thể tiến hành liên quan đến việc đầu tư vào Trái Phiếu, hoặc bất
            kỳ cam đoan nào của bất kỳ bên liên kết, người lao động, nhân viên, người có thẩm quyền
            của MBS đưa ra đối với KH, rõ ràng hoặc ngầm định, đối với việc đầu tư vào Trái Phiếu
            của KH;
          </p>
          <p>
            (i) Đưa ra quyết định mua Trái Phiếu: KH có được tất cả các thông tin mà KH tin tưởng là
            cần thiết hoặc phù hợp để đưa ra quyết định mua Trái Phiếu của KH, bao gồm nhưng không
            giới hạn các thông tin trong Các Văn Kiện Trái Phiếu, thông tin về dòng tiền Trái phiếu
            dự kiến … và KH cũng thừa nhận rằng MBS hoặc bất kỳ bên có liên quan của MBS không xác
            nhận các thông tin đó hoặc đưa ra các khẳng định hoặc bảo đảm về tính chính xác và đầy
            đủ của các thông tin đó;
          </p>
          <p>
            (ii) Kiến thức: KH đã có sự tìm hiểu, đánh giá độc lập về việc đầu tư Trái Phiếu qua hệ
            thống giao dịch điện tử. KH có kiến thức về tài chính, kinh doanh và đầu tư Trái Phiếu
            nên KH có khả năng đánh giá lợi ích và hiểu được các rủi ro của việc mua Trái Phiếu và
            hiểu được rằng KH có thể phải chịu và có khả năng gánh chịu các rủi ro về tài chính phát
            sinh liên quan đến việc đầu tư vào Trái Phiếu trước khi quyết định thực hiện giao dịch;
          </p>
          <p>
            (iii) Xem xét các yếu tố rủi ro: KH đã xem xét toàn bộ Bản công bố thông tin do Tổ Chức
            Phát Hành công bố, và đặc biệt là phần có tiêu đề “Các Yếu Tố Rủi Ro” hoặc phần có nội
            dung tương tự, và KH hiểu và thừa nhận tất cả các rủi ro được mô tả trong phần “Các Yếu
            Tố Rủi Ro” hoặc phần có nội dung tương tự của Bản công bố thông tin do Tổ Chức Phát Hành
            công bố. Trên cơ sở nêu trên, KH đồng ý và thừa nhận rằng:
          </p>
          <p>
            (A) Trái Phiếu là một khoản đầu tư phù hợp cho KH và khoản đầu tư của KH vào Trái Phiếu
            không vi phạm bất kỳ luật, quy tắc, quy định nào áp dụng đối với KH; và
          </p>
          <p>
            (B) KH đã có được tất cả các chấp thuận và phê duyệt nội bộ và/hoặc KH đảm bảo có đủ
            thẩm quyền để đầu tư vào Trái Phiếu theo Các Điều Khoản và Điều Kiện này.
          </p>
          <p>
            (i) Thay đổi chính sách phân phối Trái Phiếu của MBS: KH tại đây thừa nhận rằng việc đầu
            tư vào Trái Phiếu có thể bị ảnh hưởng do việc thay đổi chính sách phân phối Trái Phiếu
            theo chính sách, quyết định của MBS công bố từng thời kỳ.
          </p>
          <p>
            – Các quyền và nghĩa vụ khác theo thỏa thuận tại Các Điều Khoản và Điều Kiện mua Trái
            Phiếu, Các Văn Kiện Trái Phiếu và quy định của pháp luật.
          </p>
          <h4 className="mb-2">ĐIỀU 5: VI PHẠM VÀ BỒI THƯỜNG THIỆT HẠI</h4>
          <p>
            Bất kỳ bên nào vi phạm các nghĩa vụ của mình tại Các Điều Khoản và Điều Kiện mua Trái
            Phiếu phải có trách nhiệm khắc phục vi phạm trong vòng 02 ngày làm việc kể từ ngày phát
            sinh vi phạm. Nếu quá thời hạn trên, Bên vi phạm sẽ phải bồi thường toàn bộ thiệt hại
            thực tế phát sinh từ việc vi phạm nghĩa vụ của mình theo Các Điều Khoản và Điều Kiện mua
            Trái Phiếu.
          </p>
          <h4 className="mb-2">ĐIỀU 6: TỔ CHỨC PHÁT HÀNH MUA LẠI TRÁI PHIẾU TRƯỚC HẠN</h4>
          <p>
            Trong trường hợp Tổ Chức Phát Hành thực hiện việc mua lại trước hạn đối với một phần
            hoặc toàn bộ Trái Phiếu được giao dịch theo Các Điều Khoản và Điều Kiện mua Trái Phiếu
            và/hoặc Các Văn Kiện Trái Phiếu, giá mua lại đối với các Trái Phiếu được mua lại sẽ được
            điều chỉnh giảm một khoản tiền được xác định theo công thức sau:
          </p>
          <p>
            Khoản điều chỉnh giảm = [(Giá Mua Trái Phiếu + Lợi nhuận đầu tư) – (Đơn giá mua lại của
            Tổ Chức Phát Hành + Coupon trên mỗi Trái Phiếu)] * Số lượng Trái Phiếu được mua lại
          </p>
          <p>Trong đó:</p>
          <ul>
            <li>
              Khoản điều chỉnh giảm: Là phần bù lợi nhuận trên các Trái Phiếu KH đang nắm giữ bị Tổ
              Chức Phát Hành mua lại trước hạn do MBS chi trả cho KH. Khoản điều chỉnh giảm giá mua
              này chỉ áp dụng đối với các Trái Phiếu được Tổ Chức Phát Hành mua lại trước hạn;
            </li>
            <li>
              Giá Mua Trái Phiếu: Là Đơn Giá Giao Dịch được xác định tại Đăng Ký Mua Trái Phiếu;
            </li>
            <li>
              Lợi nhuận đầu tư: Là lợi nhuận đầu tư tính trên mỗi Trái Phiếu KH mua từ MBS với lợi
              suất đáo hạn Trái Phiếu tính trên giá trị mua mỗi Trái Phiếu và thời gian đầu tư (tính
              từ (và gồm cả) Ngày Giao Dịch đến (nhưng không bao gồm cả) ngày Tổ Chức Phát Hành mua
              lại Trái Phiếu trước hạn) với cơ sở tính lãi 365 ngày/năm.
            </li>
            <li>
              Đơn giá mua lại của Tổ Chức Phát Hành: Là giá Tổ Chức Phát Hành mua lại trên mỗi Trái
              Phiếu (sau thuế thu nhập cá nhân, nếu có) theo điều khoản và điều kiện của Trái Phiếu
              do Tổ Phức Phát Hành công bố;
            </li>
            <li>
              Coupon: Là lãi trên mỗi Trái Phiếu (đã trừ thuế thu nhập cá nhân (nếu có)) do Tổ Chức
              Phát Hành thanh toán cho KH trong thời gian KH nắm giữ Trái Phiếu;
            </li>
            <li>
              Số lượng Trái Phiếu được mua lại: Là số lượng Trái Phiếu KH đang nắm giữ được Tổ Chức
              Phát Hành mua lại trước hạn.
            </li>
          </ul>
          <p>
            – Khoản điều chỉnh giảm sẽ được MBS thanh toán cho KH trong vòng năm (05) ngày làm việc
            kể từ ngày KH được Tổ Chức Phát Hành thanh toán tiền mua lại Trái Phiếu theo điều khoản
            và điều kiện của Trái Phiếu do Tổ Chức Phát Hành công bố. Trừ trường hợp có sai sót rõ
            ràng về mặt số liệu, KH và MBS thống nhất số liệu do MBS tính toán sẽ là số liệu cuối
            cùng của KH và MBS.
          </p>
          <p>
            – Để làm rõ, KH và MBS thống nhất số lượng Trái Phiếu được Tổ Chức Phát Hành mua lại sẽ
            được tính trên cơ sở các Trái Phiếu được giao dịch tại Hợp đồng này và tại thời điểm Tổ
            Chức
          </p>
          <p>
            Phát Hành mua lại vẫn thuộc sở hữu của KH; tỷ lệ, nguyên tắc mua lại sẽ căn cứ theo tỷ
            lệ và nguyên tắc mua lại do Tổ Chức Phát Hành công bố.
          </p>
          <h4 className="mb-2">ĐIỀU 7: ĐIỀU KHOẢN THI HÀNH</h4>
          <p>
            7.1. Mỗi bên khẳng định rằng: (i) Đã hiểu rõ quyền, nghĩa vụ lợi ích và các rủi ro có
            thể xảy ra của việc giao kết Hợp đồng này và (ii) Việc giao kết, thực hiện Hợp đồng này
            là hoàn toàn tự nguyện, không bị lừa dối, ép buộc và đã được thông qua bởi cấp có thẩm
            quyền của mỗi bên.
          </p>
          <p>
            7.2. Mỗi bên phải giữ bí mật nội dung của Hợp đồng này và chỉ được tiết lộ nội dung của
            Hợp đồng và/hoặc Các Văn Kiện Trái Phiếu (“Thông Tin Mật”) khi: (i) được bên kia chấp
            thuận trước, (ii) nhằm tuân thủ pháp luật hoặc yêu cầu của cơ quan nhà nước có thẩm
            quyền, (iii) nhằm phục vụ các mục đích kế toán, kiểm toán hoặc thực hiện thủ tục chuyển
            quyền sở hữu các Trái Phiếu hoặc (iv) nhằm phục vụ việc tuân thủ quy định nội bộ và vận
            hành khác của MBS. Quy định này vẫn có hiệu lực trong vòng 03 tháng sau khi đáo hạn Trái
            Phiếu hoặc trong vòng 03 tháng kể từ ngày KH hoàn thành thủ tục chuyển nhượng Trái Phiếu
            cho bên thứ ba.
          </p>
          <p>7.3. Hợp đồng được điều chỉnh và giải thích theo pháp luật Việt Nam.</p>
          <p>
            7.4. Trong trường hợp có bất cứ tranh chấp nào phát sinh liên quan đến việc mua bán Trái
            Phiếu theo các quy định của Hợp đồng, KH và MBS sẽ nỗ lực để tự giải quyết tranh chấp
            thông qua đàm phán thiện chí. Trong trường hợp KH và MBS không giải quyết được tranh
            chấp qua thương lượng, bất kỳ bên nào cũng có thể đưa tranh chấp đó ra Tòa án có thẩm
            quyền của Việt Nam để giải quyết.
          </p>
          <p>
            7.5. Hợp đồng này có hiệu lực kể từ thời điểm MBS chấp nhận Đăng Ký Mua Trái Phiếu của
            KH trên hệ thống cho đến khi KH và MBS đã hoàn tất các nghĩa vụ của mình theo Hợp đồng
            hoặc chấm dứt theo quy định của pháp luật (ngoại trừ Điều 5, Điều 7.2, Điều 7.3, Điều
            7.4 và Điều 7.5 sẽ tiếp tục duy trì hiệu lực kể cả khi Hợp đồng này chấm dứt).
          </p>
          <p>
            7.6. Mọi sửa đổi, bổ sung Hợp đồng này chỉ có hiệu lực khi KH đề nghị và được MBS xác
            nhận trên hệ thống giao dịch điện tử. Các sửa đổi, bổ sung này sẽ là một phần không tách
            rời của Hợp đồng. Các văn bản hoặc thỏa thuận được giao kết giữa KH và MBS là do MBS
            trực tiếp lập, ban hành cho KH liên quan đến đầu tư Trái Phiếu, không phải là thỏa thuận
            hoặc văn bản được ký, ban hành chấp nhận bởi một bên thứ ba nào khác.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Term;
