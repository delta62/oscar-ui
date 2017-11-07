interface ComponentOptions {
  tag: string
  template: string
  styles?: string
}

export function Component(opts: ComponentOptions) {
  return (target: typeof HTMLElement): any => {
    return class extends target {
      static tag = opts.tag

      static get observedAttributes() {
        return (this.prototype as any)._attributes
      }

      constructor() {
        super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        const doc = this.ownerDocument
        const tpl = doc.createElement('template')
        tpl.innerHTML = opts.styles
          ? `<style>${opts.styles}</style>${opts.template}`
          : opts.template

        const clone = tpl.content.cloneNode(true)
        shadowRoot.appendChild(clone)
      }

      attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal === newVal) return
        this[name] = newVal
      }

      $<T extends HTMLElement = HTMLElement>(selector: string) {
        return this.shadowRoot.querySelector(selector) as T | null
      }
    }
  }
}

export function Binding() {
  return (target: any, name: string, descriptor: PropertyDescriptor) => {
    if (!target._attributes) {
      target._attributes = [ ]
    }
    target._attributes.push(name)

    if (descriptor.set) {
      const originalSet = descriptor.set
      descriptor.set = function(val) {
        originalSet.call(this, val)
        switch (typeof val) {
          case 'string':
          case 'number':
            this.setAttribute(name, val)
            break
          case 'boolean':
            val ? this.setAttribute(name, '') : this.removeAttribute(name)
            break
        }
      }
    }
  }
}
