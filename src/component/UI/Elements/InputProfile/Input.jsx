/* eslint-disable react/prop-types */
 
const Input = ({inputtype, defaultValue, value, onChange }) => {
  return (
    <input
      type= {`${inputtype === "password" ? "password" : "text"}`}
      defaultValue={defaultValue}
      className={`pl-2 pt-5 absolute inset-0 bg-transparent bg-opacity-0 ${inputtype === "nama" ? "text-white" : "text-[#9D9EA1]"} focus:outline-none w-full h-full`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
