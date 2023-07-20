import { useState } from 'react'
import Button from '../Button'
import Display from '../Display'
import styles from './styles.module.css'

const Body = () => {
    const [expression, setExpression] = useState('0')

    const reset = () => {
        setExpression('0')
    }

    const appendValue = (item) => {
        expression === '0' ? setExpression(item) : setExpression(expression.concat(item))
    }

    const calc = () => {
        try {
            let resultado = eval(expression)
            setExpression(`${expression}=${resultado}`)
        } catch (error) {
            reset()
            console.error("Error: Operación inválida")
        }
    }

    return (
        <div className={styles.bodyContainer}>
            <div id={styles.cuerpo}>
                <Display value={expression} />
                <div id={styles.btnsContainer}>
                    <Button value='7' action={() => appendValue('7')} />
                    <Button value='8' action={() => appendValue('8')} />
                    <Button value='9' action={() => appendValue('9')} />
                    <Button value='+' action={() => appendValue('+')} />
                    <Button value='4' action={() => appendValue('4')} />
                    <Button value='5' action={() => appendValue('5')} />
                    <Button value='6' action={() => appendValue('6')} />
                    <Button value='-' action={() => appendValue('-')} />
                    <Button value='1' action={() => appendValue('1')} />
                    <Button value='2' action={() => appendValue('2')} />
                    <Button value='3' action={() => appendValue('3')} />
                    <Button value='*' action={() => appendValue('*')} />
                    <Button value='0' action={() => appendValue('0')} />
                    <Button value='RESET' action={() => reset()} />
                    <Button value='CALC' action={() => calc()} />
                    <Button value='/' action={() => appendValue('/')} />
                </div>
            </div>
        </div>
    )
}

export default Body