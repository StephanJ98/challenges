/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import styles from './styles.module.css'

const PHASE = {
    active: 'active',
    rest: 'rest'
}

const CountDown = ({ start, end, activ = 25, rest = 5, stop }) => {
    const [timer, setTimer] = useState(activ * 60)
    const [phase, setPhase] = useState(PHASE.active)
    const [remaining, setRemaining] = useState(0)
    const [step, setStep] = useState(null)
    const [percent, setPercent] = useState(0)

    const getTimestamp = (hour) => {
        const [hours, minutes, seconds] = hour.split(':').map(Number)
        const now = new Date()
        now.setHours(hours, minutes, seconds, 0)

        return now.getTime()
    }

    useEffect(() => {

        const timeDiff = (start, end) => {
            const millisStart = getTimestamp(start.concat(':00'))
            const millisEnd = getTimestamp(end.concat(':00'))
            let diff = (millisEnd / 1000) - (millisStart / 1000)

            diff < 0 ? diff += 24 * 60 * 60 : null

            const hDiff = Math.floor(diff / 3600)
            const mDiff = Math.floor((diff % 3600) / 60)
            const sDiff = diff % 60

            return `${hDiff.toString().padStart(2, "0")}:${mDiff.toString().padStart(2, "0")}:${sDiff.toString().padStart(2, "0")}`
        }

        if (step === null) {
            const [horaS, minS] = new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }).split(':').map(Number)
            const [horaE, minE] = end.split(':').map(Number)
            setStep(100 / (((horaE * 60 + minE) - (horaS * 60 + minS)) * 60))
        }

        // Lleva el timer y syncroniza todos los procesos
        const interval = setInterval(() => {
            setTimer(t => t - 1)

            // Controla el fin de cada fase.
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
                        setPhase(PHASE.active)
                    )
                    break;

                default:
                    break;
            }

            // Recalcula el tiempo de sesión restante
            setRemaining(timeDiff(new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' }), end))

            // Recalcula el porcentage de sesión restante
            setPercent(p => p + step)

            document.querySelector(`.${styles.progress}`).style.width = `${percent}%`

        }, 1000)

        return () => clearInterval(interval)
    }, [activ, end, percent, phase, rest, start, step, timer])


    return (
        <div className={styles.container}>
            <div className={styles.band}>
                <p>Inicio: {start}</p>
                <p>Tiempo restante: {remaining}</p>
                <p>Fin: {end}</p>
                <span className={styles.progressContainer}>
                    <span className={styles.progress}></span>
                </span>
            </div>
            <div className={styles.phase}>
                <div className={styles.phaseString}>
                    <p className={phase === PHASE.active ? styles.active : styles.rest} >Fase {phase === PHASE.active ? 'Trabajo' : 'Descanso'}</p>
                    <div onClick={() => stop()} className={styles.exitBtn}>EXIT</div>
                </div>
            </div>
        </div>
    )
}

export default CountDown