import {makeAutoObservable} from "mobx";

class TargetLoaderCommentsStore {
    commentsLoader = false
    constructor() {
        makeAutoObservable(this)
    }
    change(newValue: boolean) {
        this.commentsLoader = newValue
    }
}

export default new TargetLoaderCommentsStore()