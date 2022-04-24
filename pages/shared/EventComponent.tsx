import { NextPage } from "next";
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'
import { Event } from '../../model/Event'

const EventComponent: NextPage<Event> = ({ImageUrl, ArtistName, DisplayLocation, StartDate}) => {
    console.log(ImageUrl)
    return (
        <div className='col-3'>
            <div className='card'>
                <div className='card-text'>
                    <Image src="https://seatgeek.com/images/performers-landscape/darrell-hammond-b788f9/15640/huge.jpg" alt="photo" width={306} height={175}/>
                    <h2 className='fw-bold'>{ArtistName}</h2>
                    <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin"/>&nbsp;{DisplayLocation}</h4>
                    <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar"/>&nbsp;{StartDate}</h4>
                    <div className='text-center'>
                        <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventComponent