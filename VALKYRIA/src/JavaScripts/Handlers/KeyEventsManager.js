class KeyEventsManager{
    constructor(){
        this.actions = {};
    }

    updateAction(actionName, keys){
        this.actions[actionName].keys = keys;
    }

    getActionByKey(key){
        return Object.values(this.actions).find((action) =>
            action.keys.includes(key.key)
        )
    }

    registerAction(actionName, action){
        this.actions[actionName] = action;
    }
}
