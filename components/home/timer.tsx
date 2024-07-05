import { useEffect, useState } from 'react'

function CountdownTimer() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const targetDate: any = new Date('2024-08-31T23:59:59') // Fecha objetivo
    const intervalId = setInterval(() => {
      const now: any = new Date()
      const difference = targetDate - now
      console.log(targetDate)
      console.log(now)
      console.log(difference)
      console.log(intervalId)
      if (difference <= 0) {
        clearInterval(intervalId)
        // Puedes hacer algo cuando el tiempo llegue a cero
        console.log('¡Tiempo terminado!')
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        )
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex items-end md:items-center justify-center w-full gap-6 count-down-main">
      <div className="flex gap-3 sm:gap-1   flex-row bg-[#2A303C] h-36 rounded-lg overflow-hidden pt-2 pr-3 sm:pt-0 sm:pr-0">
        <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
          <div className="h-16 sm:h-20 bg-[#2A303C]">
            <div className="h-[60px] flex justify-center bg-[#2A303C] sm:text-3xl text-xl !text-[#A6ADBB]">
              <div
                className={
                  days >= 0 && hours === 23 && minutes === 59 && seconds === 59
                    ? 'animate-timer'
                    : 'relative top-5'
                }
              >
                {days}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
              {days === 1 ? 'Day' : 'Days'}
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
          <div className="h-16 sm:h-20 bg-[#2A303C]">
            <div className="h-[60px] flex justify-center bg-[#2A303C] sm:text-3xl text-xl !text-[#A6ADBB]">
              <div
                className={
                  hours >= 0 && minutes === 59 && seconds === 59
                    ? 'animate-timer'
                    : 'relative top-5'
                }
              >
                {hours}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
              {hours === 1 ? 'Hour' : 'Hours'}
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
          <div className="h-16 sm:h-20 bg-[#2A303C]">
            <div className="h-[60px] flex justify-center bg-[#2A303C] sm:text-3xl text-xl !text-[#A6ADBB]">
              <div
                className={
                  minutes >= 0 && seconds === 59
                    ? 'animate-timer'
                    : 'relative top-5'
                }
              >
                {minutes}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
              {minutes === 1 ? 'Minute' : 'Minutes'}
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
          <div className="h-16 sm:h-20 bg-[#2A303C]">
            <div className="h-[60px] flex justify-center  bg-[#2A303C] overflow-hidden sm:text-3xl text-xl text-[#A6ADBB]">
              <div>{seconds}</div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
              {seconds === 1 ? 'Second' : 'Seconds'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
