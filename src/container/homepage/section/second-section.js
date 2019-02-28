import React from 'react';

const List = props => {
  return (
    <div className="col">
      <h4>{props.date}</h4>
      <p>{props.description}</p>
    </div>
  );
};

const SecondSection = props => {
  return (
    <section id="second">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>News</h3>
          </div>
        </div>
        <div className="row new-list">
          <List
            date={'1 Oct 2018.'}
            description={
              'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type <a href="#">fullnode.montex.com</a>'
            }
          />
          <List
            date={'1 Oct 2018.'}
            description={
              'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type <a href="#">fullnode.montex.com</a>'
            }
          />
          <List
            date={'1 Oct 2018.'}
            description={
              'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type <a href="#">fullnode.montex.com</a>'
            }
          />
          <List
            date={'1 Oct 2018.'}
            description={
              'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type <a href="#">fullnode.montex.com</a>'
            }
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
