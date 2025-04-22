import styled from "@emotion/styled";

// 전체 컨테이너
export const ChartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
`;

// 상단: 제목 + 버튼
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

// 성별 탭
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

export const ChartIdolLeft = styled(ChartIdolBase)`
  background-color: #ffffff1a;
  border-bottom: 1px solid #ffffff;
`;

export const ChartIdolRight = styled(ChartIdolBase)`
  color: #828282;
`;

// 아이돌 리스트 영역
export const ChartList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  margin-top: 24px;
`;

// 각 열
export const ChartColumn = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// 리스트 아이템
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom:8px;
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
     opacity :0.57;
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

// 더보기 버튼
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
