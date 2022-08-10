import styled from "styled-components";

export const ListContainer = styled.section`
      margin-top: 5rem;

      gap: 1.5rem;

      header:first-child {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-bottom: 1.5rem;

            div {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;

                  gap: 1.25rem;
                  
                  p:first-child {
                        font-weight: bold;
                        color: ${props => props.theme["blue-200"]};

                        font-size: .875rem;

                        line-height: 17px;
                  }
            
            }
      }

`

export const List = styled.section`
      height: 15.25rem;

      max-height: 15.25rem;

      border-top: 1px solid ${props => props.theme["gray-400"]};
      border-radius: 8px;

      max-width: 46rem;

      gap: 1rem;

      display: flex;
      flex-direction: column;

      justify-content: center;
      align-items: center;

      img {
            width: 3.5rem;
            height: 3.5rem;

            opacity: .5;

      }

      p {
            display: flex;
            flex-direction: column;

            text-align: center;

            justify-content: center;
            align-items: center;

            line-height: 1.4;
            font-size: 1rem;

      }
`
