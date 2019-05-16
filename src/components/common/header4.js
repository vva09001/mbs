import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
const header = title => {
  const { t } = useTranslation();
  return (
    <div className="header-wrapper no-shadow fixed-top align-items-center row">
      <div className="col-2 col-sm-1 text-center" />
      <div className="col-8 col-sm-11 text-center">
        <h3 className="uppc">{t(title)}</h3>
      </div>
      <div className="col-2" />
    </div>
  );
};
header.propTypes = {
  title: PropTypes.string
};
export default header;
