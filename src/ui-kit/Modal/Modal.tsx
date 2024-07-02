import { FC } from "react";
import { RxCross1 } from "react-icons/rx";
import { IModalProps } from "./@types";
import { Portal } from "../Portal";



export const Modal: FC<IModalProps> = ({
  children,
  onClose,
  isOpen,
  title,
}) => {
  return (
      <Portal>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-1/2 lg:w-1/3">
              <div className="px-4 py-5 sm:px-6">
                {title && (
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {title}
                  </h3>
                )}
                <RxCross1
                  onClick={onClose}
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-900"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">{children}</div>
            </div>
          </div>
        )}
      </Portal>
  );
};
