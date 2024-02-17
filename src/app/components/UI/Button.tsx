const Button = (props: { btnName: string }) => {
  return (
    <button
      className={"bg-white rounded-full py-3 px-6 font-semibold text-sm"}
      type="button"
    >
      {props.btnName}
    </button>
  );
};
export default Button;
