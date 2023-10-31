import styled from 'styled-components';

export const LoaderList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 93px;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const LoaderListItem = styled.li`
  width: 180px;
`;

export const LoaderItemImageContainer = styled.div`
  height: 252.85px;
  border-radius: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    transparent 25%,
    #f0f0f0 50%,
    transparent 75%
  );
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
  color: transparent;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

export const LoaderItemTitleContainer = styled.div`
  width: 90px;
  height: 18.4px;
  background-color: red;

  margin-bottom: 5px;

  overflow: hidden;
  background: linear-gradient(
    90deg,
    transparent 25%,
    #f0f0f0 50%,
    transparent 75%
  );
  background-size: 200% 100%;
  animation: shimmer 8s linear infinite;
  color: transparent;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;
export const LoaderItemParagraphContainer = styled.div`
  width: 40px;
  height: 16px;
  background-color: red;

  overflow: hidden;
  background: linear-gradient(
    90deg,
    transparent 25%,
    #f0f0f0 50%,
    transparent 75%
  );
  background-size: 200% 100%;
  animation: shimmer 16s linear infinite;
  color: transparent;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;
