import { observable, action } from 'mobx'

class AppStore {
    @observable isLogin = false
    @observable username = 'ggc'

    @action changeUsername(newName) {
        this.username = newName
    }
}
export default new AppStore