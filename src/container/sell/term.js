import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'container/layout/layout';

const Term = () => {
  const { t } = useTranslation();
  return (
    <Layout type={1} title="Xác thực giao dịch bán">
      <div className="bond-detail">
        <h4 className="text-center mtitle text-uppercase">
          {t('CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN KHI GIAO DỊCH BÁN TRÁI PHIẾU.')}
        </h4>
        <div className="bg-white p-4 mt-3 rounded border border-secondary">
          <h3 className="mb-3">ĐIỀU KHOẢN VÀ ĐIỀU KIỆN&nbsp;BÁN TRÁI PHIẾU</h3>
          <p>
            Khách hàng (KH) và Công ty Cổ phần Chứng khoán MB (MBS) thống nhất mua, bán Trái Phiếu
            theo các quy định được nêu tại Các Điều khoản và Điều kiện bán Trái phiếu sau đây: CÁC
            ĐIỀU KHOẢN VÀ ĐIỀU KIỆN&nbsp;BÁN TRÁI PHIẾU
          </p>
          <h4 className="mb-2">ĐIỀU 1: GIẢI THÍCH THUẬT NGỮ</h4>
          <p>1.1 Trái Phiếu: Là trái phiếu được xác định tại Đăng Ký Bán Trái Phiếu.</p>
          <p>1.2 Tổ Chức Phát Hành: Là doanh nghiệp phát hành Trái Phiếu.</p>
          <p>
            1.3 Tổ Chức Lưu Ký Trái Phiếu: là Trung tâm Lưu ký chứng khoán Việt Nam hoặc tổ chức là
            thành viên của Trung tâm Lưu ký chứng khoán Việt Nam thực hiện dịch vụ lưu ký trái phiếu
            doanh nghiệp cho Tổ Chức Phát Hành.
          </p>
          <p>1.4 Thông Tin Trái Phiếu Giao Dịch: Là bản tóm tắt thông tin về Trái Phiếu.</p>
          <p>
            1.5 Các Văn Kiện Trái Phiếu: Gồm Bản Công Bố Thông Tin doTổ Chức Phát Hành công bố và
            các tài liệu khác có liên quan (nếu có).
          </p>
          <p>
            1.6 Bản Công Bố Thông Tin: Là bản công bố thông tin về Trái Phiếu do Tổ Chức Phát Hành
            ban hành.
          </p>
          <p>1.7 Ngày Giao Dịch: Là ngày KH bán Trái Phiếu.</p>
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
            – Phí khớp lệnh KH trả cho MBS để chuyển nhượng Trái Phiếu thông qua sở giao dịch chứng
            khoán, áp dụng với các trái phiếu niêm yết. Phí khớp lệnh được xác định theo quy
            định/chính sách của sở giao dịch chứng khoán từng thời kỳ;
          </p>
          <p>
            – Phí môi giới KH trả cho MBS để tìm kiếm đối tác mua Trái Phiếu trong trường hợp KH có
            nhu cầu bán Trái Phiếu trước ngày đáo hạn của Trái Phiếu. Phí môi giới được xác định
            theo chính sách của MBS từng thời kỳ.
          </p>
          <p>
            – Phí chuyển nhượng Trái Phiếu KH phải trả cho Đại lý chuyển nhượng (nếu có) để chuyển
            nhượng Trái Phiếu, áp dụng với Trái Phiếu chưa niêm yết. Phí chuyển nhượng được xác định
            theo quy định, chính sách của Đại lý chuyển nhượng Trái Phiếu từng thời kỳ.
          </p>
          <p>– Thuế chuyển nhượng Trái Phiếu theo quy định của pháp luật.</p>
          <p>
            1.11 Tổng Giá Trị Giao Dịch: Tổng Giá Trị Giao Dịch = Giá Trị Giao Dịch – Thuế, Phí Giao
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
          <p>
            1.15 Tổng dòng tiền từ Trái Phiếu = Giá trị KH nhận được cuối kỳ + Coupon (nếu có) + Giá
            trị tái đầu tư coupon (nếu có).
          </p>
          <p>
            1.16 Lãi suất đáo hạn (tính trên thu nhập sau khi đã khấu trừ thuế thu nhập cá nhân nếu
            KH là cá nhân): là lãi suất KH nhận được nếu giữ Trái Phiếu đến đáo hạn, tính
            theo&nbsp;%/năm/Giá trị đầu tư Trái Phiếu&nbsp;trên cơ sở 1 năm có 365 ngày. Giả định Tổ
            Chức Phát Hành thanh toán đúng hạn, đủ gốc, lãi Trái Phiếu và coupon của các kỳ chưa xác
            định lãi suất được giả định như tại&nbsp;Chi tiết dòng tiền.
          </p>
          <img src="/img/images1.png" alt="logo" className="w-100" />
          <p>Trong đó:</p>
          <ul>
            <li>Tổng dòng tiền từ Trái Phiếu được xác định như mục 1.15 Điều 1;</li>
            <li>
              Giá trị đầu tư Trái Phiếu: Là Giá Trị Giao Dịch được xác định tại Đăng Ký Mua Trái
              Phiếu;
            </li>
            <li>
              Thời gian đầu tư: Là thời gian KH nắm giữ Trái Phiếu, (tính từ (và gồm cả) Ngày Giao
              Dịch đến (nhưng không bao gồm cả) ngày đáo hạn Trái Phiếu.
            </li>
          </ul>
          <p>
            1.17 Tài khoản ViettelPay: Là tài khoản của KH sử dụng trên ứng dụng ViettelPAY như 1 ví
            điện tử thanh toán
          </p>
          <h4 className="mb-2">ĐIỀU 2: QUY ĐỊNH VỀ GIAO DỊCH TRÁI PHIẾU</h4>
          <p>
            2.1 Trái Phiếu giao dịch: Là Trái Phiếu được nêu tại Đăng Ký Bán Trái Phiếu, có các đặc
            điểm được nêu tại Thông Tin Trái Phiếu.
          </p>
          <p>2.2 Ngày giao dịch: Là Ngày Giao Dịch được nêu tại Đăng Ký Bán Trái Phiếu.</p>
          <p>2.3 Khối lượng giao dịch: Là Khối Lượng được nêu tại Đăng Ký Bán Trái Phiếu.</p>
          <p>2.4 Đơn giá giao dịch: Là Đơn Giá Giao Dịch được nêu tại Đăng Ký Bán Trái Phiếu</p>
          <p>
            2.5 Tổng giá trị giao dịch: Là Tổng Giá Trị Giao Dịch được nêu tại Đăng Ký Bán Trái
            Phiếu
          </p>
          <p>
            2.6 Thanh toán: MBS thực hiện thanh toán cho KH như quy định tại Mục 2.5 Điều này trước
            trong Ngày Giao Dịch.
          </p>
          <p>
            2.7 Chuyển nhượng Trái Phiếu: Khi Đăng Ký Bán Trái Phiếu của KH được MBS chấp nhận trên
            hệ thống, KH và MBS chấp thuận chuyển nhượng Trái Phiếu với các nội dung như được nêu
            tại Đề nghị chuyển nhượng Trái Phiếu. Việc chuyển nhượng được thực hiện ngay trong Ngày
            Giao Dịch, sau khi MBS đã thanh toán cho KH như quy định tại Mục 2.6 Điều này.
          </p>
          <h4 className="mb-2">ĐIỀU 3: HÌNH THÀNH HỢP ĐỒNG</h4>
          <p>
            3.1 Thông Tin Trái Phiếu Giao Dịch, Đăng Ký Bán Trái Phiếu, Các Điều Khoản và Điều Kiện
            bán Trái Phiếu cùng các tài liệu kèm theo sẽ hợp thành một hợp đồng mua bán Trái Phiếu
            giữa KH và MBS (“Hợp đồng”). Hợp đồng có hiệu lực kể từ thời điểm MBS chấp nhận Đăng Ký
            Bán Trái Phiếu của KH trên hệ thống. MBS sẽ (nhưng không phải là nghĩa vụ bắt buộc)
            thông báo lại cho KH việc chấp nhận này.
          </p>
          <p>
            3.3 Hợp đồng&nbsp;được lập và lưu trữ dưới dạng dữ liệu điện tử trên hệ thống của MBS và
            có giá trị như một hợp đồng được ký dưới dạng văn bản.
          </p>
          <h4 className="mb-2">ĐIỀU 4: QUYỀN VÀ NGHĨA VỤ CỦA CÁC BÊN</h4>
          <p>4.1 Quyền và nghĩa vụ của MBS</p>
          <p>
            – MBS cam kết thông tin của MBS nêu tại phần đầu của Hợp đồng này là chính xác, trung
            thực và sẽ sử dụng thông tin này để thực hiện thủ tục nhận chuyển nhượng quyền sở hữu
            Trái Phiếu từ KH.
          </p>
          <p>
            – Có trách nhiệm thanh toán Tổng Giá Trị Giao Dịch đầy đủ, đúng hạn cho KH theo quy định
            tại Điều 3 Hợp đồng này.
          </p>
          <p>
            – Xác nhận KH đặt lệnh bán thành công trên hệ thống (ngoại trừ trường hợp lỗi hệ thống
            tin nhắn/ email do đường truyền).
          </p>
          <p>
            – Cam kết nguồn tiền sử dụng để mua Trái Phiếu theo Hợp đồng này là nguồn tiền hợp pháp,
            thuộc quyền sở hữu của MBS.
          </p>
          <p>
            – Chịu các khoản Thuế, Phí Giao Dịch áp dụng đối với giao dịch mua, bán Trái Phiếu (nếu
            có).
          </p>
          <p>
            – Các quyền và nghĩa vụ khác theo thỏa thuận tại Hợp đồng này, Các Văn Kiện Trái Phiếu
            và quy định của pháp luật.
          </p>
          <p>4.2. Quyền và nghĩa vụ của KH</p>
          <p>
            – KH có trách nhiệm thực hiện các công việc liên quan đến việc chuyển nhượng Trái Phiếu
            cho MBS theo đúng quy định tại Hợp đồng này, Các Văn Kiện Trái Phiếu và quy định của
            pháp luật có liên quan.
          </p>
          <p>
            – Chịu các khoản Thuế, Phí Giao Dịch áp dụng đối với giao dịch mua, bán Trái Phiếu (nếu
            có).
          </p>
          <p>
            – KH cam kết thông tin của KH cung cấp cho MBS trên hệ thống này là chính xác, trung
            thực và sẽ sử dụng thông tin này để thực hiện thủ tục liên quan đến mua, bán Trái Phiếu
            giữa KH và MBS.
          </p>
          <p>
            – KH đồng ý rằng trừ trường hợp có sai sót rõ ràng về mặt số liệu tính toán, số liệu do
            MBS tính toán là số liệu cuối cùng được sử dụng
          </p>
          <p>
            – KH tuân thủ đầy đủ các điều khoản và điều kiện về giao dịch điện tử mà MBS áp dụng đối
            với Tài khoản giao dịch chứng khoán tại MBS (được sửa đổi, bổ sung, thay thế theo chính
            sách MBS từng thời kỳ).
          </p>
          <p>
            – Các quyền và nghĩa vụ khác theo thỏa thuận tại Hợp đồng này, Các Văn Kiện Trái Phiếu
            và quy định của pháp luật.
          </p>
          <h4 className="mb-2">ĐIỀU 5: VI PHẠM VÀ BỒI THƯỜNG THIỆT HẠI</h4>
          <p>
            Bất kỳ bên nào vi phạm các nghĩa vụ của mình tại Hợp đồng này phải có trách nhiệm khắc
            phục vi phạm trong vòng 02 ngày làm việc kể từ ngày phát sinh vi phạm. Nếu quá thời hạn
            trên, Bên vi phạm sẽ phải bồi thường toàn bộ thiệt hại thực tế phát sinh từ việc vi phạm
            nghĩa vụ của mình theo Hợp đồng này.
          </p>
          <h4 className="mb-2">ĐIỀU 6: ĐIỀU KHOẢN THI HÀNH</h4>
          <p>
            6.1 Mỗi bên khẳng định rằng: (i) Đã hiểu rõ quyền, nghĩa vụ lợi ích và các rủi ro có thể
            xảy ra của việc giao kết Hợp đồng này và (ii) Việc giao kết, thực hiện Hợp đồng này là
            hoàn toàn tự nguyện, không bị lừa dối, ép buộc và đã được thông qua bởi cấp có thẩm
            quyền của mỗi bên.
          </p>
          <p>
            6.2. Mỗi bên phải giữ bí mật nội dung của Hợp đồng này và chỉ được tiết lộ nội dung của
            Hợp đồng này và/hoặc Các Văn Kiện Trái Phiếu (“Thông Tin Mật”) khi: (i) được bên kia
            chấp thuận trước, (ii) nhằm tuân thủ pháp luật hoặc yêu cầu của cơ quan nhà nước có thẩm
            quyền, (iii) nhằm phục vụ các mục đích kế toán, kiểm toán hoặc thực hiện thủ tục chuyển
            quyền sở hữu các Trái Phiếu hoặc (iv) nhằm phục vụ việc tuân thủ quy định nội bộ và vận
            hành khác của MBS. Quy định này vẫn có hiệu lực trong vòng 3 tháng kể từ ngày MBS chấp
            nhận giao dịch bán Trái Phiếu trên hệ thống của MBS.
          </p>
          <p>6.3. Hợp đồng này được điều chỉnh và giải thích theo pháp luật Việt Nam.</p>
          <p>
            6.4. Trong trường hợp có bất cứ tranh chấp nào phát sinh liên quan đến việc mua bán Trái
            Phiếu theo các quy định của Hợp đồng này, KH và MBS sẽ nỗ lực để tự giải quyết tranh
            chấp thông qua đàm phán thiện chí. Trong trường hợp KH và MBS không giải quyết được
            tranh chấp qua thương lượng, bất kỳ bên nào cũng có thể đưa tranh chấp đó ra tòa án có
            thẩm quyền của Việt Nam để giải quyết.
          </p>
          <p>
            6.5. Hợp đồng này có hiệu lực kể từ thời điểm MBS chấp nhận Đăng Ký Bán Trái Phiếu của
            KH trên hệ thống cho đến khi KH và MBS đã hoàn tất các nghĩa vụ của mình theo Hợp đồng
            hoặcchấm dứt theo quy định của pháp luật (ngoại trừ Điều 5, Điều 6.2, Điều 6.3, Điều 6.4
            và Điều 6.5sẽ tiếp tục duy trì hiệu lực kể cả khi Hợp đồng này chấm dứt).
          </p>
          <p>
            6.6. Mọi sửa đổi, bổ sung Hợp đồng này chỉ có hiệu lực khi KH đề nghị và MBS xác nhận
            trên hệ thống. Các sửa đổi, bổ sung này sẽ là một phần không tách rời của Hợp đồng. Các
            văn bản hoặc thỏa thuận được giao kết giữa KH và MBS là do MBS trực tiếp lập, ban hành
            cho KH liên quan đến đầu tư Trái Phiếu, không phải là thỏa thuận hoặc văn bản được ký,
            ban hành chấp nhận bởi một bên thứ ba nào khác.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Term;
