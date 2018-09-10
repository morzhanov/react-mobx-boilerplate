import RootStore from './rootStore'
import RouterStore from './routerStore'
import UserModel from '../models/UserModel'

export function createStores(history, user) {
  const rootStore = RootStore.create({ user }, { user: UserModel })
  const routerStore = new RouterStore(history)
  return {
    rootStore,
    routerStore
  }
}
