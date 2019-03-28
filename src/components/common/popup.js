import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
const popup = props => {
  const { t } = useTranslation();
  return (
    <div className="popup">
      <div className="popup-wrapper rounded bg-white position-relative">
        <div className="popup-header mb-2 text-center">
          <img src="/img/popup-title.png" alt="popup-title" />
        </div>
        <div className="popup-body mb-2 p-4 border">{props.children}</div>
        <div className="popup-footer text-center">
          <button
            type="button"
            onClick={props.showPopup}
            className="btn btn-primary rounded-bottom border-0 btn-lg btn-block "
          >
            {t('ĐÓNG')}
          </button>
        </div>
      </div>
    </div>
  );
};
popup.propTypes = {
  showPopup: PropTypes.func
};
export default popup;
