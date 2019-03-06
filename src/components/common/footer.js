import React from 'react';
const footer = () => {
  return (
    <div className="footer-wrapper fixed-bottom">
      <a className="col-3" href="#">
        <img alt="mua-ban" src="/img/mua-ban.png" />
        Mua bán
      </a>
      <a className="col-3" href="#">
        <img alt="san-pham" src="/img/san-pham.png" />
        Sản phẩm
      </a>
      <a className="col-3" href="#">
        <img alt="danh-muc" src="/img/danh-muc.png" />
        Danh mục
      </a>
      <a className="col-3" href="#">
        <img alt="quan-ly" src="/img/quan-ly.png" />
        Quản lý
      </a>
    </div>
  );
};
export default footer;
