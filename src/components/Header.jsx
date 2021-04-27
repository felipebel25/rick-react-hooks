import React,{useState} from 'react'

const Header =() => {
    const [darkmode, setDarkmode] = useState(false);
    const handleClick = () =>{
        if(darkmode === true ){
            setDarkmode(false)
            console.log(darkmode)
        }else{
            setDarkmode(true)
            console.log(darkmode)

        }
    }
    return (
        <div>
            <h1>reacthooks {darkmode}</h1>
            <button type="button" onClick={handleClick}>expichame </button>

        </div>
    )
}

export default Header
