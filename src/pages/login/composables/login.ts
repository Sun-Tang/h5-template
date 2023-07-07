import { login } from '@/api/manager'
import { useUserStore } from '~@/store/user'

export const useLogin = () => {
  const userStore = useUserStore()

  const router = useRouter()

  const form = reactive({
    username: '',
    password: '',
  })

  const loading = ref<boolean>(false)

  const onSubmit = () => {
    loading.value = true
    const { username, password } = form
    login(username, password).then((res: any) => {
      userStore.setToken(res?.token)
      router.push('/')
    }).finally(() => {
      loading.value = false
    })
  }

  return {
    form,
    loading,
    onSubmit,
  }
}
