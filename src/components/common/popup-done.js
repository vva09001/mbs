import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
const popup = props => {
  const { t } = useTranslation();
  return (
    <div className="popup">
      <div className="popup-wrapper rounded bg-white position-relative">
        <div className="popup-header mb-2 text-center">{t('THÔNG BÁO')}</div>
        <div className="popup-body mb-2 text-center">{props.children}</div>
        <div className="popup-footer text-center">
          <button type="button" onClick={props.showClosePopup} className="mclose">
            {t('ĐÓNG')}
          </button>
          <button type="button" onClick={props.showViewPopup} className="mclose">
            {t('XEM')}
          </button>
        </div>
      </div>
    </div>
  );
};
popup.propTypes = {
  showClosePopup: PropTypes.func,
  showViewPopup: PropTypes.func,
  children: PropTypes.node
};
export default popup;
