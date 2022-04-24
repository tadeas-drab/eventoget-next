import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './shared/navigation'
import Contact from './shared/contact'
import Link from 'next/link'

const Events: NextPage = () => {
    return (
        <div>
            <Navigation/>
            <div className='h-100'>
                <h1 className='text-center fw-bold fs-55 mt-5 mb-5'>Upcomming events</h1>
                <div className='container'>
                    <div className="row">
                        <div className='col-3'>
                            <div className='card-light'>
                                <Image src="/images/sheeran-concert.jpg" alt="photo" width={306} height={175}/>
                                <div className='card-text'>
                                    <h2 className='fw-bold'>Ed Sheeran</h2>
                                    <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin"/>&nbsp;O2 Arena</h4>
                                    <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar"/>&nbsp;21.06.2020</h4>
                                    <div className='text-center'>
                                        <Link href="/event">
                                            <a className="card-button p-1" type="button"><h5 className='mb-0'>More info</h5></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                        <div className='card-light'>
                            <Image src="/images/sheeran-concert.jpg" alt="photo" width={306} height={175} className='card-img'/>
                        <div className='card-text'>
                            <h2 className='fw-bold'>Ed Sheeran</h2>
                            <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin"/>&nbsp;O2 Arena</h4>
                            <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar"/>&nbsp;21.06.2020</h4>
                            <div className='text-center'>
                            <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                            </div>
                        </div>
                        </div>
                        </div>

                        <div className='col-3'>
                        <div className='card-light'>
                            <Image src="/images/sheeran-concert.jpg" alt="photo" width={306} height={175} className='card-img'/>
                        <div className='card-text'>
                            <h2 className='fw-bold'>Ed Sheeran</h2>
                            <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin"/>&nbsp;O2 Arena</h4>
                            <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar"/>&nbsp;21.06.2020</h4>
                            <div className='text-center'>
                            <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                            </div>
                        </div>
                        </div>
                        </div>

                        <div className='col-3'>
                        <div className='card-light'>
                            <Image src="/images/sheeran-concert.jpg" alt="photo" width={306} height={175} className='card-img'/>
                        <div className='card-text'>
                            <h2 className='fw-bold'>Ed Sheeran</h2>
                            <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin"/>&nbsp;O2 Arena</h4>
                            <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar"/>&nbsp;21.06.2020</h4>
                            <div className='text-center'>
                            <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    )
}

export default Events