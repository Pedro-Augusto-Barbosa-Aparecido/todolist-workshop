import styled from "styled-components";

export const TaskContainer = styled.div`
      background-color: ${props => props.theme["gray-500"]};

      padding: 1rem;
      gap: 0.75rem;

      margin-bottom: 0.75rem;

      border-radius: 8px;

      height: 4.5rem;
      max-width: 46rem;

      border: 1px solid ${props => props.theme["gray-400"]};
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      p {
        color: ${props => props.theme["gray-100"]};
      }

      div:first-child {
          display: flex;

          align-items: flex-start;
          justify-content: flex-start;

          gap: 8px;
      }

      button {
          background: transparent;
          border: 0;
          border-radius: 4px;
          color: ${props => props.theme["gray-300"]};
          cursor: pointer;

          display: flex;
          align-items: center;

          padding: 0.3rem;
          margin-top: -0.2rem;

      }

      button:hover {
          cursor: pointer;

          background-color: ${props => props.theme["gray-400"]};
          color: ${props => props.theme["red-500"]};
      }

      .checked {
          color: ${props => props.theme["gray-300"]} !important;
          text-decoration: line-through;

      }

      div > svg {
        color: ${props => props.theme["blue-200"]};

        /* font-size: 16px !important; */

      }

      svg.checkInp {
        color: ${props => props.theme["purple-500"]};
      }

      /* @media (max-width: 768px) {
        div {
          max-width: 46rem;

          p {
              text-overflow: ellipsis;
              overflow: hidden;

              width: 100%;
              /* white-space: nowrap;

              padding: 0;
              margin-top: 0.2rem;

          }
        }
      } */

`
