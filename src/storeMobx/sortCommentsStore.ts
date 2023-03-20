import {sortCommentsType} from "../../types/sortsCommentsType";
import {makeAutoObservable} from "mobx";

class SortCommentsStore {
    sortCommentsState:sortCommentsType = 'top'
    constructor() {
        makeAutoObservable(this)
    }
    changeStateSort(newState: sortCommentsType) {
        this.sortCommentsState = newState
    }
}

export default new SortCommentsStore()