import React from 'react';
import Icon from './icon';
const footer = () => {
  return (
    <div className="footer-wrapper fixed-bottom">
      <a className="col-3" href="#">
        <Icon name="mua-ban" height="53" />
        Mua bán
      </a>
      <a className="col-3" href="#">
        <Icon name="san-pham" height="53" />
        Sản phẩm
      </a>
      <a className="col-3" href="#">
        <Icon name="danh-muc" height="53" />
        Danh mục
      </a>
      <a className="col-3" href="#">
        <Icon name="mua-ban" height="53" />
        Quản lý
      </a>
    </div>
  );
};
export default footer;