



import {useState, useRef, useEffect} from 'react'


function Stopwatch() {  

const [isRunning , setisRunning] = useState(false)

const [elapsedTime , setElapsedTime] = useState(0)

const intervalIdRef = useRef(null)

const startTimeRef = useRef(0)

useEffect(() => {
    if (isRunning) {
        intervalIdRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current)
        }, 10)
    } else {
        clearInterval(intervalIdRef.current)
        intervalIdRef.current = null
    }

    return () => clearInterval(intervalIdRef.current)
}, [isRunning])

function start() {
    if (isRunning) return
    setisRunning(true)
     startTimeRef.current = Date.now() - elapsedTime
     
     
    
}
function stop() {
    setisRunning(false)



}
function reset() {
    clearInterval(intervalIdRef.current)
    intervalIdRef.current = null
    setElapsedTime(0)
    setisRunning(false)


}
function formatTime() {
        let hours = Math.floor(elapsedTime / 3600000)
        let minutes = Math.floor((elapsedTime % 3600000) / 60000)
        let seconds = Math.floor((elapsedTime % 60000) / 1000)
        let milliseconds = Math.floor((elapsedTime % 1000) / 10)

        hours = hours.toString().padStart(2, '0')
        minutes = minutes.toString().padStart(2, '0')
        seconds = seconds.toString().padStart(2, '0')
        milliseconds = milliseconds.toString().padStart(2, '0')



return `${hours}:${minutes}:${seconds}:${milliseconds}`
}

return(
        <div className='stopwatch'> 
        <div className="display">{formatTime()}</div>
        <div className="controls">
            <button onClick={start} className="start-button">Start</button>
            <button onClick={stop} className="stop-button">Stop</button>
            <button onClick={reset} className="reset-button">Reset</button>

        </div>
  


        </div>)



}

export default Stopwatch 