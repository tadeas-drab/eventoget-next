import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import NavigationComponent from '../components/NavigationComponent'
import ContactComponent from '../components/ContactComponent'
import FlightCardComponent from '../components/FlightCardComponent'
import Link from 'next/link'

const Flights: NextPage = () => {
    return (
        <div>
            <NavigationComponent />
            <div className='container mt-5 mb-5 h-100'>
                <h1 className='text-center fw-bold fs-55 mb-5'>Best flights for you</h1>
                <FlightCardComponent />
            </div>
            <ContactComponent />
        </div>
    )
}

export default Flights