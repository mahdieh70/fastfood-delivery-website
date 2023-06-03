import React from "react";

const LoginAndSignupButton = ({ isLogged, setIsLogged }) => {
  return (
    <div className="flex justify-between relative rounded-[15px] h-[50px] w-full mt-[25px] mb-[25px] border border-solid border-[#DCDCDC]">
      <div
        className={
          isLogged === "login"
            ? "w-1/2 flex justify-center items-center bg-[#ffbe33] text-[16px] text-white rounded-[12px]"
            : "w-1/2 flex justify-center items-center text-black text-[16px] rounded-[12px]"
        }
        onClick={() => {
          setIsLogged("login");
        }}
      >
        ورود
      </div>
      <div
        className={
          isLogged === "signup"
            ? "w-1/2 flex justify-center items-center bg-[#ffbe33] text-[16px] text-white rounded-[12px]"
            : "w-1/2 flex justify-center items-center text-black text-[16px] rounded-[12px]"
        }
        onClick={() => {
          setIsLogged("signup");
        }}
      >
        ثبت نام
      </div>
    </div>
  );
};

export default LoginAndSignupButton;
