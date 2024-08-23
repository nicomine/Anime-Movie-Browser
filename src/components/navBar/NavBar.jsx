export function NavBar({
  inputType,
  inputPlaceHolder,
  onChange,
  onClick,
  buttonType,
}) {
  return (
    <>
      <input
        type={inputType}
        placeholder={inputPlaceHolder}
        onChange={onChange}
      />
      <button onClick={onClick} type={buttonType}>
        Search
      </button>
    </>
  );
}
