import React,{useState, useEffect} from 'react'

const Characters = ()=> {
    const [characters, setCharacters] = useState([])

    
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response  => response.json())
            .then(data => setCharacters(data.results))
        
    }, [])
     console.log(characters);
    return (
        <div  className="Characters">
            {characters.map( character =>(
              
                  <div className="example-2 card">
                <div className="wrapper">
                  <div className="header">
                    <div className="date">
                    
                      <span className="year">{character.origin['name']}</span>
                    </div>
                    <ul className="menu-content">
                      <li>
                        <a href="#" className="fa fa-bookmark-o" />
                      </li>
                      <li><span>{character.id}</span></li>
                    </ul>
                  </div>
                  <div className="data">
                      <img src={character.image} className="imagen" alt=""/>
                    <div className="content">
                      <h1 className="title">{character.name}</h1>
                      <p className="text">{character.location['name']}</p>
                      <p className="text">{character.status}</p>

                      <a href="#" className="button">Read more</a>
                    </div>
    </div>
  </div>
</div>
             
           
            ))}

        </div>
    )
}

export default Characters
