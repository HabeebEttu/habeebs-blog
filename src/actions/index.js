'use server'

import * as auth from '@/auth';
import { signIn } from 'next-auth/react';
import { db } from '@/app/db';

export async function loginWithGithub() {
    const result = await signIn("github",{callback:'/admin'});
    return result;
}
export async function signOut() {
  const result = await auth.signOut();
  return result;
}

