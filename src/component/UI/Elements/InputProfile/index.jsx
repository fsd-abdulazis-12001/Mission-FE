/* eslint-disable react/prop-types */
import Label from './Label';
import Input from './Input';
import EditIcon from '@mui/icons-material/Edit';

const InputField = ({type , placeholder , label,  value , onChange}) => {
  return (
    <div className="relative flex flex-col justify-start items-start w-full h-[64px] bg-[#22282A] border border-gray-600 rounded gap-2">
      <Label type = {type} text= {label} />
      <Input inputtype = {type} defaultValue= {placeholder} value={value} onChange={onChange} />
      {type !== "email" && <EditIcon className='absolute top-[25%] right-3' />}
      
    </div>
  );
};

export default InputField;
