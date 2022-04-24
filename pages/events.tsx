import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import NavigationComponent from '../components/NavigationComponent'
import ContactComponent from '../components/ContactComponent'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import EventComponent from '../components/EventComponent'
import { Event } from '../model/Event'

const Events: NextPage = () => {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    fetch('api/events/mostpopular')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
  }, []);

  return (
    <div>
      <NavigationComponent />
      <div>
        <h1 className='text-center fw-bold fs-55 mt-5 mb-5'>Upcomming events</h1>
        <div className='container mb-5'>
          <div className="row">
            {
              events.map((event) => {
                return (
                  <EventComponent key={event.Id} {...event} />
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

export default Events