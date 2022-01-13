import styled from 'styled-components';
// import img from '../../assets/img/bg.jpg';

export const Wrapper = styled.div`
	background-image: url("/img/bg.jpg");
	width: 100%;
	min-height: 65vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const TopSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h2 {
		padding: 0px;
		margin: -15px;
	}

	h1 {
		padding: 0px;
		margin: 0px;
		font-size: 100px;
	}
`;

export const BotSection = styled.div`
	.border-notfound {
		width: 100%;
		border-bottom: solid 3px gray;
	}
`;

export default function Style () {
	return null