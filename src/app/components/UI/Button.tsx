const Button = (props: { btnName: string; lightMode: boolean }) => {
  const buttonStyle = props.lightMode
    ? { backgroundColor: "#fff", color: "black" }
    : { backgroundColor: "black", color: "white" };

  return (
    <button
      className={"bg-white rounded-full py-3 px-6 font-semibold text-sm"}
      style={buttonStyle}
      type="button"
    >
      {props.btnName}
    </button>
  );
};
export default Button;
