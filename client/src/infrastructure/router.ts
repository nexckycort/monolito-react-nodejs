import { lazy } from 'react'

const HomeView = lazy(async () => await import('infrastructure/pages/Home'))

interface Routes {
  path: string
  title: string
  component: React.FC
  children?: Routes[]
}

const appRoutes: Routes[] = [
  {
    title: 'Home',
    path: '/',
    component: HomeView
  }
]

const allRoutes: any[] = []
function AppRouting (routes = appRoutes, path = ''): Routes[] {
  allRoutes.length = 0
  routes.forEach(({ ...route }) => {
    route.path = [path, route.path].join('')
    if (route.children !== undefined) {
      AppRouting(route.children, route.path)
      Reflect.deleteProperty(route, 'children')
      allRoutes.unshift(route)
    } else {
      allRoutes.push(route)
    }
  })
  return allRoutes as Routes[]
}

export default AppRouting
