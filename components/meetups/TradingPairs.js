import {useState, useEffect} from "react"
import Button from '@mui/material/Button';
import axios from "axios"



function TradingPairs(props) {

    const [carz, setCarz] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [selectedValue, setSelectedValue] = useState({"values": "to be shown here after clicking"});

    useEffect(() => {
        // setLoading(true)
        const options = {
            method: 'POST',
            url: 'https://www.bitstamp.net/api/v2/ticker/',
            // headers: {
            //   'X-RapidAPI-Key': 'c0d2e70417msh3bde3b7dbe9e25ap12748ejsncd1fe394742c',
            //   'X-RapidAPI-Host': 'all-cars.p.rapidapi.com'
            // }
          }

        axios.request(options)
        .then(response => {
            setCarz([...response.data])
            // console.log(response.data)
            setLoading(false)

        }).catch(function (error) {
            console.error(error);
        })
    },[])
    console.log(carz)
    // console.log(carz)
    // console.log(carSource)
    // console.log(carz[0].source)

    // function checkCar(car){
    //     if (car.source === "https://all-cars.p.rapidapi.com/cars/toyota")
    //     return true
    //     else
    //     return false
    // }


    //point of coommmenttttingg 
    // function setPrice(filteredObj, selectedValue){
    //     let titleLength = Math.floor(filteredObj.title.length/237)
    //     let imgLength = filteredObj.img.length
    //     let sourceLength = filteredObj.source.length*2
    //     let urlLength = filteredObj.url.length
    //     let number = titleLength + sourceLength + urlLength + imgLength
    //     if (filteredObj.img.includes("4")){
    //         number += 376
    //     } else if (filteredObj.img.includes("7")){
    //         number += 992
    //     }
    //     number *= 100
        
    //     // console.log(Object.keys(currencyData.rates).find(abbrev => abbrev===`${selectedValue.acronym}`))
    //     // const hasKey = currencyData.rates.hasOwnProperty(`${selectedValue.acronym}`)
    //     // let exrate = "1"
    //     // (hasKey)? (exrate = currencyData.rates[`${selectedValue.acronym}`]): (exrate = currencyData.rates.USD) 
    //     let exrate = currencyData.rates[`${selectedValue.acronym}`]
    //     number *= exrate
    //     // (exrate.isNan())? number=number : number *= exrate
    //     number = Math.round(number)
    //     // number *= abbrev
    //     console.log(selectedValue.acronym)
     
    //     filteredObj['price'] = number
    //     return filteredObj.price
    // }
    // function setRating(filteredObj){
    //     let titleLength = Math.floor(filteredObj.title.length/237)
    //     let sourceLength = filteredObj.source.length
    //     let urlLength = filteredObj.url.length
    //     let num = Math.floor(titleLength + sourceLength + urlLength)
    //     if (filteredObj.img.includes("32")){
    //         num -= 37
    //     } else if (filteredObj.img.includes("9")){
    //         num += 16
    //     }
        
    //     (filteredObj.img.includes("6"))? num = (num/100)+3: num = (num/100)+4
    //     if ( num>5 || num.toString().length>5){
    //         num = 4.98
    //     }
    //     filteredObj['rating'] = num
    //     return filteredObj.rating

    // }

    // const handleClick = e => {
    //     let clickedDiv = e.currentTarget.children
    //     let clickedTitle = clickedDiv[0].alt
    //     let clickedImage = clickedDiv[0].src
    //     let clickedPrice = clickedDiv[1].children[0].children[1].textContent
    //     let clickedRating = clickedDiv[1].children[1].children[1].textContent
    //     console.log(clickedTitle, clickedImage, clickedPrice, clickedRating);
    //     let clickedObj = {
    //         "title": clickedTitle,
    //         "img": clickedImage,
    //         "price": clickedPrice,
    //         "rating": clickedRating,
    //     }
    //     console.log(clickedObj)
    //     setClickedVehicle(clickedObj)
    //     // let myObj = {
    //     //     "title": 
    //     // }
    //   };
    
    //   function handleCar(filteredObj){
    //     console.log(filteredObj.title)

    //   }
    // // const handleCarClick = (filteredObj) => {
    // //     setClickedVehicle(filteredObj)
    // //     console.log(filteredObj)
    // // }
    // // console.log(clickedVehicle)

    // let filteredArray = carz.filter((car) => (car.title.includes(`${play}`)))
    // if (isLoading){
    //     return(<Skeleton variant="rectangular" width={310} height={218} sx={{
    //         mt: 30,
    //         mx: "auto",
    //         borderRadius: 3,
    //          }}/>)
    // } else if (filteredArray.length>0) {
    // return(
    //     <div className="cars">
    //         {filteredArray
    //         .filter(car => !car.img.includes('no-image') && car.img.includes('_1'))
    //         .slice(0,27)
    //         .map(
    //             (filteredCar) => {
    //             return (
    //             <NavLink to={`/${filteredCar.title}`} className="car-wrap" state={clickedVehicle} /*style={{ textDecoration: 'none' }}*/>
    //             <div /*target="_blank" rel="noreferrer"*/  key={filteredCar.url} onClick={handleClick}>
    //                 <img className="car-img" src={`${filteredCar.img}`} alt={`${filteredCar.title}`}/>
    //                 <div className="car-info pt-2">
    //                     <div className="car-details">
    //                         <div className="car-title">{filteredCar.title}</div>
    //                         <div className="car-price font-light">{selectedValue.symbol}{setPrice(filteredCar, selectedValue)}</div>
    //                         {/* <div className="car-price">${Math.floor(100 + Math.random() * 900)}00</div> */}

    //                     </div>
    //                     <div className="car-rating">
    //                         <div className="car-star"><AiFillStar /></div>
    //                         <div className="star-rating text-sm">{setRating(filteredCar)}</div>
    //                         {/* <div className="star-rating">{Math.floor(400 + Math.random() * 100)/100}</div> */}

    //                     </div>
    //                 </div>
    //                 {/* <div className="monthly-price">${Math.floor(100 + Math.random() * 900)}/Month Est.</div>
    //                 <div className="cash-down">${Math.floor(1+Math.random()*5)}000 Cash Down</div> */}
    //             </div>
    //             </NavLink>
    //             )
    //                 })
                
    //         }
    //     </div>
        
    // )
    //     } else return(
    //         <div className="no-show">
    //             No items match your search terms
    //         </div>
                
    //         )


    const showDetailsHandler = e => {
    let rrr = e.target.textContent
    console.log(rrr)
    let result = carz.find(item => item.pair === rrr);
    console.log(result)
    console.log(result.volume)
    // console.log(e.target.value)
    setSelectedValue(result)
    
    }
    let entriesArray = Object.entries(selectedValue)



    return(
        <div className="cars">
            <div className=" flex-wrap flex ">
                {carz
            .map(
                (filteredCar) => {
                return (
                    <>
                <div /*target="_blank" rel="noreferrer"*/ key={filteredCar.pair} >
                    {/* <img className="car-img" src={`${filteredCar.img}`} alt={`${filteredCar.title}`}/> */}
                    <div className="car-info pt-2">
                        <div className="car-details  ">
                            <Button sx={{ width: 100, padding: 1, margin: 2 }} onClick={showDetailsHandler}>{filteredCar.pair}</Button>

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
            {/* <div>{Object.keys(selectedValue).forEach(key => { console.log(`${key}`)})}</div> */}
            <div>{ entriesArray
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
    
        </div>
    
        
    )
        
}

export default TradingPairs;