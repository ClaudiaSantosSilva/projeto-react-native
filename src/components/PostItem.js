import { Text, View, Pressable, TouchableOpacity } from "react-native"
import styled from "styled-components/native"


const Title = styled.Text`
font-size: 20px;
font-weight: bold;
`;

const Subtitle = styled.Text`
font-size:16px;
color:#444;
`;

const Container= styled.View`
padding-horizontal: 12px;
padding-vertical: 6px;
//border-bottom-width: 1px;
//border-bottom-color:#aaa;
`;

export function PostItem({title, subtitle, onPress}){
    return (
    <TouchableOpacity onPress={onPress}>
            
    <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </Container>
    </TouchableOpacity>
    )
}