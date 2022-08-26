import React from "react";

interface IProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: IProps) => {
    return (
        <button className="menu__button" onClick={props.onClick}></button>
    )
}

export default Button;