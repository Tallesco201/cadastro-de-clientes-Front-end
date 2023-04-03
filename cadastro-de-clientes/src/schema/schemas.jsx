import  * as yup from"yup"
export const schemaLogin = yup.object().shape({
    email: yup.string().required("Email obrigatorio"),
    password: yup.string().required("Password obrigatorio"),
  });

export const schemaRegister = yup.object().shape({
  name: yup.string().required("Nome Obrigatorio"),
  email: yup.string().required("Email obrigatorio"),
  password: yup.string().required("Password obrigatorio"),
  telephone:yup.string().required("Telephone obrigatorio"),
})

export const schemaContact = yup.object().shape({
  name:yup.string().required("Nome obrigatorio"),
  email: yup.string().required("Email obrigatorio"),
  telephone:yup.string().required("Telephone obrigatorio"),
})