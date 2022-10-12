
import styles from './Button.module.css';

export default function Button (props){
    return (
    <button className={styles.button}  onClick={props.onClick} type={props.type}>{props.children}</button>
    )
}