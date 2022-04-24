import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import NavigationComponent from '../components/NavigationComponent'
import ContactComponent from '../components/ContactComponent'
import FlightCardComponent from '../components/FlightCardComponent'

const Flights: NextPage = () => {
    return (
        <div>
            <NavigationComponent />
            <div className='container mt-5 mb-5 h-100'>
                <h1 className='text-center fw-bold fs-55 mb-5'>Best flights suited for you</h1>
                <FlightCardComponent />
            </div>
            <ContactComponent />
        </div>
    )
}

export default Flights