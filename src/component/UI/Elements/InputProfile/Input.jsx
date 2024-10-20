/* eslint-disable react/prop-types */
 
const Input = ({ inputtype, value, onChange, readOnly }) => {
  return (
    <input
      type={inputtype === "password" ? "password" : "text"}
      className={`pl-2 pt-5 absolute inset-0 bg-transparent bg-opacity-0 "text-[#9D9EA1]" focus:outline-none w-full h-full`}
      value={value}
      onChange={onChange} 
      readOnly={readOnly}
      autoComplete="off"
    />
  );
};
export default Input;
