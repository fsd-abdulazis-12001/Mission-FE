/* eslint-disable react/prop-types */
import Label from './Label';
import Input from './Input';
import EditIcon from '@mui/icons-material/Edit';

const InputProfile = ({ type, label, value, onChange, isEditable = true }) => {
  return (
    <div className="relative flex flex-col justify-start items-start w-full h-[64px] bg-[#22282A] border border-gray-600 rounded gap-2">
      <Label type={type} text={label} />
      <Input
        inputtype={type}
        value={value}
        onChange={isEditable ? onChange : undefined} // Conditionally pass `onChange` only if editable
        readOnly={!isEditable} // If not editable (like for email), make it read-only
      />
      {isEditable && type !== "email" && (
        <EditIcon className="absolute top-[25%] right-3" />
      )}
    </div>
  );
};

export default InputProfile;
