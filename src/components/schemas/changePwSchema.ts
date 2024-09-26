import { z } from 'zod';

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,20}$/;

export const changePwSchema = z
  .object({
    password: z
      .string()
      .min(10, '비밀번호는 10글자 이상이어야 합니다.')
      .max(20, '비밀번호는 20글자 이하여야 합니다.')
      .regex(
        passwordRegex,
        '영문, 숫자, 특수문자(~!@#%^&*)를 모두 조합해 주세요.'
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });
