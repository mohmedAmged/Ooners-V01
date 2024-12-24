import LoginForm from '@/app/components/AuthComponnents/LoginFormSec/LoginForm';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "Ooners Login",
};
export default function LoginPage() {
  return (
    <>
      <LoginForm />
    </>
  )
}
