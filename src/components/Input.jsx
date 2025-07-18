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
        className={`bg-transparent border border-white rounded-lg px-4 py-3 w-full focus:outline-none  transition placeholder-white/70 text-white ${className}`}
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
          className={`text-xs mt-1 ${error ? "text-red-500" : "text-gray-300"}`}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}
