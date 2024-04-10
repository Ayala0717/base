import { type ReactNode } from 'react'

export interface DialogProps {
  children: ReactNode
  trigger?: ReactNode
  closeButton?: ReactNode
  acceptButton?: ReactNode
  title?: string
  description?: string
  requireFooter?: boolean
  requireCloseButton?: boolean
  requireAcceptButton?: boolean
}
