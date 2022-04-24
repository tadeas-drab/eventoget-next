import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import NavigationComponent from '../../components/NavigationComponent'
import ContactComponent from '../../components/ContactComponent'
import Link from 'next/link'
import { Event } from '../../model/Event'
import { useEffect, useState } from 'react'
import FlightCardComponent from '../../components/FlightCardComponent'
import { fetchArrivalLocation } from '../../data-provider/kiwi/FetchArrivalLocation'
import { fetchFlights } from '../../data-provider/kiwi/FetchFlights'
import { Flight } from '../../model/Flight'

export default function EventInfo(eventData: any) {
    const [airport, setAirport] = useState<string>('');
    const [departure, setDeparture] = useState<string>('')
    const [searchState, setSearchState] = useState<string>('NONE')
    const [possibleDepartures, setPossibleDepartures] = useState<string[]>([]);
    const [flights, setFlights] = useState<Flight[]>([])

    const event: Event = eventData.eventData as Event;
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric', timeZoneName: 'short', hour: '2-digit', minute: '2-digit' };

    useEffect(() => {
        if (airport.length < 3)
            return

        fetch(`/api/kiwi/departurelocation?input=${airport}`)
            .then((data) => data.json())
            .then((locs: any) => {
                setPossibleDepartures(locs.map((loc: any) => loc.join(' - ')))
            });
    }, [airport])

    function addDays(date: any, days: any): Date {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    const handleAirportInput = (evt: any) => {
        evt.preventDefault();

        setAirport(evt.target.value);
    }

    const handleDepartureInput = (evt: any) => {
        evt.preventDefault();

        setDeparture(evt.target.value);
    }

    const searchFlights = async (evt: any) => {
        evt.preventDefault();

        if (airport === '' || departure === '')
            return;

        if (!possibleDepartures || possibleDepartures.length == 0)
            return;

        setSearchState('LOADING');
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

        const departureLoc = possibleDepartures[0].split(' - ')[0];

        const arrivalLocationRaw = await fetch(`/api/kiwi/arrivallocations?lat=${event.Latitude}&lon=${event.Longitude}`); // Prague coordinates
        const arrivalLocation = await arrivalLocationRaw.text()

        const arrivalDate = addDays(new Date(event.StartDate), 1)

        const currentDayOfMonth = arrivalDate.getDate();
        const currentMonth = arrivalDate.getMonth(); // Be careful! January is 0, not 1
        const currentYear = arrivalDate.getFullYear();

        const dateString = currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;

        console.log(dateString)
        console.log(departure)

        let flightsRaw: Response = await fetch(`/api/kiwi/flights?flyFrom=${departureLoc}&flyTo=${arrivalLocation}&departureDate=${departure}&arrivalDate=${dateString}`);
        let r = await flightsRaw.json()
        console.log(r)
        setFlights(r);

        setSearchState('LOADED');
    }

    return (
        <div>
            <NavigationComponent />
            <div className='top-decor mt-5'></div>
            <div className='white-bg pt-5 pb-5'>
                <h1 className='text-center fw-bold fs-55'>{event.ArtistName}</h1>
                <div className='container'>
                    <div className='row pt-5'>
                        <div className='col-6 text-end'>
                            <Image src={event.ImageUrl ? event.ImageUrl : "/images/sheeran-concert.jpg"} alt="photo" width={306} height={175} />
                        </div>
                        <div className='col-1'></div>
                        <div className='col-5'>
                            <br />
                            <h2><Image src="/images/pin.svg" className='icon' width={30} height={30} alt="pin" />&nbsp;{event.DisplayLocation}</h2>
                            <br />
                            <h2><Image src="/images/calendar.svg" className='icon' width={30} height={30} alt="calendar" />&nbsp;{event.StartDate ? new Date(event.StartDate).toLocaleDateString('en-us', options) : 'Not defined'}</h2>
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
                            <Link href={event.TicketUrl}>
                                <a className="button-yellow w-100 p-1" type="button"><h5 className='mb-0 text-center'>More info</h5></a>
                            </Link>
                        </div>
                        <div className='col-1'></div>
                        <div className='col-2'>
                            <Link href="#TravelOptions">
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
                                <input className="form-control" id="departureAirportField" onChange={(event: any) => handleAirportInput(event)} value={airport}></input>
                            </div>
                            <div className='col-5'>
                                <input type={"date"} className="form-control" id="departureDateField" onChange={(event: any) => handleDepartureInput(event)} value={departure}></input>
                            </div>
                            <div className='col-2 cursor-pointer'>
                                <Image src="/images/search-f.svg" width={36} height={36} alt="search" className='h100 white-bg br-5' onClick={(event: any) => searchFlights(event)} />
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
            {searchState == 'NONE' ? null :
                searchState == 'LOADING' ?
                    <div className='container mt-5 mb-5 h-100'>
                        <h1 className='text-center fw-bold fs-55 mb-5'>Searching...</h1>
                    </div>
                    :
                    <div className='container mt-5 mb-5 h-100'>
                        <h1 className='text-center fw-bold fs-55 mb-5'>Best flights for you</h1>
                        <FlightCardComponent flights={flights} />
                    </div>}
            <ContactComponent />
        </div>
    )
}

export async function getServerSideProps({ params }: any) {
    const eventId = params.eventId.replace(/\-/g, '+')
    let response = await fetch(process.env.URL + `/api/events/${eventId}`).then(res => res.json());

    let eventData = response && response.length > 0 ? response[0] : null
    if (eventData == null)
        return {
            notFound: true
        }
    return {
        props: {
            eventData
        }
    }
}