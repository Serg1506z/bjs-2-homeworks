class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback){
        if(!time || !callback ){
            throw new Error('Отсутствуют обязательные аргументы'); 
        }
        if(this.alarmCollection.find(alarm => alarm.time === time)){
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({
            callback,
            time,
            canCall : true
        })
    }
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
    }
    getCurrentFormattedTime(){
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        return `${h}:${m}` 
    }
    start(){
        if(this.intervalId !== null) return;
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {
                if(this.getCurrentFormattedTime() === alarm.time && alarm.canCall){
                    alarm.callback()
                    alarm.canCall = false;
                }
            })
        })   
    }
    stop(){
        clearInterval(this.intervalId)
        this.intervalId = null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach(alarm => alarm.canCall = true)
    }
    clearAlarms(){
        this.stop()
        this.alarmCollection = [];
    }
}