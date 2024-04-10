import { type ZodType } from 'zod'

export interface FormProps<T> {
  formSchema: ZodType
  formField: FormFieldsModel<T>[]
  formWrapperClasses?: string
  submitText?: string
  requireSubmit?: boolean
  submitWrapperClasses?: string
  defaultValues: T
  onSubmit: <S>(values: S) => Promise<void>
}

export interface FormFieldsModel<T> {
  fieldName: keyof T
  label: string
  formItemClasses?: string
  componentProps?: ComponentProp
}

interface ComponentProp {
  [k: string]: unknown
}
