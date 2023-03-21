import {makeAutoObservable} from "mobx";

class SearchFieldStore {
    stateField = ''
    constructor() {
        makeAutoObservable(this)
    }
    changeField (newValue: string) {
        this.stateField = newValue
    }
}

export default new SearchFieldStore()