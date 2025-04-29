import styled from "@emotion/styled";

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  height: 540px;
  background-color:#02000e;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  width: 100%;
  padding:0 8px;


`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const ProfileWrapper = styled.div`
  width: 450px;
  height: 90%;
  border: 1px solid #e36b6b;
  background-color: #0b0b13;
  border-radius: 15px;
`;

export const ProfileHeader = styled.div`
  width: 100%;
  height: 120px;
  padding:40px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProfileName = styled.div`
  font-size: 45px;
  width: 100%;
  height: 50px;
  font-weight: 700;
  color: #e59fa0;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

export const GroupLogo = styled.img`
  width: 100px;
  height: auto;
`;

export const SubInfo = styled.div`
  font-size: 16px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const EnglishName = styled.span`
  color: #e59fa0;
  font-weight: 600;
  font-size: 20px;
`;

export const Separator = styled.span`
  color: #e59fa0;
`;

export const Role = styled.span`
  color: #aaa;
  font-weight: 400;
  font-size: 20px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  gap:12px;
  padding-top:20px;
  
`;

export const CircleContainer = styled.div`
  width :180px;
 `;

export const ProfileDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  row-gap: 8px;
  column-gap:8px;
  color: #e59fa0;
  font-size: 16px;
  
`;

export const DetailLabel = styled.div`
  font-weight: 600;
`;

export const DetailValue = styled.div`
  color: #e0e0e0;
`;

export const VoteSection = styled.div`
  width:90%;
  border-top: 1px solid #e36b6b;
  margin: 28px auto 0;
  padding: 16px 20px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VoteLabel = styled.span`
  color: #e59fa0;
  font-size: 20px;
  font-weight: 700;

`;

export const VoteCount = styled.span`
  color: #f3f3f3;
  font-size: 24px;
  font-weight: 700;
`;

export const StyledVoteButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
    color:white;
`;

export const Logo = styled.div`
  width:250px;
  display: flex;
  gap: 4px;
  padding-left: 15px;
  margin-top:10px;


  img {
    width: 120px;
    height: 80px;
    object-fit: contain;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  img.close{
    width: 24px;
    height: 24px;
  }
    img.back{
    width: 24px;
    height: 24px;
    
    }
    @media (max-width: 425px) {
    left: 12px;
    top:40px;
  }
`;
