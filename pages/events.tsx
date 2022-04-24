import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from './shared/navigation'
import Contact from './shared/contact'
import { useState, useEffect } from 'react'
import EventComponent from './shared/EventComponent'
import {Event} from '../model/Event'

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
            <Navigation/>
            <div className='h-100'>
                <h1 className='text-center fw-bold fs-55 mt-5 mb-5'>Upcomming events</h1>
                <div className='container'>
                    <div className="row">
                    {
                    events.slice(0,4).map((event) => {
                        return (
                        <EventComponent key={event.Id} {...event}/>
                        )
                    })
                    }
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    )
}

export default Events