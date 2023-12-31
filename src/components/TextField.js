import styled from "styled-components/native"

export const TextField = styled.TextInput`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${(props) => (props.isFocused ? "#0984e3" : "#7f8c8d")};
`;
