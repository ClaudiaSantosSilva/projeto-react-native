import { View, Text, TextInput, Pressable } from "react-native";
import { Title } from "../components/Title";
import styled from "styled-components/native";

const Container= styled.View`
margin: 14px;
gap: 16px;
`;

const Button = styled.TouchableOpacity`
  background-color: #0984e3;
  border-radius: 8px;
  padding: 8px;
`;

const TextButton= styled.Text`
color: white;
text-align: center;
`;

export function CreatePostScreen() {
  return( 
    <Container>
      <TextInput placeholder="Digite o título" />
      <TextInput placeholder= "Digite o subtitulo" />
      <TextInput placeholder = "Digite o conteúdo" />
      <Button>
        <TextButton>Enviar</TextButton>
      </Button>
    </Container>
  );
}
