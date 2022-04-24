import { NextPage } from "next";
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'
import { Event } from '../model/Event'
import Link from "next/link";

const EventComponent: NextPage<Event> = ({ Id, ImageUrl, ArtistName, DisplayLocation, StartDate }) => {
    return (
        <div className='col-3'>
            <div className='card'>
                <div className='card-text'>
                    <Image src={ImageUrl ? ImageUrl : "/images/sheeran-concert.jpg"} alt="photo" width={306} height={175} />
                    <h2 className='fw-bold'>{ArtistName}</h2>
                    <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin" />&nbsp;{DisplayLocation}</h4>
                    <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar" />&nbsp;{StartDate ? StartDate.split("T")[0] : 'Not defined'}</h4>
                    <div className='text-center'>
                        <Link href={"/trip/" + Id}>
                            <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventComponent