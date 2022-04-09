import styled from "styled-components";

const DeadZoneWrapper = styled.section`
  height: 7rem;
  border: 1px solid black;

  ul {
    margin: 1rem 1rem;
    display: flex;
    justify-content: space-between;
    li {
      background-color: aliceblue;
      width: 4rem;
      height: 4rem;
    }
  }

  @media (min-width: 576px) {
    ul {
      li {
        width: 7rem;
        height: 5rem;
      }
    }
  }
`;

const DeadZone = () => {
  return (
    <DeadZoneWrapper>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </DeadZoneWrapper>
  );
};

export default DeadZone;
