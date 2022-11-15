import {useState, useEffect} from "react"
import Button from '@mui/material/Button';
import axios from "axios"



function TradingPairs() {

    const [carz, setCarz] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [selectedValue, setSelectedValue] = useState({"values": "to be shown here after clicking"});

    useEffect(() => {
        const options = {
            method: 'POST',
            url: 'https://www.bitstamp.net/api/v2/ticker/',
          }

        axios.request(options)
        .then(response => {
            setCarz([...response.data])
            setLoading(false)

        }).catch(function (error) {
            console.error(error);
        })
    },[])
    console.log(carz)


    const showDetailsHandler = e => {
    let rrr = e.target.textContent
    console.log(rrr)
    let result = carz.find(item => item.pair === rrr);
    console.log(result)
    console.log(result.volume)
    setSelectedValue(result)
    
    }
    let entriesArray = Object.entries(selectedValue)



    return(
        <div className="cars basis-2/3">
            <div className=" flex-wrap flex ">
                {carz
            .map(
                (filteredCar) => {
                return (
                    <>
                <div key={filteredCar.pair} >
                    
                    <div className="car-info pt-2">
                        <div className="car-details  ">
                            <Button sx={{ width: 80, padding: 1, margin: 1 }} onClick={showDetailsHandler}>{filteredCar.pair}</Button>
                        </div>
                    </div>
                </div>
                </>
                
                )
                    })
                
            }
            </div>
            <div>{ entriesArray
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
    
        </div>
    
        
    )
        
}

export default TradingPairs;