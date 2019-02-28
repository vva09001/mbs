import React from 'react';

const List = props => {
  return (
    <div className="col">
      <h3>{props.number}</h3>
      <div>
        <h4>{props.name}</h4>
        <h5>{props.description}</h5>
      </div>
    </div>
  );
};

const FirstSection = (props) => {
  return (
    <section id="first">
      <div className="container-fluid">
        <div className="row">
          <List number={1843} name={'Co-owners'} description={'Investing on montex'} />
          <List number={843} name={'Co-owners'} description={'Investing on montex'} />
          <List number={843} name={'Co-owners'} description={'Investing on montex'} />
          <List number={843} name={'Co-owners'} description={'Investing on montex'} />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
