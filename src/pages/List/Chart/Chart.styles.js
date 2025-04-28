import styled from "@emotion/styled";
import { shimmerStyle } from "../../../styles/skeletonAnimation"; // ⭐ 스켈레톤 애니메이션 import

export const ChartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
  width: 100%
`;

export const ChartHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ChartTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: 700;
  font-family: Pretendard;
`;

export const ChartButtonWrap = styled.div``;

export const ChartIdol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 42px;
  font-size: 14px;
  color: white;
`;

const ChartIdolBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.17px;
  height: 42px;
`;

export const ChartIdolLeft = styled(ChartIdolBase)``;

export const ChartIdolRight = styled(ChartIdolBase)``;

export const ChartList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;

  @media (min-width: 769px) {
    flex-direction: row;
    & > li {
      width: calc(50% - 8px);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & > li {
      width: 100%;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #ffffff1a;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const RankAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 16px;
  color: white;

  .rank {
    color: #f96d69;
    font-weight: 400;
    font-size: 16px;
    opacity: 0.57;
  }

  .group {
    font-weight: 400;
    font-size: 16px;
    font-family: Pretendard;
  }

  .artist-name {
    font-weight: 500;
    font-size: 16px;
    font-family: Pretendard;
  }
`;

export const Votes = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-family: Pretendard;
`;

export const MoreButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const VoteChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const Overlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.6);
   z-index: 1000;
   display: flex;
   justify-content: center;
   align-items: center;
 `;

// ✨ 스켈레톤 컴포넌트 추가

export const SkeletonListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #ffffff1a;
`;

export const SkeletonProfile = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  ${shimmerStyle};
`;

export const SkeletonRankAndName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 16px;
`;

export const SkeletonName = styled.div`
  width: 100px;
  height: 16px;
  border-radius: 8px;
  ${shimmerStyle};
`;

export const SkeletonVotes = styled.div`
  width: 40px;
  height: 16px;
  border-radius: 8px;
  ${shimmerStyle};
`;
