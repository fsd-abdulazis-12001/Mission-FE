/* eslint-disable react/prop-types */
 
const Label = (props) => {
    const {htmlFor , text} = props
  return (
    <label htmlFor={htmlFor} className="weight-500 font-lato">{text}</label>
  )
}

export default Label
