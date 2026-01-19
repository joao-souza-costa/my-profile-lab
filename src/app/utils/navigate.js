import routes from '@/router/routes'
import { shallowRef } from 'vue'

export const currentComponent = shallowRef(routes[0])

export function navigate(route) {
  //pegar esse navigation e criar uma composition
  const key = routes.findIndex((v) => v.name === route.name)

  if (key === -1) {
    console.error('route does not exist')
    return
  }

  currentComponent.value = routes[key]
}
