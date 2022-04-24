import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavigationComponent from '../components/NavigationComponent'
import ContactComponent from '../components/ContactComponent'
import EventComponent from '../components/EventComponent'
import { Event } from '../model/Event'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Home: NextPage = () => {
  const [events, setEvents] = useState<Event[]>([])
  const [showAllHot, setShowAllHot] = useState<Boolean>(false)

  useEffect(() => {
    fetch('api/events/upcoming')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        console.log(data)
      })
  }, []);

  const goToPath = (userInput: string) => {
    window.location.href = '/search/' + userInput;
  }

  const getPath = () => {
    var inputField = document.getElementById("searchField") as HTMLInputElement;
    if(inputField) {
      goToPath(inputField.value);
    }
  }

  const clickShowAll = (event: MouseEvent) => {
    event.preventDefault();

    setShowAllHot(!showAllHot)
  }

  return (
    <div className='z-0'>
      <Head>
        <title>Tripseek</title>
        <meta name="description" content="find or create events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationComponent />
      <div className="h-100">
        <div className='center w-100'>
          <div className="container">
            <h1 className="main-title fw-bold mt-2">Seek, plan and enjoy events</h1>
            <div className="row mt-3">
              <div className='col-8'>
                <h4 className="lighter-text mb-3">Find the best event for you and your friends, book a flight, buy the tickets and have fun.</h4>
                <div className="mt-5 row">
                  <div className='col-6'>
                    <input placeholder='Hackatlon' className='search-input w-100' id="searchField"></input>
                  </div>
                  <div className='col-2 cursor-pointer'>
                    <Link href="/">
                        <Image onClick={(event: any) => getPath()} src="/images/search-f.svg" width={60} height={60} alt="search" className='h100 white-bg br-5 dark-border-hover' />
                    </Link>
                  </div>
                </div>
                <button className='transparent-button m-1 p-1 pl-2 pr-2' onClick={(event: any) => goToPath("sheeran concert")}>
                  <h5 className='m-0'>Sheeran concert</h5>
                </button>
                <button className='transparent-button m-1 p-1 pl-2 pr-2' onClick={(event: any) => goToPath("baseball")}>
                  <h5 className='m-0'>Baseball</h5>
                </button>
              </div>
              <div className='col-4 d-none d-md-block text-center'>
                <Image src="/images/find-event.svg" width={170} height={170} alt="calendar icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='top-decor'></div>

      <div className='white-bg'>
        <div className="container pt-5 pb-5">
          <h1 className='fw-bold fs-4 mb-5'><Image src="/images/fire.svg" width={50} height={50} className='icon' alt="fire" />&nbsp;Hot events</h1>
          <div className="row">
            {(!events || events.length == 0) ?
              <div className='text-center mt-5'>
                <button className='button-yellow'>
                  <h4 className='mb-0 p-2'>Loading...</h4>
                </button>
              </div>
              :
              showAllHot ?
                events.map((event) => {
                  return (
                    <EventComponent key={event.Id} {...event} />
                  )
                })
                :
                events.slice(0, 4).map((event) => {
                  return (
                    <EventComponent key={event.Id} {...event} />
                  )
                })
            }
          </div>
          {(events && events.length > 0) ? <div className='text-center mt-5'>
            <button className='button-yellow' onClick={(event: any) => clickShowAll(event)}>
              {showAllHot ? <h4 className='mb-0 p-2'>Show less</h4> : <h4 className='mb-0 p-2'>Show more</h4>}
            </button>
          </div> : null}
        </div>
      </div>

      <div className='bottom-decor'></div>

      <span id="HowItWorks"></span>
      <div className='mt-5'>
        <h1 className='text-center fw-bold fs-55'>How does it work</h1>
        <div className='container mt-5'>
          <div className='row m-4'>
            <div className='col-5'>
              <h1 className=' text-end'>
                <Image src="/images/search.svg" width={100} height={100} alt="search" />
              </h1>
            </div>
            <div className='col-2'></div>
            <div className='col-5'>
              <h1 className=''>1. Find an event of your liking</h1>
            </div>
          </div>

          <hr className='hr-thin'/>

          <div className='row m-4'>
            <div className='col-1'></div>
            <div className='col-4'>
              <h1 className='text-end'>2. Pick the best suited travel option</h1>
            </div>
            <div className='col-2'></div>
            <div className='col-5'>
              <h1 className=''>
                <Image src="/images/plane.svg" width={100} height={100} alt="plane" />
              </h1>
            </div>
          </div>

          <hr className='hr-thin'/>

          <div className='row m-4'>
            <div className='col-5'>
              <h1 className=' text-end'>
                <Image src="/images/happy.svg" width={100} height={100} alt="happy" />
              </h1>
            </div>
            <div className='col-2'></div>
            <div className='col-5'>
              <h1 className=''>3. Have fun!</h1>
            </div>
          </div>
        </div>
      </div>

      <span id="FAQ"></span>
      <div className='top-decor'></div>
      <div className='white-bg'>
        <div className="container pt-3 pb-5">
          <h1 className='text-center fw-bold fs-55'>FAQ</h1>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h4 className='mb-0'>Can I find travel options for any event?</h4>
                </button>
              </h3>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  For now, you can only find travel options for events listed on seatgeek.com.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <h4 className='mb-0'>Are events up to date?</h4>
                </button>
              </h3>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Yes, our event database is updated twelve times a day. It's our mission to keep it as up-to-date as possible.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <h4 className='mb-0'>Are there any fees for using Tripseek?</h4>
                </button>
              </h3>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  No, we strive to provide as much value for free to our users as possible.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-decor'></div>

      <div className='mt-5 mb-5'>
        <h1 className='text-center fw-bold fs-55 mb-5'>Join us</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <h1 className='fs-10 text-center'>
                <Image src="/images/user.svg" width={150} height={150} className='icon' alt="user" />
              </h1>
              <h1 className='text-center mt-5'><span className='animated-underline'>Create an account</span></h1>
            </div>
            <div className='col-6 vertical-border-line'>
              <h1 className='fs-10 text-center'>
                <Image src="/images/users.svg" width={150} height={150} className='icon' alt="users" />
              </h1>
              <h1 className='text-center mt-5'><span className='animated-underline'>Create a group account</span></h1>
            </div>
          </div>
        </div>
      </div>

      <ContactComponent />
    </div>
  )
}

export default Home