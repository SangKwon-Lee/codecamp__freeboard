import {
	SlideWrapper,
	SlideImg,
	SlideArrowWrapper,
	LeftArrow,
	RightArrow,
} from './Slide.styles';

export default function SlideUI() {
	return (
		<SlideWrapper>
			<SlideArrowWrapper>
				<LeftArrow src="./leftArrow.png"></LeftArrow>
				<RightArrow src="./rightArrow.png"></RightArrow>
			</SlideArrowWrapper>
			<SlideImg src="./slide1.png"></SlideImg>
		</SlideWrapper>
	);
}
