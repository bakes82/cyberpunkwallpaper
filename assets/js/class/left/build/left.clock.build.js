class LeftClockBuild{
    constructor(){
        this.style = {opacity: '0', animation: 'none'}

        this.sec = 0
        this.min = 0
        this.hour = 0
		this.enabled = false
		this.timeFormat = "hh.mm.ss.A"
		this.date = new Date()
		
        this.init()
		
    }


    // init
    init(){
        this.setInterval()
			
		

    }

    // open
    open(){
        this.style.animation = `blank 0.05s 3 ${Math.random()}s linear forwards`
    }

    // get
    getCurrentTime(){
		//alert("gct:" + this.enabled);
		var displayTime = dayjs(this.date).format(this.timeFormat)
		
		if(this.enabled === false)
			{return ``}
			return `${displayTime}`

    }


    // util
    addZero(time){
        return ('' + time).length < 2 ? '0' + time : '' + time
    }


    // interval
    setInterval(){
        this.date = new Date()
		this.enabled = window.timeEnabled
		this.timeFormat = window.timeFormat
        
        setTimeout(() => this.setInterval(), 1000)
    }
}