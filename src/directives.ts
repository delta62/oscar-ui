import { directive, AttributePart } from 'lit-html'

export function spacify(things: Array<string>) {
  return directive(part => {
    part.instance
  })
}

export function show(condition: boolean) {
  return directive((part: AttributePart) => {
    const el: HTMLElement = part.element as HTMLElement
    el.style.display = condition ? '' : 'none'
  })
}
