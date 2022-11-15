import {useState, useEffect} from "react"

import axios from "axios"


function AverageValues() {

    const [bits, setBits] = useState({})
    const [bitf, setBitf] = useState([])
    const [isLoading, setLoading] = useState(true)
    // const [selectedValue, setSelectedValue] = useState({"values": "to be shown here after clicking"});


    // useEffect(() => {
    //     // setLoading(true)
    //     const axios = require('axios')

    //     const baseUrl = "https://api-pub.bitfinex.com/v2";
    //     const pathParams = "ticker/tBTCUSD" 
    //     const queryParams = ""

    //     axios.get(`${baseUrl}/${pathParams}?${queryParams}`)
    //         .then(response => {
    //             console.log(response.data);
    //         }, error => {
    //             console.log(error);
    //         })
    // },[])
    // console.log(bitf)


    useEffect(() => {
        // setLoading(true)
        const options = {
            method: 'POST',
            url: 'https://www.bitstamp.net/api/v2/ticker/btcusd',
            
          }

        axios.request(options)
        .then(response => {
            setBits({...response.data})
            // console.log(response.data)
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
                <div /*target="_blank" rel="noreferrer"*/  key={filteredCar[0]} >
                    {/* <img className="car-img" src={`${filteredCar.img}`} alt={`${filteredCar.title}`}/> */}
                    <div className="car-info my-3 pt-2">
                        <div className="car-details">
                            {filteredCar[0]}: {filteredCar[1]}
                        </div>

                    </div>
                    {/* <div className="monthly-price">${Math.floor(100 + Math.random() * 900)}/Month Est.</div>
                    <div className="cash-down">${Math.floor(1+Math.random()*5)}000 Cash Down</div> */}
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