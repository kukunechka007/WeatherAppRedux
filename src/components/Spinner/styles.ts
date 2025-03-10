import styled from '@emotion/styled';

export const SpinnerEl = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #1f27f5;
  border-radius: 50%; /* Делаем круг */
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;