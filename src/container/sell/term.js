import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'container/layout/layout';

const Term = () => {
  const { t } = useTranslation();
  return (
    <Layout type={1} title="terms_conditions_of_bond_sell">
      <div className="bond-detail">
        <div className="bg-white taj">
          <p>{t('sell_term')}</p>
          <h3 className="mb-3">{t('sell_term_title')}</h3>
          <h4 className="mst mb-2 mb-2">{t('sell_article_1')}</h4>
          <p>
            Khách hàng và CTCP Chứng khoán MB (MBS) thống nhất mua, bán Trái Phiếu theo các quy định
            được nêu tại Các Điều khoản và Điều kiện bán Trái Phiếu sau đây:
          </p>
          <p>
            <b>{t('article_1.2')}</b>
            {t('article_1.2_info')}
          </p>
          <p>
            <b>{t('article_1.3')}</b>
            {t('article_1.3_info')}
          </p>
          <p>
            <b>{t('article_1.4')}</b>
            {t('article_1.4_info')}
          </p>
          <p>
            <b>{t('article_1.5')}</b>
            {t('article_1.5_info')}
          </p>
          <p>
            <b>{t('article_1.6')}</b>
            {t('article_1.6_info')}
          </p>
          <p>
            <b>{t('article_1.7')}</b>
            {t('article_1.7_info')}
          </p>
          <p>
            <b>1.7. Ngày Giao Dịch</b>: Là ngày Khách hàng bán Trái Phiếu.
          </p>
          <p>
            <b>{t('article_1.9')}</b>
            {t('article_1.9_info')}
          </p>
          <p>
            <b>{t('article_1.10')}</b>
            {t('article_1.10_info')}
          </p>
          <p>{t('article_1.10_info_01')}</p>
          <p>{t('article_1.10_info_02')}</p>
          <p>{t('article_1.10_info_03')}</p>
          <p>{t('article_1.10_info_04')}</p>
          <p>
            <b>1.10. Thuế, Phí Giao Dịch</b>: Là thuế, phí Khách hàng phải trả khi thực hiện giao
            dịch mua, bán Trái Phiếu, bao gồm:
          </p>
          <p>
            – Phí khớp lệnh Khách hàng trả cho MBS để chuyển nhượng Trái Phiếu thông qua sở giao
            dịch chứng khoán, áp dụng với các Trái Phiếu niêm yết. Phí khớp lệnh được xác định theo
            quy định/chính sách của sở giao dịch chứng khoán từng thời kỳ;
          </p>
          <p>
            – Phí môi giới Khách hàng trả cho MBS để tìm kiếm đối tác mua Trái Phiếu trong trường
            hợp Khách hàng có nhu cầu bán Trái Phiếu trước ngày đáo hạn của Trái Phiếu. Phí môi giới
            được xác định theo chính sách của MBS từng thời kỳ.
          </p>
          <p>
            – Phí chuyển nhượng Trái Phiếu Khách hàng phải trả cho Đại lý chuyển nhượng (nếu có) để
            chuyển nhượng Trái Phiếu, áp dụng với Trái Phiếu chưa niêm yết. Phí chuyển nhượng được
            xác định theo quy định, chính sách của Đại lý chuyển nhượng Trái Phiếu từng thời kỳ.
          </p>
          <p>
            <b>{t('article_1.15')}</b>
            {t('article_1.15_info')}
          </p>
          <p>
            <b>1.12. Coupon</b>: Là lãi Trái Phiếu (đã trừ thuế thu nhập cá nhân (nếu có)) do Tổ
            Chức Phát Hành thanh toán. Lãi suất coupon và cách tính lãi coupon căn cứ theo quy định
            của Tổ Chức Phát Hành đối với Trái Phiếu.
          </p>
          <p>
            <b>1.13. Giá trị tái đầu tư coupon</b>: là lãi tái đầu tư coupon Khách hàng nhận được,
            tính từ ngày Tổ Chức Phát Hành thanh toán coupon đến ngày Trái Phiếu đáo hạn (với giả
            định KH tiếp tục đầu tư khoản coupon nhận được trong thời gian nắm giữ Trái Phiếu).
          </p>
          <p>
            <b>1.14. Giá trị Khách hàng nhận được cuối kỳ</b>: Là giá trị Khách hàng bán Trái Phiếu
            cho bên nhận chuyển nhượng, hoặc giá trị Tổ Chức Phát Hành Trái Phiếu thanh toán gốc
            Trái Phiếu tại ngày đáo hạn Trái Phiếu, tùy thuộc vào thời hạn Khách hàng nắm giữ Trái
            Phiếu.
          </p>
          <p>
            <b>
              1.15. Tổng dòng tiền từ Trái Phiếu = Giá trị Khách hàng nhận được cuối kỳ + Coupon
              (nếu có) + Giá trị tái đầu tư coupon (nếu có).
            </b>
          </p>
          <p>
            <b>
              1.16. Lãi suất đáo hạn (tính trên thu nhập sau khi đã khấu trừ thuế thu nhập cá nhân
              nếu Khách hàng là cá nhân)
            </b>
            : là lãi suất Khách hàng nhận được nếu giữ Trái Phiếu đến đáo hạn, tính
            theo&nbsp;%/năm/Giá trị đầu tư Trái Phiếu&nbsp;trên cơ sở 1 năm có 365 ngày. Giả định Tổ
            Chức Phát Hành thanh toán đúng hạn, đủ gốc, lãi Trái Phiếu và coupon của các kỳ chưa xác
            định lãi suất được giả định như tại&nbsp;Chi tiết dòng tiền.
          </p>
          <img src="/img/images1.png" alt="logo" className="w-100" />
          <p>{t('article_1.16_info_03')}</p>
          <ul>
            <li>Tổng dòng tiền từ Trái Phiếu được xác định như mục 1.15 Điều 1;</li>
            <li>
              Giá trị đầu tư Trái Phiếu: Là Giá Trị Giao Dịch được xác định tại Đăng Ký Mua Trái
              Phiếu;
            </li>
            <li>
              Thời gian đầu tư: Là thời gian Khách hàng nắm giữ Trái Phiếu, (tính từ (và gồm cả)
              Ngày Giao Dịch đến (nhưng không bao gồm cả) ngày đáo hạn Trái Phiếu.
            </li>
          </ul>
          <p>
            <b>1.17. Tài khoản ViettelPay</b>: Là tài khoản của Khách hàng sử dụng trên ứng dụng
            ViettelPAY như 1 ví điện tử thanh toán
          </p>
          <h4 className="mst mb-2">ĐIỀU 2: QUY ĐỊNH VỀ GIAO DỊCH TRÁI PHIẾU</h4>
          <p>
            <b>2.1. Trái Phiếu giao dịch</b>: Là Trái Phiếu được nêu tại Đăng Ký Bán Trái Phiếu, có
            các đặc điểm được nêu tại Thông Tin Trái Phiếu.
          </p>
          <p>
            <b>2.2. Ngày giao dịch</b>: Là Ngày Giao Dịch được nêu tại Đăng Ký Bán Trái Phiếu.
          </p>
          <p>
            <b>2.3. Khối lượng giao dịch</b>: Là Khối Lượng được nêu tại Đăng Ký Bán Trái Phiếu.
          </p>
          <p>
            <b>2.4. Đơn giá giao dịch</b>: Là Đơn Giá Giao Dịch được nêu tại Đăng Ký Bán Trái Phiếu
          </p>
          <p>
            <b>2.5. Tổng giá trị giao dịch</b>: Là Tổng Giá Trị Giao Dịch được nêu tại Đăng Ký Bán
            Trái Phiếu
          </p>
          <p>
            <b>2.6. Thanh toán</b>: MBS thực hiện thanh toán cho Khách hàng như quy định tại Mục 2.5
            Điều này trước trong Ngày Giao Dịch.
          </p>
          <p>
            <b>2.7. Chuyển nhượng Trái Phiếu</b>: Khi Đăng Ký Bán Trái Phiếu của Khách hàng được MBS
            chấp nhận trên hệ thống, Khách hàng và MBS chấp thuận chuyển nhượng Trái Phiếu với các
            nội dung như được nêu tại Đề nghị chuyển nhượng Trái Phiếu. Việc chuyển nhượng được thực
            hiện ngay trong Ngày Giao Dịch, sau khi MBS đã thanh toán cho Khách hàng như quy định
            tại Mục 2.6 Điều này.
          </p>
          <h4 className="mst mb-2">ĐIỀU 3: HÌNH THÀNH HỢP ĐỒNG</h4>
          <p>
            <b>
              3.1. Thông Tin Trái Phiếu Giao Dịch, Đăng Ký Bán Trái Phiếu, Các Điều Khoản và Điều
              Kiện bán Trái Phiếu
            </b>
            : cùng các tài liệu kèm theo sẽ hợp thành một hợp đồng mua bán Trái Phiếu giữa Khách
            hàng và MBS (“Hợp đồng”). Hợp đồng có hiệu lực kể từ thời điểm MBS chấp nhận Đăng Ký Bán
            Trái Phiếu của Khách hàng trên hệ thống. MBS sẽ (nhưng không phải là nghĩa vụ bắt buộc)
            thông báo lại cho Khách hàng việc chấp nhận này.
          </p>
          <p>
            <b>
              3.3. Hợp đồng&nbsp;được lập và lưu trữ dưới dạng dữ liệu điện tử trên hệ thống của MBS
            </b>
            : và có giá trị như một hợp đồng được ký dưới dạng văn bản.
          </p>
          <h4 className="mst mb-2">ĐIỀU 4: QUYỀN VÀ NGHĨA VỤ CỦA CÁC BÊN</h4>
          <p>
            <b>4.1. Quyền và nghĩa vụ của MBS</b>
          </p>
          <p>
            – MBS cam kết thông tin của MBS nêu tại phần đầu của Hợp đồng này là chính xác, trung
            thực và sẽ sử dụng thông tin này để thực hiện thủ tục nhận chuyển nhượng quyền sở hữu
            Trái Phiếu từ Khách hàng.
          </p>
          <p>
            – Có trách nhiệm thanh toán Tổng Giá Trị Giao Dịch đầy đủ, đúng hạn cho Khách hàng theo
            quy định tại Điều 3 Hợp đồng này.
          </p>
          <p>
            – Xác nhận Khách hàng đặt lệnh bán thành công trên hệ thống (ngoại trừ trường hợp lỗi hệ
            thống tin nhắn/ email do đường truyền).
          </p>
          <h4 className="mst mb-2">{t('article_2')}</h4>
          <p>
            <b>{t('article_2.1')}</b>
            {t('article_2.1_info')}
          </p>
          <p>
            <b>{t('article_2.2')}</b>
            {t('article_2.2_info')}
          </p>
          <p>
            <b>{t('article_2.3')}</b>
            {t('article_2.3_info')}
          </p>
          <p>
            <b>{t('article_2.4')}</b>
            {t('article_2.4_info')}
          </p>
          <p>
            – Khách hàng có trách nhiệm thực hiện các công việc liên quan đến việc chuyển nhượng
            Trái Phiếu cho MBS theo đúng quy định tại Hợp đồng này, Các Văn Kiện Trái Phiếu và quy
            định của pháp luật có liên quan.
          </p>
          <p>
            <b>{t('article_2.6')}</b>
            {t('article_2.6_info')}
          </p>
          <p>
            – Khách hàng cam kết thông tin của Khách hàng cung cấp cho MBS trên hệ thống này là
            chính xác, trung thực và sẽ sử dụng thông tin này để thực hiện thủ tục liên quan đến
            mua, bán Trái Phiếu giữa Khách hàng và MBS.
          </p>
          <h4 className="mst mb-2">{t('article_3')}</h4>
          <p>
            – Khách hàng đồng ý rằng trừ trường hợp có sai sót rõ ràng về mặt số liệu tính toán, số
            liệu do MBS tính toán là số liệu cuối cùng được sử dụng
          </p>
          <p>
            – Khách hàng tuân thủ đầy đủ các điều khoản và điều kiện về giao dịch điện tử mà MBS áp
            dụng đối với Tài khoản giao dịch chứng khoán tại MBS (được sửa đổi, bổ sung, thay thế
            theo chính sách MBS từng thời kỳ).
          </p>
          <h4 className="mst mb-2">{t('article_4')}</h4>
          <p>
            <b>{t('article_4.1')}</b>
          </p>
          <p>{t('article_4.1_info_01')}</p>
          <p>{t('article_4.1_info_02')}</p>
          <p>{t('article_4.1_info_03')}</p>
          <p>{t('article_4.1_info_04')}</p>
          <p>{t('article_4.1_info_05')}</p>
          <p>
            <b>{t('article_4.2')}</b>
          </p>
          <p>{t('article_4.1_info_01')}</p>
          <p>{t('article_4.1_info_02')}</p>
          <p>{t('article_4.1_info_03')}</p>
          <p>{t('article_4.1_info_04')}</p>
          <p>{t('article_4.1_info_05')}</p>
          <p>{t('article_4.2_info_06')}</p>
          <h4 className="mb-2 mst">{t('article_5')}</h4>
          <p>{t('article_info')}</p>
          <h4 className="mb-2 mst">{t('sell_article_6')}</h4>
          <p>
            <b>{t('sell_article_6.1')}</b>
            {t('article_7.1_info_01')}
          </p>
          <p>
            <b>{t('sell_article_6.2')}</b>
            {t('article_7.2_info_02')}
          </p>
          <p>
            <b>{t('sell_article_6.3')}</b>
          </p>
          <p>
            <b>
              6.4. Trong trường hợp có bất cứ tranh chấp nào phát sinh liên quan đến việc mua bán
              Trái Phiếu
            </b>
            : theo các quy định của Hợp đồng này, Khách hàng và MBS sẽ nỗ lực để tự giải quyết tranh
            chấp thông qua đàm phán thiện chí. Trong trường hợp Khách hàng và MBS không giải quyết
            được tranh chấp qua thương lượng, bất kỳ bên nào cũng có thể đưa tranh chấp đó ra tòa án
            có thẩm quyền của Việt Nam để giải quyết.
          </p>
          <p>
            <b>6.5. Hợp đồng này có hiệu lực</b>: kể từ thời điểm MBS chấp nhận Đăng Ký Bán Trái
            Phiếu của Khách hàng trên hệ thống cho đến khi Khách hàng và MBS đã hoàn tất các nghĩa
            vụ của mình theo Hợp đồng hoặcchấm dứt theo quy định của pháp luật (ngoại trừ Điều 5,
            Điều 6.2, Điều 6.3, Điều 6.4 và Điều 6.5sẽ tiếp tục duy trì hiệu lực kể cả khi Hợp đồng
            này chấm dứt).
          </p>
          <p>
            <b>6.6. Mọi sửa đổi, bổ sung Hợp đồng này chỉ có hiệu lực</b>: khi Khách hàng đề nghị và
            MBS xác nhận trên hệ thống. Các sửa đổi, bổ sung này sẽ là một phần không tách rời của
            Hợp đồng. Các văn bản hoặc thỏa thuận được giao kết giữa Khách hàng và MBS là do MBS
            trực tiếp lập, ban hành cho Khách hàng liên quan đến đầu tư Trái Phiếu, không phải là
            thỏa thuận hoặc văn bản được ký, ban hành chấp nhận bởi một bên thứ ba nào khác.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Term;
