import styled from '@emotion/styled';
import { IDOLS } from '../mocks/idols';
import { DONATIONS } from '../mocks/donations';

const StyledTest = styled.div`
  margin: auto;
  color: var(--white-F7F7F8);
  padding-block: 100px;

  .mainGrid {
    border: 1px solid var(--orange-F96D69);
    padding: 30px;
    border-radius: 10px;
  }
`;

const TestComponents = () => {
  return <StyledTest>
    <div className='mainGrid'>
      <h1>아이돌 데이터</h1>
      {IDOLS.map((idol) => (
        <div key={idol.idol.id}>
          <p>이름: {idol.idol.name}</p>
          <p>그룹: {idol.idol.group}</p>
          <p>총 투표수: {idol.idol.totalVotes}</p>
        </div>
      ))}
      <h1>후원 데이터</h1>
      {DONATIONS.map((donation) => (
        <div key={donation.id}>
          <p>제목: {donation.title}</p>
          <p>장소: {donation.subtitle}</p>
          <p>목표 금액: {donation.targetDonation}</p>
          <p>현재 금액: {donation.receivedDonations}</p>
        </div>
      ))}
    </div>
  </StyledTest>;
};

export default TestComponents;
