import {makeAutoObservable} from "mobx";

class ListRedditStore {
    typeList: `r/${string}/` | '' = `r/all/`
    constructor() {
        makeAutoObservable(this)
    }
    changeType(newType:`r/${string}/` | '') {
        this.typeList = newType
    }
}

export default new ListRedditStore()