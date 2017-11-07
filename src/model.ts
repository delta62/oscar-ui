import { Map } from 'immutable'

type SubscribeFn = (model: Map<string, any>) => void
type UnsubscribeFn = () => void

interface ModelChanges {
  $push?: Array<any>
  $set?: Array<any>
}

const subscribers: Array<SubscribeFn> = [ ]
let model: Map<string, any> = Map()

export function present(changes: ModelChanges) {
  console.log('present', changes)
  const originalModel = model

  if (changes.$push) {
    for (const key in changes.$push) {
      const path = key.split('.')
      model = model.updateIn(path, list => list.push(changes.$push[key]))
    }
  }

  if (changes.$set) {
    for (const key in changes.$set) {
      model = model.set(key, changes.$set[key])
    }
  }

  const changed = originalModel === model
  if (changed) {
    subscribers.forEach(s => s(model))
  }
}

export function subscribe(onChange: SubscribeFn): UnsubscribeFn {
  subscribers.push(onChange)
  return () => {
    const idx = subscribers.indexOf(onChange)
    subscribers.splice(idx, 1)
  }
}
