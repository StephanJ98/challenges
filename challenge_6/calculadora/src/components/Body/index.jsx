import { useState, useEffect } from 'react'
import Button from '../Button'
import Display from '../Display'
import styles from './styles.module.css'

const Body = () => {
    const [expression, setExpression] = useState('0')

    useEffect(() => {
        const handleKeyPress = (event) => {
            switch (event.key) {
                case '1':
                    appendValue('1')
                    break;
                case '2':
                    appendValue('2')
                    break;
                case '3':
                    appendValue('3')
                    break;
                case '4':
                    appendValue('4')
                    break;
                case '5':
                    appendValue('5')
                    break;
                case '6':
                    appendValue('6')
                    break;
                case '7':
                    appendValue('7')
                    break;
                case '8':
                    appendValue('8')
                    break;
                case '9':
                    appendValue('9')
                    break;
                case '0':
                    appendValue('0')
                    break;
                case '+':
                    appendValue('+')
                    break;
                case '-':
                    appendValue('-')
                    break;
                case '*':
                    appendValue('*')
                    break;
                case '/':
                    appendValue('/')
                    break;
                case '(':
                    appendValue('(')
                    break;
                case ')':
                    appendValue(')')
                    break;
                case 'Enter':
                    calc()
                    break;
                case 'r':
                    reset()
                    break;
                default:
                    break;
            }
        }

        // Agrega el event listener para escuchar el evento de teclado
        window.addEventListener('keydown', handleKeyPress)

        // Limpieza: Removemos el event listener al desmontar el componente
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    })


    const reset = () => {
        setExpression('0')
    }

    const appendValue = (item) => {
        (expression.includes('=') || expression.includes('Error')) ? setExpression(item) : (
            expression === '0' ? setExpression(item) : setExpression(expression.concat(item))
        )
    }

    const calc = () => {
        try {
            let resultado = eval(expression)
            setExpression(`${expression}=${resultado}`)
        } catch (error) {
            reset()
            setExpression("Error: Operacion invalida")
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

                    <div className={styles.row}>
                        <Button value='(' action={() => appendValue('(')} />
                        <Button value=')' action={() => appendValue(')')} />
                    </div>

                    <Button value='4' action={() => appendValue('4')} />
                    <Button value='5' action={() => appendValue('5')} />
                    <Button value='6' action={() => appendValue('6')} />

                    <div className={styles.row}>
                        <Button value='+' action={() => appendValue('+')} />
                        <Button value='-' action={() => appendValue('-')} />
                    </div>

                    <Button value='1' action={() => appendValue('1')} />
                    <Button value='2' action={() => appendValue('2')} />
                    <Button value='3' action={() => appendValue('3')} />
                    <Button value='*' action={() => appendValue('*')} />
                    <Button value='0' action={() => appendValue('0')} />
                    <Button value='RESET' action={() => reset()} />
                    <Button value='=' action={() => calc()} />
                    <Button value='/' action={() => appendValue('/')} />
                </div>
            </div>
        </div>
    )
}

export default Body