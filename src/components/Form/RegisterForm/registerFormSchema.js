import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório!")
        .min(3, "O nome precisa ter pelo menos 3 caracteres.")
        .max(200, "O nome pode ter no máximo 200 caracteres."),
    email: yup
        .string()
        .lowercase()
        .required("O email é obrigatório")
        .email("É necessário fornecer um email válido."),
    password: yup
        .string()
        .required("A senha obrigatória")
        .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
        .min(6, "É necessário uma senha de pelo menos 6 caracteres"),
    passwordConfirmation: yup
        .string()
        .required("A confirmação da senha obrigatória")
        .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
        .min(6, "É necessário uma senha de pelo menos 6 caracteres")
        .oneOf([yup.ref('password'), null], 'Senhas não coincidem'),
    bio: yup
        .string()
        .required("A bio é obrigatória!")
        .min(3, "A bio precisa ter pelo menos 3 caracteres.")
        .max(200, "A bio pode ter no máximo 200 caracteres."),
    contact: yup
        .string()
        .required("O contato é obrigatório!")
        .min(3, "O contato precisa ter pelo menos 3 caracteres.")
        .max(100, "O contato pode ter no máximo 200 caracteres."),
    course_module: yup.string().required("Módulo é obrigatório"),
});
