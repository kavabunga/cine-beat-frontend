import './Input.css';

export default function Input({
  label,
  value,
  name,
  type,
  pattern,
  onChange,
  errorMessage,
}) {
  return (
    <label className='input'>
      {label}
      <input
        type={type}
        value={value}
        name={name}
        pattern={pattern}
        required
        onChange={onChange}
        className={`input__field ${errorMessage ? 'input__field_error' : ''}`}
      />
      <span className={`input__error input__error_type_${name}`}>
        {errorMessage}
      </span>
    </label>
  );
}
