import styled from "styled-components/native"
import { ActivityIndicator } from "react-native";

const ButtonContainer = styled.TouchableOpacity`
  background-color: #0984e3;
  border-radius: 8px;
  padding: 10px;
  width: 160px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size:16px;
  text-align: center;
  font-weight: bold;
`;

//const Spinner = styled.ActivityIndicator`
  //color: white;
  //font-size: 16px;
  //`;


export function Button ({children, onPress, style={}, isLoading=false }) {
    return ( 
    <ButtonContainer onPress={onPress} style={style} disabled={isLoading}>
      {isLoading && <ActivityIndicator size={24} color="white" />}
        {!isLoading && <ButtonText>{children}</ButtonText>}
    </ButtonContainer>
    )
}