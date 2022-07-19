class RightDateBuild{
    constructor(){
        this.style = {opacity: '0', animation: 'none'}

		this.date = new Date()
		this.dateFormat = "ddd.MM.DD.YYYY"
		this.enabled = false

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


    // create
    create(){
        
    }


    // get
    getCurrentDate(){
		var datedisplay = dayjs(this.date).format(this.dateFormat)
		if(this.enabled === false)
			{return ``}
		return `${datedisplay}`
        //return `${this.days[this.day]}.${this.addZero(this.month)}.${this.addZero(this.date)}.${this.year}`
    }


    // util
    addZero(time){
        return ('' + time).length < 2 ? '0' + time : '' + time
    }


    // interval
    setInterval(){
        this.date = new Date()
		this.enabled = window.dateEnabled
		this.dateFormat = window.dateFormat

        setTimeout(() => this.setInterval(), 1000)
    }
}