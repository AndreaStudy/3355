'use server';

// 회원가입
export async function createAuth(formData: FormData) {
  'use server';
  const payload = {
    userId: formData.get('id'),
    name: formData.get('name'),
    nickname: formData.get('nickname'),
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const res = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/sign-up`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return null;
}

// E-mail 중복확인
export async function verifyEmail(email: string) {
  'use server';
  const payload = {
    email: email,
  };
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/auth/email-duplicate`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (res.ok) {
    const data = await res.json();
    return data.result;
  }
  return null;
}

// Id 중복확인
export async function verifyId(id: string) {
  'use server';
  const payload = {
    userId: id,
  };
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/auth/userId-duplicate`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (res.ok) {
    const data = await res.json();
    return data.result;
  }
  return null;
}

// e-mail을 통한 아이디찾기
export async function findId(formData: FormData) {
  'use server';
  const payload = {
    email: formData.get('email'),
  };
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/auth/find-userId`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (res.ok) {
    const data = await res.json();
    return data.result;
  }
  return null;
}

// id, e-mail을 통한 아이디찾기
export async function findPw(formData: FormData) {
  'use server';
  const payload = {
    userId: formData.get('id'),
    email: formData.get('email'),
  };
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/auth/find-password`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (res.ok) {
    const data = await res.json();
    return data.result;
  }
  return null;
}

// 비밀번호 변경
export async function changePw(formData: FormData, token: string) {
  'use server';
  const payload = {
    newPassword: formData.get('password'),
  };
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/auth/update-password`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
  );

  if (res.ok) {
    const data = await res.json();
    return data;
  }
  return null;
}
