import React from 'react';
import SignInInput from '@/components/pages/auth/sign-in/SignInInput';
import { DeliveryFormType } from '@/types/main/deliveryType';

interface OrderStatusSelectProps {
  message: string;
  customMessage: string;
  setValue: (name: keyof DeliveryFormType) => (value: string) => void;
}

export const DeliveryMessage: React.FC<OrderStatusSelectProps> = ({
  message,
  customMessage,
  setValue,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setValue('message')(value);
  };

  return (
    <div>
      <p className="text-sm">배송 메모</p>
      <select
        className="w-full p-2 rounded-sm border-b-2 focus:border-green-500 bg-white mb-2"
        onChange={handleSelectChange}
        name="message"
        value={message}
      >
        <option value="배송 메모를 선택해 주세요.">
          배송 메모를 선택해 주세요.
        </option>
        <option value="배송 전 연락 바랍니다.">배송 전 연락 바랍니다.</option>
        <option value="부재 시 경비실에 맡겨주세요.">
          부재 시 경비실에 맡겨주세요.
        </option>
        <option value="부재 시 문 앞에 놓아주세요.">
          부재 시 문 앞에 놓아주세요.
        </option>
        <option value="부재 시 전화 또는 문자 남겨주세요.">
          부재 시 전화 또는 문자 남겨주세요.
        </option>
        <option value="직접 입력">직접 입력</option>
      </select>

      {message === '직접 입력' && (
        <SignInInput
          signInInput={{
            text: '배송 시 요청사항을 기재해주세요.',
            value: customMessage,
            name: 'customMessage',
            setValue: (value) => setValue('customMessage')(value),
            clearValue: () => null,
          }}
        />
      )}
    </div>
  );
};
