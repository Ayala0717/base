import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { isEmptyArray } from '@/utils/array'
import { FormProps } from '@/types/components/form'
import { cn } from '@/lib/utils'

function FormBox<T>(props: FormProps<T>) {
  const form = useForm<z.infer<typeof props.formSchema>>({
    resolver: zodResolver(props.formSchema),
    defaultValues: props.defaultValues
  })

  return (
    <Form {...form}>
      <form
        className={cn('w-80 space-y-6 p-5', props.formWrapperClasses)}
        onSubmit={form.handleSubmit(props.onSubmit)}
      >
        {!isEmptyArray(props.formField) &&
          props.formField.map((value, idx) => (
            <FormField
              // eslint-disable-next-line react/no-array-index-key
              key={`field ${idx}`}
              control={form.control}
              name={String(value.fieldName)}
              render={({ field }) => (
                <FormItem className={value.formItemClasses}>
                  <FormLabel>{value.label}</FormLabel>
                  <FormControl>
                    <Input {...value.componentProps} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        {Boolean(props.requireSubmit) && (
          <Button
            className={props.submitWrapperClasses || 'w-full'}
            type='submit'
          >
            {props.submitText || 'Envíar'}
          </Button>
        )}
      </form>
    </Form>
  )
}

export { FormBox }
