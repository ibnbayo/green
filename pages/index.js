
import TradingPairs from "../components/meetups/TradingPairs"
import AverageValues from "../components/meetups/AverageValues"
function Homepage(){
    return (
        <>
        <div className=" container md:flex ">
    <AverageValues/>
    <TradingPairs/>
        </div>
        </>
    )
    
}


export default Homepage