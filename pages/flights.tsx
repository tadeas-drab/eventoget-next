import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './shared/navigation'
import Contact from './shared/contact'
import FlightCard from './components/flightcard'
import Link from 'next/link'

const Flights: NextPage = () => {
    return (
        <div>
            <Navigation/>
            <div className='container mt-5 mb-5'>
                <h1 className='text-center fw-bold fs-55 mb-5'>Best flights for you</h1>
                <FlightCard/>
            </div>
            <Contact/>
        </div>
    )
}

export default Flights