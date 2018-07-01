import RootStore from './RootStore'
import RouterStore from './RouterStore'
import UserModel from '../models/UserModel'

export function createStores(history, user) {
  const rootStore = RootStore.create({ user }, { user: UserModel })
  const routerStore = new RouterStore(history)
  return {
    rootStore,
    routerStore
  }
}
