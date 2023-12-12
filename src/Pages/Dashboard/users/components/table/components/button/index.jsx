const Button = ({ component, handleclick, dis }) => {
  return (
    <div>
      <button
        className="border  border-transparent cursor-pointer  hover:border-primary_color active:bg-primary_color disabled:border-background_white disabled:bg-background_white disabled:cursor-not-allowed mx-2 rounded-[30px]  p-2  duration-500 "
        disabled={dis}
        onClick={() => {
          handleclick;
        }}
      >
        {component}
      </button>
    </div>
  );
};

export default Button;
