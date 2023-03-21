import {makeAutoObservable} from "mobx";

class IsSearchBlockStore {
    isOpen = false
    constructor() {
        makeAutoObservable(this)
    }
    changeIsOpen(newState: boolean) {
        this.isOpen = newState
    }
}

export default new IsSearchBlockStore()