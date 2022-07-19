// import APP from './class/app/app.js'
// import MAP from './class/map/map.js'
// import OPEN from './class/open/open.js'
// import LEFT from './class/left/left.js'
// import RIGHT from './class/right/right.js'

//global variable
window.timeEnabled = false
window.timeFormat = "hh.mm.ss.A"
window.dateEnabled = false
window.dateFormat = "ddd.MM.DD.YYYY"
window.maxVerticalBars = 3
window.message1 = ""
window.message2 = ""
window.message3 = ""
window.message4 = ""
window.message5 = ""
window.message6 = ""
window.message7 = ""
window.message8 = ""
window.message9 = ""
window.message10 = ""
window.message1percent = 0
window.message2percent = 0
window.message3percent = 0
window.message4percent = 0
window.message5percent = 0
window.message6percent = 0
window.message7percent = 0
window.message8percent = 0
window.message9percent = 0
window.message10percent = 0
window.showRandomLogMessages = true
window.maxLogMessageDelay = 60000
window.boostAudioEffect = 3.5

new Vue({
    el: '#wrap',
    data(){
        return{
            musics: [{path: 'sadf', title: 'asdf', duration: '00:00'}],
            objectModules: {
                app: App,
                map: Map
            },
            elementModules: {
                left: Left,
                right: Right,
                open: Open,
            },
            elements: {
                left: null,
                right: null,
                open: null,
            },
            volume: 60
        }
    },
    mounted(){
        this.init()
    },
    watch: {
        currentVolume(){
            if(!this.elements['left']) return

            this.getComp('left', 'player').setVolume(this.volume)
        }
    },
    computed: {
        getElement(){
            return (name, child) => {
                if(!this.elements[name]) return []
                else return this.elements[name].get(child)
            }
        },
        getStyle(){
            return (name, child) => {
                if(!this.elements[name]) return {}
                else return this.getComp(name, child).style
            }
        },
        currentMusicTitle(){
            if(!this.elements['left']) return 'Current Music'

            const music = this.getComp('left', 'player').currentMusic()

            if(!music) return 'Current Music'
            else return music.title
        },
        currentAudioTime(){
            if(!this.elements['left']) return {transform: 'scaleX(0)'}
            
            const crtTime = this.getComp('left', 'player').currentAudioTime()
            const duration = this.getComp('left', 'player').currentAudioDuration()
            const scaleX = isNaN(duration) ? 0 : crtTime / duration

            return {transform: `scaleX(${scaleX})`}
        },
        togglePlayButtonImage(){
            if(!this.elements['left']) return {backgroundImage: `url('./assets/src/play.png')`}

            const audioState = this.getComp('left', 'player').isPlaying()
            return {backgroundImage: audioState ? `url('./assets/src/pause.png')` : `url('./assets/src/play.png')`}
        },
        currentVolumeBar(){
            if(!this.elements['left']) return {transform: 'scaleX(0)'}
            return {transform: `scaleX(${this.volume / 100})`}
        },
        currentVolume(){
            return this.volume
        },
        toggleTypeButtonImage(){
            if(!this.elements['left']) return {backgroundImage: `url('./assets/src/all.png')`}
            
            const isLoop = this.getComp('left', 'player').getAudioLoop()
            return {backgroundImage: isLoop ? `url('./assets/src/one.png')` : `url('./assets/src/all.png')`}
        },
        currentTime(){
            if(!this.elements['left']) return '00:00:00'
            return this.getComp('left', 'clock').getCurrentTime()
        },
        currentDate(){
            if(!this.elements['right']) return '0000.00.00.Sat'
            return this.getComp('right', 'date').getCurrentDate()
        }
    },
    methods: {
        init(){
            this.initThree()
            this.initElement()
            this.animate()

            window.addEventListener('resize', this.onWindowResize, false)
			
			window.wallpaperPropertyListener = {
			applyUserProperties: ((properties) => this.updateProps(properties))
		}
			
        },

updateProps(properties){
					if (properties.showtime) {
						window.timeEnabled = properties.showtime.value
					}	

					if (properties.timeformat) {
						window.timeFormat = properties.timeformat.value
					}			
	
					if (properties.showdate) {
						window.dateEnabled = properties.showdate.value
					}	

					if (properties.dateformat) {
						window.dateFormat = properties.dateformat.value
					}	

					if (properties.maxverticalbars) {					
						window.maxVerticalBars = properties.maxverticalbars.value
					}						
					
					if (properties.message1visibilitypercent) {
						window.message1percent = properties.message1visibilitypercent.value	/ 100				
					}		
					
					if (properties.message2visibilitypercent) {
						window.message2percent = properties.message2visibilitypercent.value	/ 100					
					}
					
					if (properties.message3visibilitypercent) {
						window.message3percent = properties.message3visibilitypercent.value	/ 100					
					}
					
					if (properties.message4visibilitypercent) {
						window.message4percent = properties.message4visibilitypercent.value	/ 100					
					}
					
					if (properties.message5visibilitypercent) {
						window.message5percent = properties.message5visibilitypercent.value	/ 100					
					}
					
					if (properties.message6visibilitypercent) {
						window.message6percent = properties.message6visibilitypercent.value	/ 100					
					}
					
					if (properties.message7visibilitypercent) {
						window.message7percent = properties.message7visibilitypercent.value	/ 100					
					}
					
					if (properties.message8visibilitypercent) {
						window.message8percent = properties.message8visibilitypercent.value	/ 100					
					}
					
					if (properties.message9visibilitypercent) {
						window.message9percent = properties.message9visibilitypercent.value	/ 100					
					}
					
					if (properties.message10visibilitypercent) {
						window.message10percent = properties.message10visibilitypercent.value / 100					
					}
					
					if (properties.message1) {
						window.message1 = properties.message1.value					
					}
					
					if (properties.message2) {
						window.message2 = properties.message2.value					
					}
					
					if (properties.message3) {
						window.message3 = properties.message3.value					
					}
					
					if (properties.message4) {
						window.message4 = properties.message4.value					
					}
					
					if (properties.message5) {
						window.message5 = properties.message5.value					
					}
					
					if (properties.message6) {
						window.message6 = properties.message6.value					
					}
					
					if (properties.message7) {
						window.message7 = properties.message7.value					
					}
					
					if (properties.message8) {
						window.message8 = properties.message8.value					
					}
					
					if (properties.message9) {
						window.message9 = properties.message9.value					
					}
					
					if (properties.message10) {
						window.message10 = properties.message10.value					
					}			
					
					if(properties.showrandomlogmessages) {
						window.showRandomLogMessages = properties.showrandomlogmessages.value					
					}			
					
					if(properties.maxlogtime)
					{
						window.maxLogMessageDelay = properties.maxlogtime.value
					}
					
					if(properties.boostaudioeffect)
					{
						window.boostAudioEffect = properties.boostaudioeffect.value
					}
										
					var per10 = window.message1percent + window.message2percent + window.message3percent + window.message4percent + window.message5percent + window.message6percent + window.message7percent + window.message8percent + window.message9percent
					if( per10 >= 1)
					{
						window.message10percent = 0 
					}
					
					var per9 = window.message1percent + window.message2percent + window.message3percent + window.message4percent + window.message5percent + window.message6percent + window.message7percent + window.message8percent
					if( per9 >= 1)
					{
						window.message10percent = 0 
						window.message9percent = 0
					}
					
					var per8 = window.message1percent + window.message2percent + window.message3percent + window.message4percent + window.message5percent + window.message6percent + window.message7percent
					if( per8 >= 1)
					{
						window.message10percent = 0 
						window.message9percent = 0
						window.message8percent = 0
					}
					
					var per7 = window.message1percent + window.message2percent + window.message3percent + window.message4percent + window.message5percent + window.message6percent
					if( per7 >= 1)
					{
						window.message10percent = 0 
						window.message9percent = 0
						window.message8percent = 0
						window.message7percent = 0
					}
					
					var per6 = window.message1percent + window.message2percent + window.message3percent + window.message4percent + window.message5percent
					if( per6 > 1)
					{
						window.message10percent = 0 
						window.message9percent = 0
						window.message8percent = 0
						window.message7percent = 0
						window.message6percent = 0
					}
					
					var per5 = window.message1percent + window.message2percent + window.message3percent + window.message4percent
					if( per5 >= 1)
					{
						window.message10percent = 0 
						window.message9percent = 0
						window.message8percent = 0
						window.message7percent = 0
						window.message6percent = 0
						window.message5percent = 0
					}
					
					var per4 = window.message1percent + window.message2percent + window.message3percent
					if( per4 >= 1)
					{
						window.message10percent = 0 
						window.message9percent = 0
						window.message8percent = 0
						window.message7percent = 0
						window.message6percent = 0
						window.message5percent = 0
						window.message4percent = 0
					}
					
					var per3 = window.message1percent + window.message2percent
					if( per3 >= 1)
					{
						window.message10percent = 0 
						window.message9percent = 0
						window.message8percent = 0
						window.message7percent = 0
						window.message6percent = 0
						window.message5percent = 0
						window.message4percent = 0
						window.message3percent = 0
					}
					
					var per2 = window.message1percent
					if( per2 >= 1)
					{
						window.message10percent = 0 
						window.message9percent = 0
						window.message8percent = 0
						window.message7percent = 0
						window.message6percent = 0
						window.message5percent = 0
						window.message4percent = 0
						window.message3percent = 0
						window.message2percent = 0
					}
					
					//There is no per1, should always store value from first option
					
	},

        // three
        initThree(){
            for(const module in this.objectModules){
                const instance = this.objectModules[module]
                
                OBJECT[module] = new instance(OBJECT)
            }
        },
        resizeThree(){
            for(const i in OBJECT){
                if(!OBJECT[i].resize) continue
                OBJECT[i].resize(OBJECT)
            }
        },
        renderThree(){
            for(const i in OBJECT){
                if(!OBJECT[i].animate) continue
                OBJECT[i].animate(OBJECT)
            }
        },


        // element
        addElement(){
            for(const module in this.elementModules){
                this.elements[module] = null
            } 
        },
        initElement(){
            for(const module in this.elementModules){
                const instance = this.elementModules[module]

                this.elements[module] = new instance({...OBJECT, ...this.elements, musics: this.musics})
            }  
        },
        resizeElement(){
            for(const i in this.elements){
                if(!this.elements[i].resize) continue
                this.elements[i].resize(OBJECT)
            }
        },
        animateElement(){
            for(const i in this.elements){
                if(!this.elements[i].animate) continue
                this.elements[i].animate(OBJECT)
            }
        },
        getComp(name, child){
            return this.elements[name].getComp(child)
        },


        // audio
        playAudio(idx){
            this.getComp('left', 'player').play(idx, true)
        },
        onClickPlayButton(){
            this.getComp('left', 'player').playByButton()
        },
        onClickStopButton(){
            this.getComp('left', 'player').stop()
        },
        onClickPrevButton(){
            this.getComp('left', 'player').moveToPrev()
        },
        onClickNextButton(){
            this.getComp('left', 'player').moveToNext()
        },
        onClickTypeButton(){
            this.getComp('left', 'player').toggleAudioLoop()
        },


        // event
        onWindowResize(){
            this.resizeThree()
        },


        // render
        render(){
            this.renderThree()
            TWEEN.update()
        },
        animate(){
            this.render()
            this.animateElement()
            // requestAnimationFrame(this.animate)
            requestIdleCallback(this.animate)
        }
    }
})