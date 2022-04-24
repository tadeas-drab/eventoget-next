import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import NavigationComponent from '../components/NavigationComponent'
import ContactComponent from '../components/ContactComponent'
import Link from 'next/link'

const Events: NextPage = () => {
    return (
        <div>
            <NavigationComponent />
            <div className='top-decor mt-5'></div>
            <div className='white-bg pt-5 pb-5'>
                <h1 className='text-center fw-bold fs-55'>Ed Sheeran</h1>
                <div className='container'>
                    <div className='row pt-5'>
                        <div className='col-6 text-end'>
                            <Image src="/images/sheeran-concert.jpg" alt="photo" width={306} height={175} />
                        </div>
                        <div className='col-1'></div>
                        <div className='col-5'>
                            <br />
                            <h2><Image src="/images/pin.svg" className='icon' width={30} height={30} alt="pin" />&nbsp;O2 Arena</h2>
                            <br />
                            <h2><Image src="/images/calendar.svg" className='icon' width={30} height={30} alt="calendar" />&nbsp;21.06.2020 18:30</h2>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-2'></div>
                        <div className='col-8'>
                            <p>
                                Textař a písničkář Jan Pokorný, všem známý především jako Pokáč, se rozhodl uspořádat svůj doposud největší
                                koncert, a to rovnou v O2 areně. Zařadí se tak mezi ty největší české zpěváky, kteří zde vystupovali. O2
                                arena je pro české hudebníky nejvyšší příčkou na domácí scéně a stejně tak tomu je i v případě Pokáče.

                                Oblíbený písničkář zůstává fanouškům „nablízku“ skrze sociální sítě, kde je velmi aktivní a počet jeho
                                sledujících roste každým dnem. Pravidelně přidává videa na svůj YouTube Pokáčovo kanál a patří mezi
                                nejsledovanější české interprety.
                            </p>
                        </div>
                        <div className='col-2'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-4'></div>
                        <div className='col-2'>
                            <Link href="/">
                                <a className="button-yellow w-100 p-1" type="button"><h5 className='mb-0 text-center'>More info</h5></a>
                            </Link>
                        </div>
                        <div className='col-1'></div>
                        <div className='col-2'>
                            <Link href="/event#TravelOptions">
                                <a className="button-yellow w-100 p-1" type="button"><h5 className='mb-0 text-center'>Travel options</h5></a>
                            </Link>
                        </div>
                        <div className='col-3'></div>
                    </div>
                </div>
            </div>
            <div className='bottom-decor'></div>

            <span id="TravelOptions"></span>
            <div className='mt-5 mb-5 container'>
                <h1 className='text-center fw-bold fs-55'>Find flight</h1>
                <div className='row mt-5'>
                    <div className='col-2'></div>
                    <div className='col-1'>
                        <Image src="/images/takeoff.svg" className='icon' width={68} height={68} alt="departure" />
                    </div>
                    <div className='col-7'>
                        <div className='row w-100'>
                            <div className='col-5'>
                                <label htmlFor="departureAirportField" className="form-label">Departure airport</label>
                            </div>
                            <div className='col-5'>
                                <label htmlFor="departureDateField" className="form-label">Departure date</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5'>
                                <input className="form-control" id="departureAirportField"></input>
                            </div>
                            <div className='col-5'>
                                <input className="form-control" id="departureDateField"></input>
                            </div>
                            <div className='col-2 cursor-pointer'>
                                <Link href="/flights">
                                    <Image src="/images/search-f.svg" width={36} height={36} alt="search" className='h100 white-bg br-5' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
            <ContactComponent />
        </div>
    )
}

export default Events