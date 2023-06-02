import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const SignUpForm = () => {
  return (
    <>
      <Formik
        validate={(values) => {
          const errors = {};

          if (values.password === "") {
            errors.password = "فیلد اجباری است";
          } else if (values.password.length < 8) {
            errors.password = "طول کاراکتر نباید کمتر از هشت حرف باشد";
          }

          if (!values.email) {
            errors.email = "فیلد اجباری است";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "آدرس ایمیل نامعتبر است";
          }

          return errors;
        }}
        initialValues={{ radioOption: "", email: "", password: "" }}
      >
        {({ Formik, errors, touched }) => (
          <Form className="flex justify-center items-center flex-col">
          
            <div className="w-full flex items-center flex-col">
              <div className="w-full h-[80px]">
                <Field
                  type="email"
                  name="email"
                  placeholder="ایمیل"
                  className="border border-solid border-[#DCDCDC] w-full h-[50px] rounded-[15px] pr-[15px] leading-[40px] placeholder:opacity-[0.7]"
                />
                <span className="text-rose-400 text-[12px] pr-[15px]">
                  {errors.email && touched.email && errors.email}
                </span>
              </div>
              <div className="w-full h-[80px]">
                <Field
                  type="password"
                  name="password"
                  placeholder="رمز عبور"
                  className="border border-solid border-[#DCDCDC] w-full h-[50px] rounded-[15px] pr-[15px] leading-[40px] placeholder:opacity-[0.7]"
                />
                <span className="text-rose-400 text-[12px] pr-[15px]">
                  {errors.password && touched.password && errors.password}
                </span>
              </div>
              <a href="#" className="no-underline w-full mb-[6px]">
                <button
                  type="submit"
                  className="h-[48px] text-[16px] bg-[#ffbe33] border-0 outline-0 text-white font-medium w-full rounded-[15px] "
                >
                  ثبت نام
                </button>
              </a>
             
            </div>
          </Form>
        )}
      </Formik>

     
    </>
  );
};

export default SignUpForm;
