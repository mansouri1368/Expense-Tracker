import styles from './Buttons.module.css';

export function PrimaryButton({ onClick, type, title }) {
  return (
    <div className={styles.container}>
      <button className={styles.button}  style={{backgroundColor:'rgb(51, 51, 204)'}} onClick={onClick} type={type}>
        {title}
      </button>
    </div>
  );
}

export function SecondaryButton({ onClick, type, title }) {
    return (
      <div className={styles.container}>
        <button className={styles.button} style={{backgroundColor:'rgb(0, 153, 255)'}} onClick={onClick} type={type}>
          {title}
        </button>
      </div>
    );
  }