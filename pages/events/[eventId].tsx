import EventComponent from "../../components/EventComponent";
import { Event } from "../../model/Event";

export default function EventInfo(event: any) {
    console.log(event)
    return (
        <div>
            {event && event != null ? <EventComponent {...event.event} /> : "Event not found!"}
        </div>
    )
}

export async function getServerSideProps({ params }: any) {
    const eventId = params.eventId.replace(/\-/g, '+')
    let response = await fetch(process.env.URL + `/api/events/${eventId}`).then(res => res.json());

    let event = response && response.length > 0 ? response[0] : null
    if (event == null)
        return {
            notFound: true
        }
    return {
        props: {
            event
        }
    }
}