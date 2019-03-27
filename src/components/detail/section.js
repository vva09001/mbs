import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import history from '../../utils/history';
import Loading from '../common/loading';
import Icon from '../common/icon';

const Section1 = props => {
  const { t } = props
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="section">
      <div className="row">
        <div className="col-12">
          <h3 className="mb-4">
            {props.item.bondName}
            <span className="link">
              <a
                onClick={() => {
                  history.push({ pathname: '/buy/info/' });
                }}
              >
                <Icon name="arrow" width="18" height="24" />
              </a>
            </span>
          </h3>
          <div className="row">
            <div className="col-6">
              <h4 className="mb-2">{t('Ngày đáo hạn')}</h4>
              <p className="mb-0 text-primary">{props.item.maturityDate}</p>
            </div>
            <div className="col-6 text-right">
              <h4 className="mb-2">{t('Hạn mức')}</h4>
              <p className="mb-0 text-primary">
                <span>{props.item.roomBalance}</span> {t('trái phiếu')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Section1.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool,
  action: PropTypes.func,
  t: PropTypes.func
};

const Section3 = props => {
  if (props.loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">Lãi suất đáo hạn</label>
        <div className="col-6 text-right col-form-label">
          <span>{props.item.termRate}</span>
          <small>%/năm</small>
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">Thời gian nắm giữ</label>
        <div className="col-6 text-right col-form-label">
          <small>{props.item.numInvestDate} ngày</small>
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">
          Lãi suất đầu tư
          <img
            onClick={() => props.showPopup('popup')}
            alt="popup-click"
            src="/img/popup-icon.png"
            className="align-top ml-2 popup-click"
          />
        </label>
        <div className="col-6 text-right col-form-label">
          <span>{props.item.reinvestmentRate}</span>
          <small>%/năm</small>
        </div>
      </div>
    </Fragment>
  );
};

Section3.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool,
  showPopup: PropTypes.func,
  t: PropTypes.func
};

const Section4 = props => {
  const { title, onClick, status, refs } = props;
  if (props.loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <div className="p-2 mb-1 bg-primary rounded text-white d-flex justify-content-between align-items-center">
            <span>
              {title} <strong>217,377,499 VND</strong>
            </span>
            <span onClick={() => onClick(refs)} className="float-right collapse-custom">
              {status ? '-' : '+'}
            </span>
          </div>
        </div>
      </div>
      {status && (
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">{props.children}</table>
          </div>
        </div>
      )}
    </Fragment>
  );
};
Section4.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  status: PropTypes.bool,
  refs: PropTypes.string,
  loading: PropTypes.bool,
  item: PropTypes.array,
  t: PropTypes.func
};
export { Section1, Section3, Section4 };
