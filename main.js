let chronometerDisplay = document.getElementById('chronometerDisplay');

class Chronometer{
    time=0;
    start;
    play(){
        this.start = setInterval(() => {
           console.log(this.time += 1)  
            this.printDisplay();
        }, 1000);

    }
    stop(){
        clearInterval(this.start)
    }
    reset(){
        this.time = 0;
        this.resetDisplay();
    }

    printDisplay(){
        chronometerDisplay.innerHTML = `<h1>${this.time}</h1>`
    }
    resetDisplay(){
        chronometerDisplay.innerHTML = `<h1>${this.time}</h1>`
    }

}



// Escenario 
const cronometro = new Chronometer()


//Accion
// cronometro.play()
// cronometro.stop()
// cronometro.reset()

//Test

console.log(cronometro.time)

/*
cuando se le da play, el cronometro suma 1 por segundo
setInterval(repetir,1000)
*/

