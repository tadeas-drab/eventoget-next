import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import NavigationComponent from '../../components/NavigationComponent'
import ContactComponent from '../../components/ContactComponent'
import EventLightComponent from '../../components/EventLightComponent'
import Link from 'next/link'
import { Event } from '../../model/Event'

export default function SearchResult(props: any) {
    const events: Event[] = props.eventData;

    console.log(events)

    return (
        <div>
            <NavigationComponent />
            <div>
                <h1 className='text-center fw-bold fs-55 mt-5 mb-5'>Events for you</h1>
                <div className='container mb-5'>
                <div className="row">
                    {
                    events.map((event) => {
                        return (
                        <EventLightComponent key={event.Id} {...event} />
                        )
                    })
                    }
                </div>
                </div>
            </div>
            <ContactComponent />
            </div>
    )
}

    

export async function getServerSideProps({ params }: any) {
    const input = params.input.replace(/\-/g, '+')
    let response = await fetch(process.env.URL + `/api/events/userinput?input=${input}`).then(res => res.json());
    console.log(response);
    let eventData: Event[] = response && response.length > 0 ? response[0] : null
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