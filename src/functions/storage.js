import EventEmitter from 'events';
if (!localStorage.getItem("defaultStorage")) {
    localStorage.setItem("defaultStorage", JSON.stringify({}));
}
const storage = {
    state:JSON.parse(localStorage.getItem("defaultStorage")),
    hoverEvent:new EventEmitter(),
    hasStorage:function(){
        if (localStorage.getItem("defaultStorage")) {
            return true;
        }else{
            return false;
        }
    },
    save:function(object){
        let state = this.state;
        for (let variable in object) {
            state[variable]=object[variable];
            // this.state[variable]=object[variable];
        }
        localStorage.setItem("defaultStorage", JSON.stringify(state));
        this.hoverEvent.emit('sync');
    },
    sync:function(component){
        this.hoverEvent.on('sync', ()=>{
            component.forceUpdate();
        });
    }
}
export default storage;