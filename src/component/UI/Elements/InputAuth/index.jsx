/* eslint-disable react/prop-types */
import Input from "./Input";
import Label from "./Label";

 
const Index = (props) => {
    const { htmlFor, placeholder ,label, type , isrequired , value, onChange  } = props
  return (
    <div className="mb-4">
      <Label htmlFor={htmlFor} />{label}<Label/>
      <Input placeholder={placeholder}  required={isrequired} type={type} value={value} onChange={onChange}/>
      
    </div>
  )
}

export default Index
