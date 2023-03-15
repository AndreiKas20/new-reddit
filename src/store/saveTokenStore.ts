import {makeAutoObservable} from "mobx";

class SaveTokenStore {
    token = 'undefined'
    constructor() {
        makeAutoObservable(this)
    }

    saveToken(token:string) {
        this.token = token
    }
}

export default new SaveTokenStore()