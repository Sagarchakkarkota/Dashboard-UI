import { useForm } from "react-hook-form";
import Input from "../../../UI/input/Index";
import useLogIn from "./hooks/useLogIn";

const Login = () => {
  const { mutation } = useLogIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "", device_name: "MacIntel" },
  });

  const onSubmit = (value) => {
    mutation.mutate(value);
  };
  return (
    <div>
      <div className="  w-full py flex py-10 justify-center items-center bg-[ #F2F3F4] ">
        <div className=" flex flex-col shadow-testShadow items-center justify-center  w-[400px] p-4 ">
          <h1 className="text-3xl ">Log In</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full  py-2 text-black">
              <Input
                label="Email"
                type="text"
                name="email"
                register={register}
                error={errors?.email}
                validations={{
                  required: "Email is required",
                  pattern: {
                    value: /^[\w\.-]+@[a-z]+\.[a-z]{2,}$/,
                    message: "Enter valid email address eg.demo@gmail.com",
                  },
                }}
              />
            </div>
            <div className="w-full py-2 ">
              <Input
                label="Password"
                type="password"
                name="password"
                register={register}
                error={errors?.password}
              />
            </div>

            <button
              type="submit"
              className="my-2 p-1 px-4 rounded-2xl border-[1px] border-gray-600 hover:bg-black hover:text-white "
            >
              Submit
            </button>
          </form>
          <div className="bg-black w-full h-[1px] m-2"></div>
          <p className="flex py-2 ">
            <p className="text-xs">Don't have an account?</p>
            <p className="text-blue-500 mx-1 text-sm font-semibold cursor-pointer">
              Sign Up
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
