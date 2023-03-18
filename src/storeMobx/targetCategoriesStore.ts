import {makeAutoObservable} from "mobx";

class TargetCategoriesStore {
    targetCategories = 'hot'
    constructor() {
        makeAutoObservable(this)
    }
    changeTarget(newTarget:string) {
        this.targetCategories = newTarget
    }
}

export default new TargetCategoriesStore()