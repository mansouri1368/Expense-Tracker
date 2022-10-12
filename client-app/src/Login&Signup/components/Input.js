import styles from './Input.module.css';

export default function Input ({type,onChange,value, title ,isInvalid,name}){
    return (
    <div className={`${styles['form-input']} ${isInvalid && styles.inValid}`}>
    <h1>{title}</h1>
    <input  type={type} onChange={onChange} value={value} name={name}/>
    </div>
    )
}

