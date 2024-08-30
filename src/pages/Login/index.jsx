import React from "react";
import Background from "./Background";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import Axios from "../../services/Axios";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    try {
      const form = new FormData();
      form.append("username", values.id);
      form.append("password", values.password);
      const response = await Axios("/auth/login/", {
        method: "post",
        data: form,
      });

      const signInResult = signIn({
        token: response.data.key,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { username: values.id },
      });

      if (signInResult) {
        navigate("/"); // Kirish muvaffaqiyatli bo'lsa, bosh sahifaga o'tish
      }
    } catch (error) {
      throw new Error("error: " + error.message);
    }

    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    resetForm,
    handleSubmit,
  } = useFormik({
    initialValues: {
      id: "AD1460165",
      email: "",
      password: "AD1460165",
    },
    onSubmit,
    validationSchema: loginSchema,
  });

  return (
    <div className="w-screen h-full absolute z-[999] bg-[white] top-0 left-0 flex justify-center text-slate-700 items-center">
      <div className="-mt-16 bg-[#fff3] backdrop:blur absolute z-[1000] py-4 px-8 card-neu rounded-2xl border border-sky-600">
        <form className="max-w-2xl w-full" onSubmit={handleSubmit}>
          <label htmlFor="id">Passport seriya va raqam:</label> <br />
          <input
            type="text"
            id="id"
            value={values.id}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Passport seriya va raqamini kiriting!"
            className={`${
              errors.id && touched.id && values.id ? "border-red-500" : ""
            } text-Dark outline-none mb-4 border py-1 px-4 rounded-xl mt-1 w-full uppercase placeholder:lowercase`}
          />{" "}
          {errors.id && touched.id && values.id ? (
            <p className="text-xs -mt-3 text-red-700">{errors.id}</p>
          ) : null}
          <br />
          <label htmlFor="email">Elektron pochta:</label> <br />
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.email && touched.email && values.email
                ? "border-red-500"
                : ""
            } text-Dark outline-none mb-4 border py-1 px-4 rounded-xl mt-1 w-full placeholder:lowercase`}
          />{" "}
          {errors.email && touched.email && values.email ? (
            <p className="text-xs -mt-3 text-red-700">{errors.email}</p>
          ) : null}
          <br />
          <label htmlFor="password">Parol:</label> <br />
          <input
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="parolni kiriting?"
            className={`${
              errors.password && touched.password && values.password
                ? "border-red-500"
                : ""
            } text-Dark outline-none mb-4 border py-1 px-4 rounded-xl mt-1 w-full`}
          />{" "}
          {errors.password && touched.password && values.password ? (
            <p className="text-xs -mt-3 text-red-700 mb-8">{errors.password}</p>
          ) : null}
          <div className="w-full flex justify-between items-center text-sm">
            <span className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Meni eslab qol</label>
            </span>
            <span className="cursor-pointer">Parol yodimda yo'q</span>
          </div>
          <div className="w-full flex justify-between items-center mt-4">
            <button
              onClick={resetForm}
              className="border px-4 py-1 rounded-2xl"
            >
              tozalash
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="border px-4 py-1 rounded-2xl bg-sky-500 text-[#fff]"
            >
              krish
            </button>
          </div>
        </form>
      </div>
      <div>
        <Background />
      </div>
    </div>
  );
};

export default Login;
