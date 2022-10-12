import styles from './Button.module.css';

export default function FlatButton (props){
    return (
        <button className={styles.flatButton}  onClick={props.onClick} type={props.type}>{props.children}</button>
        )
}