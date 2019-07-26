import { observable, action } from 'mobx'

class AppStore {
    @observable isLogin = false
    @observable username = 'ggc'
    @observable antLang = 'cn';

    @action changeUsername(newName) {
        this.username = newName
    }
    @action changeLang(lang) {
        this.antLang = lang;
    }
}
export default new AppStore