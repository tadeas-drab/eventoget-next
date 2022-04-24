import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import { Flight } from '../model/Flight'
import { Data } from '../model/Data'

const FlightCardComponent: any = ({ flights }: { flights: Flight[] }) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric', timeZoneName: 'short', hour: '2-digit', minute: '2-digit' };

    return (
        <div className='card-light br-10 w-100'>
            {flights.map((flight: Flight) => {
                return flight.data.map((data: Data) => {
                    const from = data.cityFrom + ' - ' + data.countryFrom.name
                    const to = data.cityTo + ' - ' + data.countryTo.name
                    const price = data.price + ' ' + flight.currency

                    return <div className='row'>
                        <div className='col-9 p-0'>
                            <div className='card-text pr-0'>
                                <div className=' vertical-border-line-right-thin'>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <div className='text-center'>
                                                <Image src="/images/takeoff.svg" className='card-img' width={34} height={34} alt="departure" />
                                            </div>
                                        </div>
                                        <div className='col-8'>
                                            <div className=''>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <h4>{from}</h4>
                                                    </div>
                                                    <div className='col-6'>
                                                        <h4>{new Date(data.local_departure).toLocaleDateString('en-us', options)}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-3'>
                                            <div className='text-center'>
                                                <Image src="/images/landing.svg" className='card-img' width={34} height={34} alt="departure" />
                                            </div>
                                        </div>
                                        <div className='col-8'>
                                            <div className=''>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <h4>{to}</h4>
                                                    </div>
                                                    <div className='col-6'>
                                                        <h4>{new Date(data.local_arrival).toLocaleDateString('en-us', options)}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={flight.data[0].deep_link}>
                            <div className='col-3 dark-hover p-0'>
                                <div className='card-text'>
                                    <div className='text-center'>
                                        <h3 className='mt-1'>{price}</h3>
                                        <h4>Buy</h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                })
            })}
        </div>
    )
}

export default FlightCardComponent