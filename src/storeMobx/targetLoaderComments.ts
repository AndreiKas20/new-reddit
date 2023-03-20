import {makeAutoObservable} from "mobx";

class TargetLoaderComments {
    commentsLoader = false
    constructor() {
        makeAutoObservable(this)
    }
    change(newValue: boolean) {
        this.commentsLoader = newValue
    }
}

export default new TargetLoaderComments()