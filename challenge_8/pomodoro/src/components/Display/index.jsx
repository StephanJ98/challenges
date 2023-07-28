/* eslint-disable react/prop-types */
import styles from './styles.module.css'
import { useState, useEffect } from 'react'

const PHASE = {
  active: 'active',
  rest: 'rest'
}

const Display = ({ end, activ, rest }) => {
  const [timer, setTimer] = useState(activ * 60)
  const [phase, setPhase] = useState(PHASE.active)
  const [cicle, setCicle] = useState(0)

  const timerToString = (timer) => {
    const horas = Math.floor(timer / 3600);
    const minutos = Math.floor((timer % 3600) / 60);
    const segundosRestantes = timer % 60;

    const formatoHoras = horas.toString().padStart(2, '0');
    const formatoMinutos = minutos.toString().padStart(2, '0');
    const formatoSegundos = segundosRestantes.toString().padStart(2, '0');

    return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {

      let now = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })

      setTimer(t => t - 1)

      switch (phase) {
        case PHASE.active:
          timer == 0 && (
            setTimer(rest * 60),
            setPhase(PHASE.rest)
          )
          break;
        case PHASE.rest:
          timer == 0 && (
            setTimer(activ * 60),
            setCicle(c => c + 1),
            setPhase(PHASE.active)
          )
          break;

        default:
          break;
      }

      if (now === end) {
        alert('Sesión terminada !!')
        location.reload()
      }


    }, 1000)

    return () => clearInterval(interval)
  }, [activ, end, phase, rest, timer])

  return (
    <div className={styles.container}>
      <p className={styles.cicleCounter}>Ciclo Nº {cicle}</p>
      <p className={styles.timer} style={{backgroundColor: `${phase === PHASE.active ? 'green' : 'yellow'}`}}>{timerToString(timer)}</p>
    </div>
  )
}

export default Display