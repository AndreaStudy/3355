import { z } from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const findIdSchema = z.object({
  email: z.string().regex(emailRegex, '유효한 이메일 주소를 입력하세요.'),
});
