import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.5em;
  color: #ed1a5d;
  margin: 5px;
`;

export const PrimaryButton = styled.button`
  font-size: 0.75em;
  padding: 12px 8px;
  width: 150px;
  border: none;
  white-space: nowrap;
  color: white;
  background-color: #ed1a5d;
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 0.75em;
  padding: 12px 8px;
  width: 150px;
  border: none;
  white-space: nowrap;
  color: white;
  background-color: black;
  cursor: pointer;
`;

export const Event = styled.article`
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 1em;
  border-radius: 3px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 3px;
  margin: 20px;
  width: 300px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Icon = styled.img`
  float: right;
  padding: 5px;
  cursor: pointer;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexDesktop = styled.div`
display:flex;
padding:5px;
justify-content: space-between;
@media (max-width: 768px) {
  display:block;
}`;

export const CardContent = styled.div`
  padding: 10px;
  height: 180px;
`;

export const Input = styled.input`
  display: block;
  margin: 10px 0;
  padding: 5px;
  width: 100%;
  min-width:260px;
  @media (max-width: 856px) {
    min-width:150px;
}
`;

export const TextArea = styled.textarea`
  display: block;
  margin: 10px 0;
  width: 100%;
`;

export const Close = styled.div`
  padding: 10px;
  cursor: pointer;
`;

export const Form = styled.form`
  margin: 5% auto;
  max-width: 600px;
  @media (max-width: 856px) {
    max-width: 400px;
  }
  @media (max-width: 786px) {
    max-width: 300px;
  }
`;

export const SubmitButton = styled.input`
  font-size: 1em;
  padding: 12px 8px;
  width: 100%;
  border: none;
  white-space: nowrap;
  color: white;
  background-color: #ed1a5d;
  cursor: pointer;
`;

export const Success = styled.div`
  color: green;
  text-align: center;
  padding: 10px;
`;
