import {makeAutoObservable} from "mobx";

class CountCommentsStore {
    countComments = 200;
    constructor() {
        makeAutoObservable(this)
    }
    changeCountComments(newCount: number) {
        this.countComments = newCount
    }
}
export default new CountCommentsStore()