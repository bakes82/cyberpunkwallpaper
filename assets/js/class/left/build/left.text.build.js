// import METHOD from '../method/left.text.method.js'

class LeftTextBuild{
    constructor({type, count, proxy}){
        this.parentProxy = proxy

        this.type = type
        this.auth = LeftTextMethod.createAuth(type)

        this.iter = 6
        this.load = [
            Array.from({length: this.iter}, () => '-'), 
            Array.from({length: this.iter}, () => '\\'), 
            Array.from({length: this.iter}, () => '|'), 
            Array.from({length: this.iter}, () => '/'), 
        ].flat()
        this.loadIdx = 0

        this.len = count
        this.el = []

        this.currentTime = window.performance.now()
        this.oldTime = window.performance.now()
        this.playInterval = true
        this.timer = Math.random() * 500 + 500
	
		this.showRandom = true
		this.msg1percent = 10
		this.msg1 = "payload sent" // MSG Plus (10000kb)
		this.msg2percent = 10
		this.msg2 = "error code" // MSG Plus (1000)
		this.msg3percent = 10
		this.msg3 = "blocked port" // MSG Plus (10000)
		this.msg4percent = 10
		this.msg4 = "lost signal" // MSG Plus (60000ms)
		this.msg5percent = 10
		this.msg5 = "ok"
		this.msg6percent = 10
		this.msg6 = "completed"
		this.msg7percent = 10
		this.msg7 = "ok"
		this.msg8percent = 10
		this.msg8 = "disconnected"
		this.msg9percent = 10
		this.msg9 = "unknown"
		this.msg10percent = 10
		this.msg10 = "connection closed"
		this.defaultMsg = "found"
		this.maxLogMessageDelay = 60000
		
		var values = []
	
        this.init()
    }


    // init
    init(){
		this.msg1percent = window.message1percent
		this.msg1 = window.message1
		this.msg2percent = window.message2percent
		this.msg2 = window.message2
		this.msg3percent = window.message3percent
		this.msg3 = window.message3
		this.msg4percent = window.message4percent
		this.msg4 = window.message4
		this.msg5percent = window.message5percent
		this.msg5 = window.message5
		this.msg6percent = window.message6percent
		this.msg6 =window.message6
		this.msg7percent = window.message7percent
		this.msg7 = window.message7
		this.msg8percent = window.message8percent
		this.msg8 = window.message8
		this.msg9percent = window.message9percent
		this.msg9 = window.message9
		this.msg10percent = window.message10percent
		this.msg10 = window.message10
        this.create()
    }


    // create
    create(){
        this.el = Array.from({length: this.len}, (_, i) => ({
            key: i,
            text: '',
            style: {
                opacity: 1 - 1 / this.len * i,
            }
        }))
    }

    // interval
    setInterval(){
		this.msg1percent = window.message1percent
		this.msg1 = window.message1
		this.msg2percent = window.message2percent
		this.msg2 = window.message2
		this.msg3percent = window.message3percent
		this.msg3 = window.message3
		this.msg4percent = window.message4percent
		this.msg4 = window.message4
		this.msg5percent = window.message5percent
		this.msg5 = window.message5
		this.msg6percent = window.message6percent
		this.msg6 =window.message6
		this.msg7percent = window.message7percent
		this.msg7 = window.message7
		this.msg8percent = window.message8percent
		this.msg8 = window.message8
		this.msg9percent = window.message9percent
		this.msg9 = window.message9
		this.msg10percent = window.message10percent
		this.msg10 = window.message10
		
		this.maxLogMessageDelay = window.maxLogMessageDelay
		
		this.showRandom = window.showRandomLogMessages
		
        this.currentTime = window.performance.now()
        if(this.currentTime - this.oldTime > this.timer){
            this.logTexts()
            this.oldTime = this.currentTime
        }
    }
    logTexts(){
        this.timer = Math.random() * 500 + 500
        this.auth = LeftTextMethod.createAuth(this.type)
		var msg = this.defaultMsg
		
		var sumpercents = this.msg1percent + this.msg2percent + this.msg3percent + this.msg4percent + this.msg5percent + this.msg6percent + this.msg7percent + this.msg8percent + this.msg9percent + this.msg10percent
		if(sumpercents > 1){
			this.showRandom = false
			msg = "percents (" +sumpercents*100+") > 100"
		}
		
		if(this.showRandom)
		{
			var ms = Math.random() * (this.maxLogMessageDelay - 0) + 0
			this.timer = Math.random() * (ms - 100) + 100
			
			var choice = Math.floor(Math.random() * (10000 - 1 + 1) + 1)
			var kb = Math.floor(Math.random() * (100000 - 1000 + 1) + 1000)
			
			var values = []
			for (var i = 1; i <= 10000; i++) {
				values.push(i)
			}
					
			var result1 = [];		
			
			var qty = 10000 * this.msg1percent
			if(qty <= values.length){
				var shuffled = values.sort(function(){return .5 - Math.random()})
				result1 = shuffled.slice(0,qty);

				values = values.filter( ( el ) => !result1.includes( el ) );
				
				if(result1.includes(choice))
				{
					msg = this.msg1 + "("+ (Math.floor(Math.random() * (99999 - 1 + 1) + 1)).toFixed(0) + "kb)"
				}
			}
			
			var result2 = [];		
			
			var qty = 10000 * this.msg2percent
			if(qty <= values.length){
				var shuffled = values.sort(function(){return .5 - Math.random()});
				result2 = shuffled.slice(0,qty);
				
				values = values.filter( ( el ) => !result2.includes( el ) );
				
				if(result2.includes(choice))
				{
					msg = this.msg2 + "("+ (Math.floor(Math.random() * (9999 - 1 + 1) + 1)).toFixed(0) + ")"
				}
			}
			
			var result3 = [];		
			
			var qty = 10000 * this.msg3percent
			// msg += "["+qty+"]"
			if(qty <= values.length){
				var shuffled = values.sort(function(){return .5 - Math.random()});
				result3 = shuffled.slice(0,qty);
				
				values = values.filter( ( el ) => !result3.includes( el ) );
				
				if(result3.includes(choice))
				{
					msg = this.msg3 + "("+ (Math.floor(Math.random() * (99999 - 1 + 1) + 1)).toFixed(0) + ")"
				}
			}
			
			var result4 = [];		
			
			var qty = 10000 * this.msg4percent
			// msg += "["+qty+"]"
			if(qty <= values.length){
				var shuffled = values.sort(function(){return .5 - Math.random()});
				result4 = shuffled.slice(0,qty);
				
				values = values.filter( ( el ) => !result4.includes( el ) );
				
				if(result4.includes(choice))
				{
					msg = this.msg4 + "("+ ms.toFixed(0) +"ms)"
				}
			}
			
			var result5 = [];		
			
			var qty = 10000 * this.msg5percent
			// msg += "["+qty+"]"
			if(qty <= values.length){
				var shuffled = values.sort(function(){return .5 - Math.random()});
				result5 = shuffled.slice(0,qty);
				
				values = values.filter( ( el ) => !result5.includes( el ) );
				
				if(result5.includes(choice))
				{
					msg = this.msg5
				}
			}
			
			var result6 = [];		
			
			var qty = 10000 * this.msg6percent
			// msg += "["+qty+"]"
			if(qty <= values.length){
				var shuffled = values.sort(function(){return .5 - Math.random()});
				result6 = shuffled.slice(0,qty);
				
				values = values.filter( ( el ) => !result6.includes( el ) );
				
				if(result6.includes(choice))
				{
					msg = this.msg6
				}
			}
			
			var result7 = [];		
			
			var qty = 10000 * this.msg7percent
			// msg += "["+qty+"]"
			if(qty <= values.length){
				var shuffled = values.sort(function(){return .5 - Math.random()});
				result7 = shuffled.slice(0,qty);
				
				values = values.filter( ( el ) => !result7.includes( el ) );
				
				if(result7.includes(choice))
				{
					msg = this.msg7
				}
			}
			
			var result8 = [];		
			
			var qty = 10000 * this.msg8percent
			// msg += "["+qty+"]"
			if(qty <= values.length){
				var shuffled = values.sort(function(){return .5 - Math.random()});
				result8 = shuffled.slice(0,qty);
				
				values = values.filter( ( el ) => !result8.includes( el ) );
				
				if(result8.includes(choice))
				{
					msg = this.msg8
				}
			}
			
			var result9 = [];		
			
			var qty = 10000 * this.msg9percent
			// msg += "["+qty+"]"
			if(qty <= values.length){
				var shuffled = values.sort(function(){return .5 - Math.random()});
				result9 = shuffled.slice(0,qty);
				
				values = values.filter( ( el ) => !result9.includes( el ) );
				
				if(result9.includes(choice))
				{
					msg = this.msg9
				}
			}
			
			var result10 = [];		
			
			var qty = 10000 * this.msg10percent
			// msg += "["+qty+"]"
			if(qty <= values.length){
				var shuffled = values.sort(function(){return .5 - Math.random()});
				result10 = shuffled.slice(0,qty);
				
				values = values.filter( ( el ) => !result10.includes( el ) );
				
				if(result10.includes(choice))
				{
					msg = this.msg10
				}
			}
		}
		        
        const temp = this.el.map((e, i) => i === 0 ? e.text.slice(0, e.text.length - 1) + msg  : e.text)
        
        for(let i = 1; i < this.el.length; i++){
            this.el[i].text = temp[i - 1]
        }
    }


    // animate
    animate(){
        if(!this.parentProxy.play){
            this.oldTime = window.performance.now()
            return
        }

        this.animateText()
        this.setInterval()
    }
    animateText(){
        this.el[0].text = `${this.auth}... ${this.load[this.loadIdx]}`

        this.loadIdx = (this.loadIdx + 1) % this.load.length
    }


    // get
    get(){
        return this.el
    }
}