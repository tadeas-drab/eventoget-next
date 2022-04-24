import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'

const Flights: NextPage = () => {
    return (
        <div className='card-light br-10 w-100'>
            <div className='row'>
                    <div className='col-9 p-0'>
                        <div className='card-text pr-0'>
                            <div className=' vertical-border-line-right-thin'>
                                <div className='row'>
                                    <div className='col-3'>
                                        <div className='text-center'>
                                            <Image src="/images/takeoff.svg" className='card-img' width={34} height={34} alt="departure"/>
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <div className=''>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <h4>JFK, New York</h4>
                                                </div>
                                                <div className='col-6'>
                                                    <h4>23.5.2022 12:45</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-3'>
                                        <div className='text-center'>
                                            <Image src="/images/landing.svg" className='card-img' width={34} height={34} alt="departure"/>
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <div className=''>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <h4>Los Angels</h4>
                                                </div>
                                                <div className='col-6'>
                                                    <h4>24.5.2022 12:45</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='col-3 dark-hover p-0'>
                    <div className='card-text'>
                        <div className='text-center'>
                            <h3 className='mt-1'>123$</h3>
                            <h4>Buy</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flights