import styled from "styled-components";
const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Game Colletion</h1>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: 3.5rem;
  background-color: royalblue;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 1rem;
  }
`;
