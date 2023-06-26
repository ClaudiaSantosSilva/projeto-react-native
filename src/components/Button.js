import styled from "styled-components/native"

const ButtonContainer = styled.TouchableOpacity`
  background-color: #0984e3;
  border-radius: 8px;
  padding: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
`;

export function Button ({children, onPress}){
    return <ButtonContainer onPress={onPress}>
        <ButtonText>{children}</ButtonText>
    </ButtonContainer>
}