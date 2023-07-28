/* eslint-disable react/prop-types */
import styles from './styles.module.css'

const Input = ({ type, value, action, title }) => {

    const handleChange = (e) => {
        action(e.target.value)
    }
    
    return (
        <div className={styles.inputContainer}>
            <p>{title}</p>
            <input
                className={styles.input}
                type={type}
                value={value}
                onChange={(event) => handleChange(event)}
            />
        </div>
    )
}

export default Input