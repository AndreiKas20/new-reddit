import {makeAutoObservable} from "mobx";

class WindowYPositionStore {
    yPosition = 0
    constructor() {
        makeAutoObservable(this)
    }

    savePosition(position: number) {
        this.yPosition = position
    }
}

export default new WindowYPositionStore()