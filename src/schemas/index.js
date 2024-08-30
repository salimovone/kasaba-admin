import * as yup from "yup";

const passId = /^[A-Za-z]{2}[0-9]{7}$/;

export const loginSchema = yup.object().shape({
  id: yup
    .string()
    .min(9, "passport ma'lumotlari to'g'ri kiritilmagan")
    .max(9, "passport ma'lumotlari to'g'ri kiritilmagan")
    .matches(passId, {message: "passport raqam va seriya aniq formatda. Masalan: AB1234567"}),
    // .required("passport seriya kiritish majburiy!!!"),
  email: yup.string().email("to'g'ri email kiriting"),
  password: yup.string().required("parol kiritish majburiy"),
});


export const newsSchema = yup.object().shape({
  title: yup.string().required().min(3).max(50),
  text: yup.string().required().min(15).max(2000),
})