import { directive } from 'lit-html'

export function spacify(thing?: Iterable<string>) {
  if (!thing) return ''
  let ret = ''
  for (const v of thing) {
    ret += ` ${v}`
  }
  return ret
}
