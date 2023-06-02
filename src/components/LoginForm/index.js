import React from "react";
import bgImage from "../../assets/images/front-view-yummy-meat-cheeseburger-with-french-fries-dark-background-dinner-burgers-snack-fast-food-sandwich-salad-dish-toast (1).jpg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import SignUpForm from "../signUpForm";
const LoginForm = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full overflow-hidden">
        <section className="h-[45vh] w-full">
          <img src={bgImage} alt="bgImage" className="w-full h-full" />
        </section>
        <section className="bg-white h-[55vh] w-full flex justify-center">
          <div className="w-full small:w-[540px]">
            <div className="flex w-[200%]">
              <div className="w-full mr-[15px] ml-[30px]">
                <Formik
                  validate={(values) => {
                    const errors = {};

                    if (values.password === "") {
                      errors.password = "فیلد اجباری است";
                    } else if (values.password.length < 8) {
                      errors.password =
                        "طول کاراکتر نباید کمتر از هشت حرف باشد";
                    }

                    if (!values.email) {
                      errors.email = "فیلد اجباری است";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "آدرس ایمیل نامعتبر است";
                    }

                    return errors;
                  }}
                  initialValues={{
                    radioOption: "login",
                    email: "",
                    password: "",
                  }}
                  onSubmit={(values) => {
                    console.log("form input data =>", values);
                  }}
                >
                  {({ values, errors, touched }) => (
                    <Form className="flex justify-center items-center flex-col w-full">
                      <div className="flex justify-between relative rounded-[15px] h-[50px] w-full mt-[25px] mb-[25px] border border-solid border-[#DCDCDC]">
                        <Field
                          type="radio"
                          name="radioOption"
                          value="signup"
                          id="signup"
                          className="hidden"
                        />
                        <label
                          for="signup"
                          className={
                            values.radioOption === "signup"
                              ? "w-full h-full text-[16px] text-center leading-[48px] bg-[#ffbe33] rounded-[12px]"
                              : "w-full h-full text-[16px] text-center leading-[48px]"
                          }
                        >
                          ثبت نام
                        </label>
                        <Field
                          type="radio"
                          name="radioOption"
                          value="login"
                          id="login"
                          className="hidden"
                        />
                        <label
                          for="login"
                          className={
                            values.radioOption === "login"
                              ? "w-full h-full text-[16px] text-center leading-[48px] bg-[#ffbe33] rounded-[12px]"
                              : "w-full h-full text-[16px] text-center leading-[48px]"
                          }
                        >
                          ورود
                        </label>
                      </div>
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
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </span>
                        </div>
                        <a href="#" className="no-underline w-full mb-[6px]">
                          <button
                            type="submit"
                            className="h-[48px] text-[16px] bg-[#ffbe33] border-0 outline-0 text-white font-medium w-full rounded-[15px] "
                          >
                            ورود
                          </button>
                        </a>
                        <div className="flex text-[13px]">
                          <p>هنوز ثبت نام نکرده اید؟</p>
                          <a
                            href="#"
                            className="text-blue-500 mr-[5px] no-underline"
                          >
                            ثبت نام
                          </a>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              <div className="w-full mt-[100px] mr-[15px]">
                <SignUpForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginForm;
