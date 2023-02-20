import * as yup from "yup";

export const techFormDetailsSchema = yup.object().shape({
    title: yup
        .string()
        .required("O nome é obrigatório!")
        .min(3, "O nome precisa ter pelo 3 caracteres.")
        .max(50, "O nome pode ter no máximo 50 caracteres."),
    status: yup.string().required("Status é obrigatório"),
});
