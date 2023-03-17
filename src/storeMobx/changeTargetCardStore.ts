import {makeAutoObservable} from "mobx";

class ChangeTargetCardStore {
    target: boolean = false
    constructor() {
        makeAutoObservable(this)
    }
    changeTarget (isTarget: boolean) {
        this.target = isTarget
    }
}

export default new ChangeTargetCardStore()