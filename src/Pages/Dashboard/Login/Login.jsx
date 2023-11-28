import Input from "../../../Components/Input";
import useLogIn from "../../../customHooks/useLogIn";

const Login = () => {
  const { getLogin, value, setValue } = useLogIn();

  const handleSubmit = (e) => {
    e.preventDefault();
    getLogin(value);
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {/* <nav className="h-[40px] py-2 w-full flex  items-center bg-black text-white px-5">
        <Link to="/">Home</Link>
      </nav> */}
      <div className="  w-full py flex py-10 justify-center items-center bg-[ #F2F3F4] ">
        <div className=" flex flex-col shadow-testShadow items-center justify-center  w-[400px] p-4 ">
          <h1 className="text-3xl ">Log In</h1>
          <form action="">
            <div className="w-full  py-2 text-black">
              <Input
                label="Email"
                type="text"
                name="email"
                id="email"
                value={value.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full py-2 ">
              <Input
                label="Password"
                type="password"
                name="password"
                id="password"
                value={value.password}
                onChange={handleChange}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="my-2 p-1 px-4 rounded-2xl border-[1px] border-gray-600"
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

// {
//   "email":"aniket.magadum@fyntune.com",
//   "password":"password",
//    "device_name":"macbook"
// }
