interface RouteDefinition<T extends HTMLElement> {
  path: string
  component: T
}

const registeredRoutes: Array<RouteDefinition<any>> = [ ]
let registeredOutlet: HTMLElement | null = null

export function init(ctx: Window, routes: Array<RouteDefinition<any>>) {
  routes.forEach(r => registeredRoutes.push(r))

  window.onpopstate = e => {
    const { path } = e.state
    updateOutletContents(path)
  }
}

export function navigate(path: string) {
  // Update address bar
  window.history.pushState({ path }, '', path)
  updateOutletContents(path)
}

function updateOutletContents(path: string) {
  const route = registeredRoutes.find(r => r.path === path || r.path === '*')
  if (!route) {
    throw new Error(`Cannot find route handler for ${path}`)
  }
  const el = document.createElement(route.component.tagName);
  (registeredOutlet as any).component = el
}

export function registerOutlet(outlet) {
  registeredOutlet = outlet
  navigate(window.location.pathname)
}

export function back() {
  window.history.back()
}
