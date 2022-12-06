import React from 'react'
import * as S from './styles'
import { toast } from 'react-toastify'

export const showToast = (
  type: 'success' | 'warn' | 'error' | 'info',
  message: string
) => {
  toast[type](message, { theme: 'colored' })
}
export default function ToastContainer() {
  return <S.Toast />
}
