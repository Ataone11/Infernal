import React, { useEffect, useState } from 'react'

function CountdownTimer() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const targetDate: any = new Date('2024-09-10T23:59:59') // Fecha objetivo
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
  interface CustomCSSProperties extends React.CSSProperties {
    '--value'?: number // Definir --value como cadena
  }
  return (
    <div className="flex items-end md:items-center justify-center w-full gap-6 count-down-main text-redOmega">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col">
          <span className="countdown font-mono text-[7vw]">
            <span style={{ '--value': days } as CustomCSSProperties}></span>
          </span>
          <h1 className="md:text-4xl">Días</h1>
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-[7vw]">
            <span style={{ '--value': hours } as CustomCSSProperties}></span>
          </span>
          <h1 className="md:text-4xl">Horas</h1>
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-[7vw]">
            <span style={{ '--value': minutes } as CustomCSSProperties}></span>
          </span>
          <h1 className="md:text-4xl">Min</h1>
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-[7vw]">
            <span style={{ '--value': seconds } as CustomCSSProperties}></span>
          </span>
          <h1 className="md:text-4xl">Seg</h1>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
