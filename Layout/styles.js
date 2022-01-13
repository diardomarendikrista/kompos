import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1200px;
	margin: auto;
	padding-left: 20px;
	padding-right: 20px;

	@media (max-width: 700px) {
		padding-left: 10px;
		padding-right: 10px;
	}
`;

export const FullWrapper = styled.div`
	margin: auto;
`;
