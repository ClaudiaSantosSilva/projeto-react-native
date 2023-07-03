import * as yup from "yup";

export const postSchema = yup.object().shape({
  title: yup
    .string()
    .min(4, "O título precisa ter ao menos 4 caracteres")
    .max(20, "O título precisa ter no máximo 20 caracteres")
    .required("O campo título precisa ser preenchido"),
  subtitle: yup
    .string()
    .min(8, "O subtítulo precisa ter ao menos 8 caracteres")
    .max(32, "O subtítulo precisa ter no máximo 32 caracteres")
    .required("O campo subtítulo precisa ser preenchido"),
  content: yup
    .string()
    .min(12, "O conteúdo precisa ter ao menos 12 caracteres")
    .max(256, "O conteúdo precisa ter no máximo 256 caracteres")
    .required("O campo conteúdo precisa ser preenchido"),
});