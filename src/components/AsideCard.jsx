import { styled } from "styled-components";
import bgMobile from "../assets/bg-mobile.png";
import cardFront from "../assets/card-front.png";
import cardBack from "../assets/card-back.png";
import cardLogo from "../assets/card-logo.svg";

const AsideCard = () => {
  return (
    <Aside>
      <main>
        <Back>
          <p>000</p>
        </Back>
        <Front>
          <img src={cardLogo} alt="card logo" />
          <div>
            <p>0000 0000 0000 0000</p>
            <article>
              <h3>jane appleseed</h3>
              <h5>00/00</h5>
            </article>
          </div>
        </Front>
      </main>
    </Aside>
  );
};

export default AsideCard;

const Aside = styled.aside`
  display: flex;
  justify-content: center;
  main {
    position: relative;
    max-width: 55rem;
    width: 100%;
  }
  h3,
  h5 {
    font-weight: 500;
    font-size: 1.4rem;
  }
  color: white;
  background: url(${bgMobile}) no-repeat;
  background-size: 100%;
  width: 100%;
  height: 24rem;
  section {
    max-width: 34.05rem;
    width: 100%;
    min-width: 33.3rem;
  }
`;
const Front = styled.section`
  position: absolute;
  top: 18rem;
  left: 2%;
  background: url(${cardFront}) no-repeat center;
  border-radius: 1rem;
  padding: 2rem;
  img {
    width: 6.3rem;
    margin-bottom: 4.8rem;
  }
  article {
    display: flex;
    justify-content: space-between;
    margin-top: 2.2rem;
  }
  p {
    font-size: 1.8rem;
    letter-spacing: 0.4rem;
  }
`;
const Back = styled.section`
  position: absolute;
  top: 7rem;
  right: 2%;
  background: url(${cardBack}) no-repeat;
  background-size: 100%;
  height: 20.85rem;
  p {
    font-size: 2rem;
    position: absolute;
    right: 4.4rem;
    top: 7.9rem;
  }
`;
