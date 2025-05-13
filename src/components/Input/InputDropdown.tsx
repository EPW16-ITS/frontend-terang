"use client";
import React, { useState, useEffect, Context, useContext, useRef, use } from 'react';
import { useFormikContext } from 'formik';
import { AiOutlineCloseCircle, AiOutlineDown } from 'react-icons/ai'; // Tambahkan ikon panah
import Typography from '../Typography';
import { Field, ErrorMessage } from 'formik';

interface DropdownOption {
  value: string | number;
  label: string;
}

interface InputDropdownProps {
  name: string;
  label: string;
  options?: DropdownOption[]; // Optional, bisa datang dari API
  fetchOptions?: () => Promise<DropdownOption[]>; // Fungsi untuk fetch API
  size?: 'lg' | 'base' | 'sm';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  showCount?: boolean;
  maxLength?: number;
  tabIndex?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  helperText?: string;
  className?: string;
  style?: React.CSSProperties;
  onDropdownChange: (files: { [key: string]: any  }) => void;
  context: Context<
    {
      [key: string]: any;
    }[]>;
}

const InputDropdown: React.FC<InputDropdownProps> = ({
  name,
  label,
  options = [], // Default kosong jika tidak ada opsional
  fetchOptions,  // Fungsi untuk fetch opsi dari API
  size = 'base',
  placeholder,
  required = false,
  disabled = false,
  readonly = false,
  showCount = false,
  maxLength,
  prefix,
  suffix,
  helperText,
  className = '',
  style = {},
  context,
  onDropdownChange
}) => {
  const { setFieldValue, errors, touched, values } = useFormikContext<{
    [key: string]: any;
  }>();
  const [dropdownOptions, setDropdownOptions] = useState<DropdownOption[]>(options);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 
  const ctx = useContext(context);
  const inputRef =useRef(selectedOption);

const isNameInUploadedFiles = ctx.some((dropdown) => dropdown[name]);

let dropdownValue = '';
if (isNameInUploadedFiles) {
  ctx.map((dropdown) => {
    if (dropdown[name]) {
      dropdownValue = dropdown[name];
    }
  });
} else {
  dropdownValue = selectedOption ? selectedOption.label : '';
}
 
  // Fetch data dari API jika fetchOptions disediakan
  // useEffect(() => {
  //   if (fetchOptions) {
  //     setLoading(true);
  //     fetchOptions()
  //       .then(data => {
  //         setDropdownOptions(data);
  //         setLoading(false);
  //       })
  //       .catch(err => {
  //         console.error('Error fetching options:', err);
  //         setLoading(false);
  //       });
  //   }
  // }, [fetchOptions]);

  const handleSelect = (option: DropdownOption) => {

    setSelectedOption(option);
    setFieldValue(name, option.value);
    setShowDropdown(false); // Sembunyikan dropdown setelah memilih opsi
  };

  const handleClear = () => {
    setSelectedOption(null);
    setFieldValue(name, '');
  };
  // console.log(ctx)
  onDropdownChange({ [name]: inputRef.current?.value });

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`mb-3 ${className}`} style={style}>
      <div className="w-full flex justify-between items-center gap-3">
        <label htmlFor={`inputfor-${name}`}>
          <Typography.Poppins as="span" level={9} size="base" className="input-label">
            {label}
            {required && label && <span className="text-accent-error-500"> *</span>}
          </Typography.Poppins>
        </label>
        {showCount && maxLength && (
          <Typography.Poppins as="span" level={9} size="sm" className="input-count">
            {values[name] ? values[name].length : 0} / {maxLength}
          </Typography.Poppins>
        )}
      </div>

      <div className={`w-full pr-3 pl-1 my-2 bg-accent-neutral-700 rounded-md text-white transition-all duration-300 flex items-center input-${size} ${disabled ? 'disabled' : ''} ${errors[name] ? 'error' : ''}`}>
        {prefix && <div className="input-text-addons">{prefix}</div>}

        <Field
          type="text"
          name={name}
          id={`inputfor-${name}`}
          className={`w-full h-full bg-transparent text-${size} 
          border-transparent focus:border-transparent active:border-transparent 
          focus:bg-transparent active:bg-transparent 
          outline-none cursor-pointer p-2`}
          ref={inputRef}
          disabled={disabled || readonly}
          readOnly 
          value={dropdownValue}
          placeholder={placeholder }
          onClick={toggleDropdown} 
          context = {ctx}
                 
        />
        {/* value={selectedOption ? selectedOption.label : ''} */}

        {selectedOption && !disabled && !readonly && (
          <div className="input-text-addons">
            <AiOutlineCloseCircle size={20} className="cursor-pointer" onClick={handleClear} />
          </div>
        )}

        {/* Tambahkan panah yang berubah arah */}
        <div className="input-text-addons">
          <AiOutlineDown
            size={20}
            className={`transition-transform duration-300 ${showDropdown ? 'rotate-180' : 'rotate-0'}`} // Kondisi untuk rotasi
            onClick={toggleDropdown}
          />
        </div>

        {suffix && <div className="input-text-addons">{suffix}</div>}
      </div>

      {showDropdown && (
        <ul className="sticky z-10 w-full bg-accent-neutral-800 rounded-md text-white max-h-60 overflow-auto">
          {loading ? (
            <li className="p-2">Loading...</li>
          ) : (
            dropdownOptions.map(option => (
              <li
                key={option.value}
                className="p-2 cursor-pointer hover:bg-accent-neutral-600"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))
          )}
        </ul>
      )}

      <ErrorMessage name={name}>
        {msg => (
          <Typography.Poppins as="span" level={9} size="sm" className="input-error flex gap-1.5 items-center">
            {msg}
          </Typography.Poppins>
        )}
      </ErrorMessage>

      {helperText && (
        <Typography.Poppins as="span" size="sm" level={10} className="input-helper">
          {helperText}
        </Typography.Poppins>
      )}
    </div>
  );
};

export default InputDropdown;
