import { NextPage } from "next";
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react'
import { Event } from '../model/Event'
import Link from "next/link";

const EventComponent: NextPage<Event> = ({ Id, ImageUrl, ArtistName, DisplayLocation, StartDate }) => {
    return (
        <div className='col-3'>
            <div className='card mt-3'>
                    <Image src={ImageUrl ? ImageUrl : "/images/sheeran-concert.jpg"} alt="photo" className="card-img" width={306} height={175} />
                    <div className='card-text'>
                        <div className="h-576 mb-3">
                            <h4 className='fw-bold'>{ArtistName}</h4>
                        </div>
                        <h6 className='mb-3'><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin" />&nbsp;{DisplayLocation}</h6>
                        <h6 className='mb-3'><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar" />&nbsp;{StartDate ? StartDate.split("T")[0] : 'Not defined'}</h6>
                        <div className='text-center mt-3'>
                            <Link href={"/trip/" + Id}>
                                <button className='card-button w-100'><h5 className='mb-0'>More info</h5></button>
                            </Link>
                        </div>
                  </div>
            </div>
        </div>
    );
};

export default EventComponent