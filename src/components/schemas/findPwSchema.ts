import { z } from 'zod';

const idRegex = /^[a-zA-Z0-9]{8,20}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const findPwSchema = z.object({
  id: z
    .string()
    .regex(idRegex, '아이디는 영어와 숫자로 이루어집니다.')
    .min(8, '아이디는 8글자 이상이어야합니다.')
    .max(20, '아이디는 20글자 이하여야 합니다.'),
  email: z.string().regex(emailRegex, '유효한 이메일 주소를 입력하세요.'),
});
