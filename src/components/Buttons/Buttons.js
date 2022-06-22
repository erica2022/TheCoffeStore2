import React from "react"

export default function Buttons ({text,handle,style}){
        return <button className={style} onClick={handle}>{text}</button>;
}
  

