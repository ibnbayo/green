
import TradingPairs from "../components/meetups/TradingPairs"
import AverageValues from "../components/meetups/AverageValues"
function Homepage(props){
    return (
        <>
        <div className=" container md:flex ">
    <AverageValues/>
    <TradingPairs/>
        </div>
        </>
    )
    
}


// export async function getStaticProps() {
//     //fetch api data
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 10
//     }
// }

export default Homepage