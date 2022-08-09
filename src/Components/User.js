import React from "react";

const User = ({name, surname, lastname, email}) => {
    return (
        <div style={{backgroundColor: "#fff"}}>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{lastname}</p>
            <p>{email}</p>
        </div>
    )
}

export default User