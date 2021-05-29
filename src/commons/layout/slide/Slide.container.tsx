import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';
import { SlideWrapper, SlideImg } from './Slide.styles';
export default function SimpleSlider() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<Slider {...settings}>
			<div>
				<SlideImg src="/slide1.png"></SlideImg>
			</div>
			<div>
				<SlideImg src="/slide2.png"></SlideImg>
			</div>
			<div>
				<SlideImg src="/slide3.png"></SlideImg>
			</div>
		</Slider>
	);
}
