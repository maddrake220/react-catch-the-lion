import styled from "styled-components";
import CatchTheLion from "./CatchTheLion";
import Header from "./Header";

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <CatchTheLion />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div``;
