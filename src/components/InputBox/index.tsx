import { ChangeEvent, forwardRef, KeyboardEvent } from "react";
import "./style.css";

interface Props {
  title: string;
  placeholder: string;
  type: "text" | "password";
  value: string;
  message?: string;
  isErrorMessage?: boolean;
  buttonTitle?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
}

const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const {
    title,
    placeholder,
    type,
    value,
    message,
    isErrorMessage,
    buttonTitle,
    onChange,
    onKeyDown,
    onButtonClick,
  } = props;

  const buttonClass =
    value === "" ? "input-bx-button-disable" : "input-bx-button";
  const messageClass = isErrorMessage
    ? "input-bx-message-error"
    : "input-bx-message";
  return (
    <div className="input-bx">
      <div className="input-bx-title">{title}</div>
      <div className="input-bx-content">
        <div className="input-bx-body">
          <input
            ref={ref}
            className="input-bx-input"
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />

          {buttonTitle !== undefined && onButtonClick !== undefined && (
            <div className={buttonClass} onClick={onButtonClick}>
              {buttonTitle}
            </div>
          )}
        </div>
        {message !== undefined && <div className={messageClass}>{message}</div>}
      </div>
    </div>
  );
});

export default InputBox;
