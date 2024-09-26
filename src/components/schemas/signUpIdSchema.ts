import { z } from 'zod';

const idRegex = /^[a-zA-Z0-9]{8,20}$/;

export const signUpIdSchema = z.object({
  id: z
    .string()
    .regex(idRegex, '아이디는 영어와 숫자로 이루어집니다.')
    .min(8, '아이디는 8글자 이상이어야합니다.')
    .max(20, '아이디는 20글자 이하여야 합니다.'),
});
