import styled from 'styled-components'


export const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  background-color: #fff;
  padding: 0.75rem 0 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #8492a6;
  transition: 0.2s;
  box-shadow: none;
  border: 1px solid #e0e6ed;
  border-radius: 0.25rem;
  font-family: 'Inter', sans-serif;


  &:focus {
    outline: 0;
    border-color: #ef8354;
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  }
`;

export const Button = styled.button`
  padding: 8px 20px;
  border-radius: 4px;
  background-color: #ef8354;
  border: none;
  color: #ffffff;
  font-size: 16px;
  box-shadow: 0 2px 0 rgba(0,0,0,.045);
  height: 40px;
  font-weight: 600;
`;

export const Container = styled.div`
    width: 90%;
    margin: auto;
    justify-content: left;
    margin-bottom: 20px;
    display: flex;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #e0e6ed;
  font-family: 'Inter', sans-serif;

  border-radius: 5px;
  padding: 0.5rem;
  transition: 0.2s;

  &:focus {
    outline: 0;
    border-color: #ef8354;
    box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
  }
  `

  export const MetaContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
`;
