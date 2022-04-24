import { NextPage } from "next";
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'
import { Event } from '../model/Event'
import Link from "next/link";

const EventComponent: NextPage<Event> = ({ Id, ImageUrl, ArtistName, DisplayLocation, StartDate }) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric', timeZoneName: 'short', hour: '2-digit', minute: '2-digit' };

    return (
        <div className='col-3'>
            <div className='card'>
                <div className='card-text'>
                    <Image src={ImageUrl ? ImageUrl : "/images/sheeran-concert.jpg"} alt="photo" width={306} height={175} />
                    <h2 className='fw-bold'>{ArtistName}</h2>
                    <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin" />&nbsp;{DisplayLocation}</h4>
                    <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar" />&nbsp;{StartDate ? new Date(StartDate).toLocaleDateString('en-us', options) : 'Not defined'}</h4>
                    <div className='text-center'>
                        <Link href={"/trip/" + Id}>
                            <a className='card-button p-1' type="button"><h5 className='mb-0'>More info</h5></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventComponent