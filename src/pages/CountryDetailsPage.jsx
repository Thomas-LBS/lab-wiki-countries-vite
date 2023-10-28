import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams, Link } from 'react-router-dom'

function CountryDetailsPage() {

    const {countryId} = useParams()

    const [countryData, setCountryData] = useState("") 

    useEffect(() => {

        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`) 
            .then(country => {
                setCountryData(country.data)

            })

            .catch(err => console.log(err))

        }, [countryId])

    return (


        <div>

            <div className="container">
                <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</h2>

                {!countryData.name ? <h1>"Loading..."</h1> :
               
                <>   
                <h1>{countryData.name.common}</h1>
                
                
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`} alt="country flag" width="auto" height="72"/>
                

                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "30%" }}>Capital</td>
                            <td>{countryData.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {countryData.area} Km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                
                                { !countryData.borders.length ? <li>No it is an island</li> :
                                    countryData.borders.map((borderCountry, index) => {
                                        return (
                                            <li key={index}>
                                                <Link
                                                    to={`/${borderCountry}`}
                                                >{borderCountry}
                                                </Link>
                                            </li>

                                        )
                                    })
                                }                             
                            </td>
                        </tr>
                    </tbody>
                </table>
                </>}
            </div>
        </div>
    )

}



export default CountryDetailsPage
