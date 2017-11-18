import { TemplateResult } from 'lit-html'
import { render } from 'lit-html/lib/lit-extended'

export interface Renderable {
  connectedCallback?(): void
  attributeChangedCallback?(name: string, oldVal: string, newVal: string): void
  render(state: this): TemplateResult
}

interface Newable {
  new(...args: Array<any>): HTMLElement & Renderable
}

export function Component() {
  return (target: Newable): any => {
    return class extends target {
      private renderPromise: Promise<void> | null = null

      static get observedAttributes() {
        return (this.prototype as any).__observedAttributes
      }

      constructor() {
        super()
        this.attachShadow({ mode: 'open' })
      }

      connectedCallback() {
        if (super.connectedCallback) super.connectedCallback()
        render(this.render(this), this.shadowRoot)
      }

      attributeChangedCallback(name: string, oldVal: string, newVal: string) {
        if (oldVal === newVal) return
        if (super.attributeChangedCallback) super.attributeChangedCallback(name, oldVal, newVal)
        this[name] = newVal
        this.scheduleRender()
      }

      scheduleRender() {
        if (this.renderPromise !== null) return
        this.renderPromise = Promise.resolve()
          .then(() => {
            render(this.render(this), this.shadowRoot)
            this.renderPromise = null
          })
      }
    }
  }
}

export function Binding() {
  return (target: any, name: string) => {
    if (!target.__observedAttributes) target.__observedAttributes = [ ]

    target.__observedAttributes.push(name)

    Object.defineProperty(target, name, {
      set: function(val: any) {
        if (!this.__bindings) this.__bindings = { }
        if (this[name] === val) return

        // Update component state
        this.__bindings[name] = val

        // Update DOM
        switch (typeof val) {
          case 'string':
          case 'number':
            this.setAttribute(name, val)
            break
          case 'boolean':
            val ? this.setAttribute(name, '') : this.removeAttribute(name)
            break
        }

        this.scheduleRender()
      },
      get: function() {
        return this.__bindings[name]
      }
    })
  }
}
