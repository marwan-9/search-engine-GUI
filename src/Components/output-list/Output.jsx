import styles from  "./output.module.css";
import Button from "../button/Button";
import { useState } from "react";

const Output = () => {
    const  [manipulatedStyle,setManipulatedStyle] = useState(styles["output-area-collapsed"]);
    const onCollapseHandler = () => {
        setManipulatedStyle(styles["output-area-collapsed"]);
    }

    const onShoweHandler = () => {
        setManipulatedStyle(styles["output-area"]);
    }

    return(
        <div className={manipulatedStyle}>
            <Button onClick={onCollapseHandler}> Collapse</Button>
            <Button onClick={onShoweHandler}> Show</Button>

            <h2>Any needed output may be shown here, also this could be maniuplted for better UX </h2>
        </div>
    )
}

export default Output;