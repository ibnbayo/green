import {useState, useEffect} from "react"

import axios from "axios"


function AverageValues() {

    const [bits, setBits] = useState({})
    const [isLoading, setLoading] = useState(true)
  
    useEffect(() => {
        const options = {
            method: 'POST',
            url: 'https://www.bitstamp.net/api/v2/ticker/btcusd',
            
          }

        axios.request(options)
        .then(response => {
            setBits({...response.data})
            setLoading(false)

        }).catch(function (error) {
            console.error(error);
        })
    },[])
    console.log(bits)

    
    let entriesArray = Object.entries(bits)


    return(
        <>
        <div className="basis-1/3">{ entriesArray
            .map(
                (filteredCar) => {
                return (
                    <>
                <div key={filteredCar[0]} >
                    <div className="car-info my-3 pt-2">
                        <div className="car-details">
                            {filteredCar[0]}: {filteredCar[1]}
                        </div>
                    </div>
                </div>
                </>
                
                )
                    })

            }
            </div>
        </>
    )

}

export default AverageValues;