import React from "react";
import "./styles.scss"

type Props = {
    text: string;
}

const ButtonP = ({text}: Props) => (
    <div>
        <button className="btn-default">{text}</button>
    </div>
);

export default ButtonP;