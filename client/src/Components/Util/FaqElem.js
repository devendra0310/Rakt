import { useState } from "react"

const FaqElem = ({question,answer}) => {
    const [show,setShow]=useState(false);
    return(
        <div className="my-5">
            <div className="main-heading flex items-center bg-[#F5F5F5] gap-2 px-2 py-2">
                <p className="w-[30px] h-[30px] flex justify-center items-center" onClick={()=>setShow(!show)}>{ show ? "-" : "+" }</p>
                <h3>{question}</h3>
            </div>
            { show && <p className="answers">{answer}</p> }
        </div>
    )
}

export default FaqElem;