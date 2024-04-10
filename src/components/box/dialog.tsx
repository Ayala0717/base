import { Button } from '../ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter
} from '../ui/dialog'

import { DialogProps } from '@/types/components/dialog'

function DialogBox({
  trigger,
  title,
  description,
  children,
  acceptButton,
  closeButton,
  requireFooter = true,
  requireAcceptButton = true,
  requireCloseButton = true
}: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || <Button type='button'>{'Abrir'}</Button>}
      </DialogTrigger>
      <DialogContent className='w-full'>
        <DialogHeader>
          {Boolean(title) && <DialogTitle>{title}</DialogTitle>}
          {Boolean(description) && (
            <DialogDescription>{description}</DialogDescription>
          )}
        </DialogHeader>
        {children}
        {Boolean(requireFooter) && (
          <DialogFooter>
            {Boolean(requireCloseButton) && (
              <DialogClose asChild>
                {closeButton || (
                  <Button type='button' variant='secondary'>
                    {'Cerrar'}
                  </Button>
                )}
              </DialogClose>
            )}
            {Boolean(requireAcceptButton) &&
              (acceptButton || <Button type='button'>{'Aceptar'}</Button>)}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export { DialogBox }
