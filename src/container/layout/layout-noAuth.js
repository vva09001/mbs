import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components: header
import Header from 'components/common/header';
import Header1 from 'components/common/header1';
import Header2 from 'components/common/header2';
import Header3 from 'components/common/header3';
import Popup from 'components/common/popup';
import history from 'utils/history';
import PopupDone from 'components/common/popup-done';
import Footer from 'components/common/footer';
// actions
import errorActions from 'store/error/actions';

// components: First
const header = props => {
  switch (props.type) {
    case 1:
      return <Header1 title={props.title} />;
    case 2:
      return <Header2 title={props.title} />;
    case 3:
      return <Header3 title={props.title} />;
    default:
      return <Header title={props.title} />;
  }
};

header.propTypes = {
  type: PropTypes.number,
  title: PropTypes.string
};
const Alert = (message, toggle) => (
  <Popup showPopup={() => toggle()}>
    <p>{message}</p>
  </Popup>
);
const Layout = props => {
  return (
    <Fragment>
      {props.done.status && (
        <PopupDone
          showClosePopup={() => {
            props.clear();
            history.push({ pathname: '/buy/' });
          }}
          showViewPopup={() => {
            props.clear();
            history.push({ pathname: '/user/' });
          }}
        >
          <span>
            <i>{props.done.message}</i>
          </span>
        </PopupDone>
      )}
      {props.error.status && Alert(props.error.message, props.clear)}
      {header(props)}
      <div className="container-fluid vh-100 overflow-hidden">{props.children}</div>
      <Footer active={props.active} />
    </Fragment>
  );
};

Layout.propTypes = {
  type: PropTypes.number,
  title: PropTypes.string,
  active: PropTypes.string,
  children: PropTypes.node,
  done: PropTypes.object,
  error: PropTypes.object,
  clear: PropTypes.func
};

const mapStateToProps = state => {
  return {
    error: state.error.error,
    done: state.error.done
  };
};

const mapDispatchToProps = {
  clear: errorActions.clearError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
