import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { Button } from 'react-bootstrap';
import CigarImage1 from '../../assets/images/slider_cigar_1.jpg';
import CigarImage2 from '../../assets/images/slider_cigar_2.jpg';
import CigarImage3 from '../../assets/images/slider_cigar_3.jpg';

const HomeSlider = () => {
  return (
    <div className="home-slider">
      <AwesomeSlider animation="openAnimation">
        <div className="call-to-action" data-src={CigarImage1}>
          <h2>Selected Aroma</h2>
          <Button>VIEW MORE</Button>
        </div>
        <div data-src={CigarImage2}>
          <div className="call-to-action" data-src={CigarImage1}>
            <h2>Selected Aroma</h2>
            <Button>VIEW MORE</Button>
          </div>
        </div>
        <div data-src={CigarImage3}>
          <div className="call-to-action" data-src={CigarImage1}>
            <h2>Selected Aroma</h2>
            <Button>VIEW MORE</Button>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  )
};

export default HomeSlider;
