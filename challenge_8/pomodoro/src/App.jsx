import { useState } from 'react'
import BtnInicio from "./components/BtnInicio"
import Input from "./components/Input"
import CountDown from './components/CountDown'
import Display from './components/Display'

function App() {
  const [launch, setLaunch] = useState(false)
  const [durActiv, setDurActiv] = useState(25)
  const [durRest, setDurRest] = useState(5)
  const [end, setEnd] = useState(new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }))

  const start = () => {
    setLaunch(i => !i)
  }

  const stop = () => {
    setLaunch(i => !i)
    location.reload()
  }

  return (
    !launch ? (
      <div className='container'>
        <BtnInicio onClick={() => start()} />
        <div className='configContainer'>
          <Input type='number' value={durActiv} action={setDurActiv} title='Duración ciclo' />
          <Input type='number' value={durRest} action={setDurRest} title='Duración descanso' />
          <Input type="time" value={end} action={setEnd} title='Hora de fin' />
        </div>
      </div>
    ) : (
      <div className='countDownContainer'>
        <CountDown
          start={new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}
          end={end}
          activ={durActiv}
          rest={durRest}
          stop={() => stop()}
        />
        <Display
          end={end}
          activ={durActiv}
          rest={durRest}
        />
      </div>
    )
  )
}

export default App
