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
            <input type="number" id="mm" />
            <input type="number" />
          </div>
          <div>
            <label htmlFor="cvc">CVC</label> <br />
            <input type="number" id="cvc" />
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </Form>
  );
};

export default FormComponent;

const Form = styled.form`
  .date {
    display: flex;
    align-items: center;
    width: 100%;
  }
  input {
    width: 100%;
  }
  .small input {
    max-width: 16rem;
    width: 50%;
  }
  div:last-child {
    width: 100%;
  }
  button {
    width: 100%;
  }
`;
