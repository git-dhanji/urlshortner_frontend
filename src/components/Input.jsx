export default function Input({
  type = "text",
  className = "",
  placeholder = "",
  value = "",
  onChange,
  onFocus,
  name = undefined,
  id = undefined,
  autoFocus = false,
  disabled = false,
  required = false,
  maxLength = undefined,
  minLength = undefined,
  ariaLabel = undefined,
  error = false,
  helperText = "",
  readOnly = false,
  ...props
}) {
  return (
    <div className="w-full flex flex-col">
      <input
        readOnly={readOnly}
        type={type}
        className={`border ${
          error ? "border-red-400" : "border-gray-300"
        } rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400  transition ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        name={name}
        id={id}
        autoFocus={autoFocus}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        aria-label={ariaLabel || placeholder}
        aria-invalid={error}
        {...props}
      />
      {helperText && (
        <span
          className={`text-xs mt-1 ${error ? "text-red-500" : "text-gray-500"}`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}
