import styles from './styles.module.css'

const Button = ({ value }) => {
    return (
        <div className={value === 'CALC' ? `${styles.btns} ${styles.calc}` : styles.btns}>{value}</div>
    )
}

export default Button