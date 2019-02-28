import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class SliderItem extends Component {
  render() {
    return (
      <Carousel showStatus={false} showArrows={false} showThumbs={false} swipeable={true}>
        <div className="slider-item">
          <h1>Buy masternode income 1</h1>
          <h2>Earn money anytime, anywhere!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages
          </p>
          <img src="img/slider.png" />
          <button type="button" className="btn btn-primary">
            Read more
          </button>
        </div>
        <div className="slider-item">
          <h1>Buy masternode income 2</h1>
          <h2>Earn money anytime, anywhere!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages
          </p>
          <img src="img/slider.png" />
          <button type="button" className="btn btn-primary">
            Read more
          </button>
        </div>
      </Carousel>
    );
  }
}

export default SliderItem;
