import { type ReactNode } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '../ui/card'
import { cn } from '@/lib/utils'

interface Props {
  title?: string
  titleClasses?: string
  headerDescription?: string
  wrapperClassses?: string
  children: ReactNode
  footer?: ReactNode
  footerClasses?: string
}

function CardBox(props: Props) {
  return (
    <Card className={props.wrapperClassses}>
      {Boolean(props.title) && (
        <CardHeader>
          <CardTitle className={props.titleClasses}>{props.title}</CardTitle>
          {Boolean(props.headerDescription) && (
            <CardDescription>{props.headerDescription}</CardDescription>
          )}
        </CardHeader>
      )}
      <CardContent>{props.children}</CardContent>
      {Boolean(props.footer) && (
        <CardFooter className={cn('flex justify-between', props.footerClasses)}>
          {props.footer}
        </CardFooter>
      )}
    </Card>
  )
}

export { CardBox }
