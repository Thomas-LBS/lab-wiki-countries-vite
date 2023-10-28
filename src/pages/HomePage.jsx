import axios from "axios"
import { useState, useEffect } from "react"

function HomePage() {

    const [countries, setCountries] = useState([])

    useEffect ( () => { 
        axios.get('https://ih-countries-api.herokuapp.com/countries')
        
       
        .then(country => {
            console.log(country.data)
            setCountries(country.data)
        })
        .catch(error => console.log(error))

    },[])

    return (
        <div>
          
            <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
                <h2 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h2>

                <div className="list-group">
                    
                   {
                    countries.map((country)=>{
                            return (                                
                                    <a  key={country._id} className="list-group-item list-group-item-action" href="/ABW">
                                    {country.name.common}</a>                                
                            )
                        })
                    }
                    
                    
                </div>
            </div>
        </div>
    )
}

export default HomePage
