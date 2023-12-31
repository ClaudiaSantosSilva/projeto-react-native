import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { Title } from "./Title"
import { Subtitle } from "./Subtitle"

const Container= styled.View`
padding-horizontal: 12px;
padding-vertical: 6px;
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