import { View, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { TextField } from "../components/TextField";
import styled from "styled-components/native";
import Toast from "react-native-root-toast";
import { Formik } from "formik";
import { axiosApi } from "../axiosApi";
import screens from "../screens.json";
import { postSchema } from "../postSchema";

const texts = {
  titlePlaceholder: "Digite o título",
  subtitlePlaceholder: "Digite o subtítulo",
  contentPlaceholder: "Digite o conteúdo",
  submitSuccess: "Post criado com sucesso!",
};

const initialValues={
    title:"",
    subtitle:"",
    content:"",
}

const styles = StyleSheet.create({
  containerButton: {
    display: "flex",
    alignItems: "center",
  },
  buttonStyle: {
    width: 220,
  },
  errorMessage: {
    color: "#f53b57",
    marginLeft: 16,
  },
});

const ErrorMessage = styled.Text`
  color: "#f53b57";
`;

export function AddSimplePostScreen({ navigation, route }) {
   
  async function onSubmit({title, subtitle, content}, {resetForm}) {
    const response = await axiosApi.post("/notepads", {
      title,
      subtitle,
      content,
    });

    Toast.show(texts.submitSuccess);
    resetForm(initialValues);
    navigation.navigate(screens.listPosts);
    }

  return (
    <Formik
      validationSchema={postSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <Container>
          <TextField
            value={values.title}
            placeholder={texts.titlePlaceholder}
            onChangeText={handleChange("title")}
            onBlur={handleBlur("title")}
          />
          {errors.title && (
            <ErrorMessage style={styles.errorMessage}>
              {errors.title.toString()}
            </ErrorMessage>
          )}
          <TextField
            value={values.subtitle}
            placeholder={texts.subtitlePlaceholder}
            onChangeText={handleChange("subtitle")}
            onBlur={handleBlur("subtitle")}
          />
          {errors.subtitle && (
            <ErrorMessage style={styles.errorMessage}>
              {errors.subtitle.toString()}
            </ErrorMessage>
          )}
          <TextField
            value={values.content}
            placeholder={texts.contentPlaceholder}
            multiline
            numberOfLines={4}
            onChangeText={handleChange("content")}
            onBlur={handleBlur("content")}
          />
          {errors.content && (
            <ErrorMessage style={styles.errorMessage}>
              {errors.content.toString()}
            </ErrorMessage>
          )}
          <View style={styles.containerButton}>
            <Button
              style={styles.buttonStyle}
              onPress={handleSubmit}
            >
              Enviar
            </Button>
          </View>
        </Container>
      )}
    </Formik>
  );
}

