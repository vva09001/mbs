import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTranslation } from 'react-i18next';
import Layout from 'container/layout/layout';
import Card from 'components/buy/card';
import Loading from 'components/common/loading';
import bondsActions from 'store/bonds/actions';
import buyActions from 'store/buy/actions';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      picked: 0
    };
  }
  componentDidMount() {
    this.props.bondsFetch({
      order: 0,
      num: 40,
      page: 1
    });
  }
  _fetchDetail = params => {
    this.props.bondsDetail(params);
    this.props.buyFetch(params);
  };
  _onDetail = code => {
    this.props.bondsDetail({
      code: code
    });
  };
  _bondsFetch = params => {
    this.setState(
      {
        picked: params.order
      },
      () => {
        this.props.bondsFetch(params);
      }
    );
  };
  _toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  _showList = () => {
    return _.map(this.props.bonds, item => (
      <Card
        onDetail={this._onDetail}
        fetchDetail={this._fetchDetail}
        item={item}
        key={item.bondCode}
      />
    ));
  };
  render() {
    const { t } = this.props;
    return (
      <Layout
        toggle={this.state.toggle}
        onClick={this._bondsFetch}
        onToggle={this._toggle}
        filterPicked={this.state.picked}
        title="Sản phẩm"
        active="/buy/"
      >
        {this.props.loading ? <Loading /> : this._showList()}
        {this.props.bonds === null ||
          (this.props.bonds.length === 0 && (
            <div className="text-center wapper">
              {t('Không có Trái phiếu nào')}
              <div className="icon-noProduct">
                <img src="/img/iconfinder_icon.png" alt="logo" />
              </div>
            </div>
          ))}
      </Layout>
    );
  }
}

List.propTypes = {
  bonds: PropTypes.array,
  loading: PropTypes.bool,
  bondsFetch: PropTypes.func,
  profile: PropTypes.object,
  buyFetch: PropTypes.func,
  bondsDetail: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    bonds: state.Bonds.list,
    profile: state.Account.profile,
    loading: state.Bonds.loading
  };
};

const mapDispatchToProps = {
  bondsDetail: bondsActions.detail,
  buyFetch: buyActions.getBuy,
  bondsFetch: bondsActions.list
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(List));
