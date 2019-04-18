import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import history from 'utils/history';
import Loading from 'components/common/loading';
import Icon from 'components/common/icon';
import { currency } from 'utils/currency';

const Section1 = props => {
  const { t } = useTranslation();
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="section">
      <div className="row">
        <div className="col-12">
          <h3 className="mb-4">
            {props.item.bondCode}
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
              <h6 className="mb-2col">{t('Ngày đáo hạn')}</h6>
              <p className="mb-0">{props.item.maturityDate}</p>
            </div>
            <div className="col-6 text-right">
              <h5 className="mb-2col">{t('Đang còn')}</h5>
              <p className="mb-0">
                <span className="mspot">{currency(props.item.roomBalance)}</span> {t('Trái phiếu')}
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
  action: PropTypes.func
};

const Section3 = props => {
  const { t } = useTranslation();
  if (props.loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">{t('Lãi suất đáo hạn')}</label>
        <div className="col-6 text-right">
          <b>
            <span className="mspot">{currency(props.item.termRate)}%</span>
            <span className="mspot">/{t('năm')}</span>
          </b>
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">{t('Thời gian nắm giữ')}</label>
        <div className="col-6 text-right col-form-label">
          {currency(props.item.numInvestDate)} {t('ngày')}
        </div>
      </div>
      <div className="form-group row align-items-center">
        <label className="col-6 col-form-label">
          {t('Lãi suất đầu tư')}
          <img
            onClick={() => props.showPopup('popup')}
            alt="popup-click"
            src="/img/popup-icon.png"
            className="align-top ml-2 popup-click"
          />
        </label>
        <div className="col-6 text-right">
          <b>
            <span className="mspot">{currency(props.item.reinvestmentRate)}%</span>
            <span className="mspot">/{t('năm')}</span>
          </b>
        </div>
      </div>
    </Fragment>
  );
};

Section3.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool,
  showPopup: PropTypes.func
};

// section 4
const showContent = (items, content, t) => {
  return _.map(content, (item, index) => {
    if (item === 'content') {
      return <td key={index}>{t(items[item])}</td>;
    } else if (item === 'cashNonInvest' || item === 'reinvestmentRate' || item === 'cashInvest') {
      return (
        <td className="tar" key={index}>
          {currency(items[item])}
        </td>
      );
    }
    return <td key={index}>{items[item]}</td>;
  });
};
const Section4 = props => {
  const { t } = useTranslation();
  const { title, sum, label, items, content, onClick, status, refs } = props;
  if (props.loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <div
            onClick={() => onClick(refs)}
            className="p-2 mb-1 bg999 rounded text-white d-flex justify-content-between align-items-center popup-click"
          >
            <span className="d-flex w-100 justify-content-between">
              <span className="w-100">{title}</span>
              <strong className="flex-shrink-1">{currency(sum) + t('VND')}</strong>
            </span>
            <span className="float-right collapse-custom">{status ? '-' : '+'}</span>
          </div>
        </div>
      </div>
      {status && (
        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  {_.map(label, (item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {_.map(items, (res, index) => (
                  <tr key={index}>{showContent(res, content, t)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </Fragment>
  );
};
Section4.propTypes = {
  title: PropTypes.string,
  sum: PropTypes.number,
  onClick: PropTypes.func,
  status: PropTypes.bool,
  refs: PropTypes.string,
  loading: PropTypes.bool,
  label: PropTypes.array,
  content: PropTypes.array,
  items: PropTypes.array
};

export { Section1, Section3, Section4 };
