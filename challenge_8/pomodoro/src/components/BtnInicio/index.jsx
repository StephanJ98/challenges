import styles from './styles.module.css'

/* eslint-disable react/prop-types */
const BtnInicio = ({ onClick }) => {
    return (
        <div
            className={styles.btn}
            onClick={() => onClick()}
        >
            <p>Iniciar Sesión</p>
        </div>
    )
}

export default BtnInicio