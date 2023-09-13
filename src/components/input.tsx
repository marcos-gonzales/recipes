import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Input({
  label,
  placeholder,
  type,
  icon,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  icon?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="field">
      <p className="control has-icons-left">
        <input
          className="input"
          type={type ?? "text"}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off"
        />
        {icon && (
          <span className="icon is-small is-left">
            <i className={`fas fa-${icon}`}></i>
          </span>
        )}
      </p>
    </div>
  );
}
