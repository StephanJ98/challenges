import Button from '../Button'
import Display from '../Display'
import styles from './styles.module.css'

const Body = () => {
    return (
        <div className={styles.bodyContainer}>
            <div id={styles.cuerpo}>
                <Display value={'2 + 2 = 4 -> LOL'}/>
                <div id={styles.btnsContainer}>
                    <Button value='7'/>
                    <Button value='8'/>
                    <Button value='9'/>
                    <Button value='+'/>
                    <Button value='4'/>
                    <Button value='5'/>
                    <Button value='6'/>
                    <Button value='-'/>
                    <Button value='1'/>
                    <Button value='2'/>
                    <Button value='3'/>
                    <Button value='*'/>
                    <Button value='0'/>
                    <Button value='CALC'/>
                    <Button value='/'/>
                </div>
            </div>
        </div>
    )
}

export default Body