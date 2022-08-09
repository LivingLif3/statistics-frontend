import React, { useEffect, useState } from "react";
import InputBar from "./InputBar/InputBar";

const QuestionFormationBar = ({number, questions, click}) => {
    const [value, setValue] = useState("")
    useEffect(()=>{
        if(value.length > 0) {
            questions.push({text: value})
        }
    }, [click])
    return(
        <div className="qDiv_owh">
            <span className="numberOfQuestion">{number}.</span>
            <InputBar value={value} setValue={setValue} />
        </div>
    )
}

export default QuestionFormationBar