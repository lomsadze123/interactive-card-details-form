import { styled } from "styled-components";

const FormComponent = () => {
  return (
    <Form>
      <div>
        <label htmlFor="">Cardholder Name</label> <br />
        <input type="text" placeholder="e.g. Jane Appleseed" />
      </div>
      <div>
        <label htmlFor="">Card Number</label> <br />
        <input type="number" placeholder="e.g. 1234 5678 9123 0000" />
      </div>

      <div>
        <div className="date">
          <div className="small">
            <label htmlFor="mm">Exp. Date (MM/YY)</label> <br />
            <div>
              <input type="number" id="mm" placeholder="MM" />
              <input type="number" placeholder="YY" />
            </div>
          </div>
          <div>
            <label htmlFor="cvc">CVC</label> <br />
            <input type="number" id="cvc" placeholder="e.g 123" />
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </Form>
  );
};

export default FormComponent;

const Form = styled.form`
  padding: 0 3.2rem;
  .date {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }
  label {
    font-size: 1.5rem;
    color: hsl(278, 68%, 11%);
    font-weight: 500;
  }
  input {
    width: 100%;
    padding: 1.3rem;
    border: 0.1rem solid hsl(279, 6%, 55%);
    border-radius: 0.7rem;
    margin: 1.2rem 0;
    outline: 0;
  }
  input::placeholder {
    font-weight: 500;
    font-size: 1.4rem;
    opacity: 0.7;
    letter-spacing: 0.02rem;
  }
  .small input {
    max-width: 16rem;
    width: 50%;
  }
  .small div {
    display: flex;
    gap: 1rem;
  }
  div:last-child {
    width: 100%;
  }
  button {
    width: 100%;
    background-color: hsl(278, 68%, 11%);
    padding: 1.5rem 0;
    color: white;
    border: 0;
    border-radius: 0.6rem;
    font-size: 1.8rem;
    margin-top: 2.6rem;
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  @media (min-width: 768px) {
    padding: 0 1.5rem 0 0;
    width: 70%;
    max-width: 50rem;

    input:focus {
      border: 0.1rem solid #854dff;
    }
    button:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;
