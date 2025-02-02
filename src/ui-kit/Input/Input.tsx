import { ChangeEvent, FC, forwardRef } from "react";
import { InputProps } from "./@types";

export const Input: FC<InputProps> = forwardRef(
  ({ label, value, onChange }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onChange(value, e);
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
          </label>
        )}
        <input
          value={value}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
    );
  }
);
