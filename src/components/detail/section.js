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
          <h3 className="mb-4 mt-2">
            {props.item.bondCode}
            <span
              className="link popup-click"
              onClick={() => {
                history.push({ pathname: '/buy/info/' });
              }}
            >
              <Icon name="arrow" width="18" height="24" />
            </span>
          </h3>
          <div className="row mb-3">
            <div className="col-7 no-pading-right">
              <span className="c">{t('Ngày đáo hạn Trái Phiếu')}</span>
            </div>
            <div className="col-5 text-right no-pading-left">
              <p className="mb-0">{props.item.maturityDate}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-5 no-pading-right">
              <span className="c">{t('Hạn mức')}</span>
            </div>
            <div className="col-7 text-right no-pading-left">
              <span className="xmbs c text-bold">
                {currency(props.item.roomBalance)} {t('Trái Phiếu')}
              </span>
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
      <div className=" row align-items-center pading-top">
        <label className="col-6 c">{t('Lợi suất đáo hạn')}</label>
        <div className="col-6 text-right">
          <b>
            <span className="xmbs">{currency(props.item.termRate)}%</span>
            <span className="xmbs">/{t('năm')}</span>
          </b>
        </div>
      </div>
      <div className=" row align-items-center">
        <label className="col-6 c">{t('Ngày đáo hạn')}</label>
        <div className="col-6 text-right">{props.item.maturityDate}</div>
      </div>
      <div className=" row align-items-center">
        <label className="col-6 c">{t('Thời gian nắm giữ')}</label>
        <div className="col-6 text-right c">
          {currency(props.item.numInvestDate)} {t('ngày')}
        </div>
      </div>
      <div className=" row align-items-center">
        <label className="col-6 c">
          {t('Lợi suất đã tái đầu tư')}
          <img
            onClick={() => props.showPopup('popup')}
            alt="popup-click"
            src="/img/ic_info_16x16.svg"
            className="align-top ml-2 popup-click"
          />
        </label>
        <div className="col-6 text-right">
          <b>
            <span className="xmbs">{currency(props.item.termInvest)}%</span>
            <span className="xmbs">/{t('năm')}</span>
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
      return (
        <td className="tal" key={index}>
          {t(items[item])}
        </td>
      );
    } else if (item === 'cashNonInvest' || item === 'reinvestmentRate' || item === 'cashInvest') {
      return (
        <td className="tar" key={index}>
          {currency(items[item])}
        </td>
      );
    }
    return (
      <td className="tac" key={index}>
        {items[item]}
      </td>
    );
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
            className="p-2 bg999 text-white d-flex justify-content-between align-items-center"
          >
            <div className="d-flex justify-content-between">{title}</div>
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
                    <td key={index} className={item.align}>
                      {item.text}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {_.map(items, (res, index) => (
                  <tr key={index}>{showContent(res, content, t)}</tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2" className="text-primary">
                    <strong>{t('Tổng dòng tiền từ Trái Phiếu')}</strong>
                  </td>
                  <td>
                    <h5 className="text-info tar">{currency(sum)}</h5>
                  </td>
                </tr>
              </tfoot>
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
const Section5 = props => {
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
            className="p-2 bg999 text-white d-flex justify-content-between align-items-center"
          >
            <div className="d-flex justify-content-between">{title}</div>
            <span className="float-right collapse-custom">{status ? '-' : '+'}</span>
          </div>
        </div>
      </div>
      {status && (
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-responsive">
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
              <tfoot>
                <tr>
                  <td colSpan="4" className="text-primary white-bg">
                    <i>
                      {t('Lãi suất tái đầu tư')} :{' '}
                      {items.length > 0 ? items[0].reinvestmentRate : 0}
                      {t('%/năm')}
                    </i>
                  </td>
                </tr>
              </tfoot>
              <tfoot>
                <tr>
                  <td colSpan="3" className="text-primary">
                    <strong>{t('Tổng dòng tiền từ Trái Phiếu')}</strong>
                  </td>
                  <td>
                    <h5 className="text-info tar">{currency(sum)}</h5>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </Fragment>
  );
};
Section5.propTypes = {
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

export { Section1, Section3, Section4, Section5 };
