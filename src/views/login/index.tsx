import { z } from 'zod'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router'
import { CardBox } from '@/components/box/card'
import { FormBox } from '@/components/box/form'
import { useAppDataStore } from '@/store'
import { FormFieldsModel } from '@/types/components/form'
import { CredencialesModel } from '@/types/models/app'
import { index as getAppData } from '@/api/common'
import { compareObjects } from '@/utils/obj'

function Login() {
  const changeAuthStatus = useAppDataStore((state) => state.setAuthState)
  const navigate = useNavigate()

  const passRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%&*=]).{8,}$')

  const formSchema = z.object({
    user: z
      .string()
      .min(1, { message: 'Debe tener por lo menos 1 caracter' })
      .trim(),
    password: z
      .string()
      .min(8, { message: 'Debe contener por lo menos 8 caracteres' })
      .regex(passRegex, { message: 'contraseña incorrecta' })
      .trim()
  })

  const defaultValues: CredencialesModel = {
    user: '',
    password: ''
  }

  const formField: FormFieldsModel<CredencialesModel>[] = [
    {
      fieldName: 'user',
      label: 'Nombre de usuario',
      componentProps: {
        autoFocus: true
      }
    },
    {
      fieldName: 'password',
      label: 'Contraseña',
      componentProps: {
        type: 'password'
      }
    }
  ]

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const { credenciales } = await getAppData()
    const compareAuth = compareObjects(values, credenciales)

    if (compareAuth) {
      changeAuthStatus(true, credenciales)
      navigate('/home', { replace: true })
    } else {
      toast.error('Credenciales inválidas', { closeButton: true })
    }
  }
  z
  return (
    <section className='flex h-dvh items-center justify-center'>
      <CardBox
        headerDescription='Ingresa tus datos para iniciar sesión'
        title='Bienvenido'
        titleClasses='text-3xl font-bold'
        wrapperClassses='w-full md:w-[32rem] h-full md:h-fit md:flex-none flex items-center flex-col md:flex-row justify-center'
      >
        <FormBox
          requireSubmit
          defaultValues={defaultValues}
          formField={formField}
          formSchema={formSchema}
          formWrapperClasses='w-full '
          onSubmit={handleSubmit}
        />
      </CardBox>

      <Toaster richColors position='top-right' />
    </section>
  )
}

export default Login
