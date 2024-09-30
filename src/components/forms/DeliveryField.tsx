'use client';

import { useEffect, useState } from 'react';
import SignInInput from '../pages/auth/sign-in/SignInInput';
import { Button } from '../ui/button';
import { Address } from 'react-daum-postcode';
import PostModal from '../pages/main/mypage/delivery/add/PostModal';
import { DeliveryMessage } from '../pages/main/mypage/delivery/add/DeliveryMessage';
import { DeliveryFormType } from '@/types/main/deliveryType';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { deliveryDataType } from '@/types/ResponseTypes';

function DeliveryField({ delivery }: { delivery: deliveryDataType | null }) {
  const selectMessage = [
    '배송 메모를 선택해 주세요.',
    '배송 전 연락 바랍니다.',
    '부재 시 경비실에 맡겨주세요.',
    '부재 시 경비실에 맡겨주세요.',
    '부재 시 문 앞에 놓아주세요.',
    '부재 시 전화 또는 문자 남겨주세요.',
  ];

  const [inputValues, setInputValues] = useState<DeliveryFormType>({
    nickname: '',
    receiver: '',
    postNumber: '',
    address: '',
    detailAddress: '',
    phone1: '',
    phone2: '',
    message: '직접 입력',
    customMessage: '',
    baseAddress: false,
  });

  useEffect(() => {
    if (delivery) {
      setInputValues({
        nickname: delivery.nickname || '',
        receiver: delivery.receiver || '',
        postNumber: delivery.postNumber || '',
        address: delivery.address || '',
        detailAddress: delivery.detailAddress || '',
        phone1: delivery.phone1 || '',
        phone2: delivery.phone2 || '',
        message: selectMessage.includes(delivery.message || '')
          ? delivery.message || ''
          : '직접 입력',
        customMessage:
          !selectMessage.includes(delivery.message || '') &&
          delivery.message !== '직접 입력'
            ? delivery.message || ''
            : '',
        baseAddress: delivery.baseAddress || false,
      });
    }
  }, [delivery]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClear = (name: keyof DeliveryFormType) => {
    setInputValues((prev) => ({ ...prev, [name]: '' }));
  };

  const handleChange =
    (name: keyof DeliveryFormType) => (value: string | boolean) => {
      const updatedValues = {
        ...inputValues,
        [name]: value,
      };
      setInputValues(updatedValues);
    };

  const handleAddressSearch = () => {
    setIsModalOpen(true);
  };

  const handleComplete = (data: Address) => {
    setInputValues((prev) => ({
      ...prev,
      postNumber: data.zonecode,
      address: data.address,
      detailAddress: data.buildingName || '',
    }));
    setIsModalOpen(false);
  };

  return (
    <>
      <SignInInput
        signInInput={{
          text: '주소별칭',
          value: inputValues.nickname,
          name: 'nickname',
          setValue: (value) => handleChange('nickname')(value),
          clearValue: () => handleClear('nickname'),
          required: false,
        }}
      />
      <SignInInput
        signInInput={{
          text: (
            <>
              받는 분 <span className="text-green-500 font-bold">*</span>
            </>
          ),
          value: inputValues.receiver,
          name: 'receiver',
          setValue: (value) => handleChange('receiver')(value),
          clearValue: () => handleClear('receiver'),
        }}
      />
      <div className="grid grid-cols-4">
        <span className="col-span-3">
          <SignInInput
            signInInput={{
              text: (
                <>
                  우편번호 <span className="text-green-500 font-bold">*</span>
                </>
              ),
              value: inputValues.postNumber,
              name: 'postNumber',
              setValue: (value) => handleChange('postNumber')(value),
              clearValue: () => null,
            }}
          />
        </span>
        <Button
          onClick={handleAddressSearch}
          type="button"
          className="col-span-1 rounded-full text-sm"
        >
          주소검색
        </Button>
      </div>
      <SignInInput
        signInInput={{
          text: (
            <>
              기본주소 <span className="text-green-500 font-bold">*</span>
            </>
          ),
          value: inputValues.address,
          name: 'address',
          setValue: (value) => handleChange('address')(value),
          clearValue: () => null,
        }}
      />
      <SignInInput
        signInInput={{
          text: (
            <>
              상세주소 <span className="text-green-500 font-bold">*</span>
            </>
          ),
          value: inputValues.detailAddress,
          name: 'detailAddress',
          setValue: (value) => handleChange('detailAddress')(value),
          clearValue: () => handleClear('detailAddress'),
        }}
      />
      <SignInInput
        signInInput={{
          text: (
            <>
              연락처1 <span className="text-green-500 font-bold">*</span>
            </>
          ),
          value: inputValues.phone1,
          name: 'phone1',
          setValue: (value) => handleChange('phone1')(value),
          clearValue: () => handleClear('phone1'),
        }}
      />
      <SignInInput
        signInInput={{
          text: '연락처2',
          value: inputValues.phone2,
          name: 'phone2',
          setValue: (value) => handleChange('phone2')(value),
          clearValue: () => handleClear('phone2'),
          required: false,
        }}
      />
      <DeliveryMessage
        message={inputValues.message}
        customMessage={inputValues.customMessage}
        setValue={handleChange}
      />
      <div className={'flex items-center space-x-2 p-1 gap-1 mb-[72px]'}>
        <Checkbox
          variant="medium"
          id="baseAddress"
          name="baseAddress"
          checked={inputValues.baseAddress}
          onCheckedChange={(checked) => handleChange('baseAddress')(checked)}
        />
        <Label htmlFor="baseAddress" className="text-md">
          기본 배송지로 저장합니다.
        </Label>
      </div>
      {isModalOpen && <PostModal handleComplete={handleComplete} />}
    </>
  );
}

export default DeliveryField;
