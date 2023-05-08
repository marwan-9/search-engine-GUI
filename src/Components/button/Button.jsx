import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles["button"] + " " + props.className}
      style={props.style}
      type="button"
      onClick={props.onClick}
      id={props.id}
      disabled={props.disable}
    >

      {props.children}
    </button>
  );
};

export default Button;
