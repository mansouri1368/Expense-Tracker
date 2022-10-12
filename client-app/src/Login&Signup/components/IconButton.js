

import styles from './Button.module.css';

export default function IconButton({title,icon,size,onClick}){
    return (
        <div className={styles.iconButton} onClick={onClick}>
            <ion-icon name={icon} size={size} ></ion-icon>
            <button> {title}</button>
        </div>
    )
}