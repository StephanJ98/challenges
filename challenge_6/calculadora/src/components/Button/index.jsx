import styles from './styles.module.css'

const Button = ({ value, action }) => {
    return (
        <div
            className={styles.btns}
            onClick={() => action()}
        >
            {value}
        </div>
    )
}

export default Button