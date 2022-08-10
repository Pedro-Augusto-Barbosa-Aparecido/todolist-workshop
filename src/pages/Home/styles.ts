import styled from "styled-components";

export const Container = styled.main`
    max-width: 46rem;
    margin: 2rem auto;
    padding: 0 1rem;

    @media (max-width: 768px) {
        html {
            font-size: 87.5%;

        }

        form {
            flex-direction: column;

            justify-content: flex-start;
            align-items: center;

        }

        form input, form button {
            max-width: 46rem;

        }

    }
`

export const Form = styled.form`
    width: 100%;
    max-width: 46rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: -4rem;

    gap: .5rem;

    input {
      width: 100%;
      max-width: 39.875rem;
      height: 4rem;

      border: 1px solid ${props => props.theme["gray-700"]};
      border-radius: 8px;

      background-color: ${props => props.theme["gray-500"]};

      outline: none;
      color: ${props => props.theme["gray-100"]};
      line-height: 1.4;

      padding: 1rem;
    }

    button {
      width: 100%;
      max-width: 7rem;
      height: 4rem;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${props => props.theme["blue-700"]};

      padding: 1rem;

      gap: .5rem;

      line-height: 1.4;

      font-size: 0.875rem;
      font-weight: bold;

      color: ${props => props.theme["white"]};

      border: 0;
      border-radius: 8px;

      text-align: center;

      transition: background-color .25s;
    }

    button:hover {
      background-color: ${props => props.theme["blue-200"]};
      cursor: pointer;
    }

    input:focus {
      border: 1px solid ${props => props.theme["purple-500"]};

    }

`
