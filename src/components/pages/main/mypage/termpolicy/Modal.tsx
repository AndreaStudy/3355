// Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-10/12 bg-white rounded">
        <div className=" flex flex-col p-6 gap-y-2">
          <div className="text-xl font-bold">
            배송지 정보 수집 및 이용 동의를 해제하시겠습니까?
          </div>
          <div className="text-md text-slate-400">
            해제 시 저장된 배송지 정보가 모두 삭제됩니다.
          </div>
        </div>
        <div className="grid grid-cols-2 text-md">
          <button
            onClick={onClose}
            className="text-slate-400 px-4 py-6 rounded border-t-2 border-r-2"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className="text-green-500 font-bold px-4 py-6 rounded border-t-2"
          >
            해제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
