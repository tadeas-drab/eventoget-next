import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from './shared/navigation'
import Contact from './shared/contact'
import Link from 'next/link'

const Home: NextPage = () => {
  return (

    <div className='z-0'>
      <Head>
        <title>Tripseek</title>
        <meta name="description" content="find or create events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>
      <div className="h-100">
        <div className='center w-100'>
          <div className="container">
            <h1 className="main-title fw-bold mt-2">Search, plan and enjoy events</h1>
            <div className="row mt-3">
              <div className='col-8'>
                <h4 className="lighter-text mb-3">Find best event for your family or friend. And if you can&apos;t find, just create it</h4>
                <div className="mt-5 row">
                  <div className='col-6'>
                    <input placeholder='Hackatlon' className=' w-100'></input>
                  </div>
                  <div className='col-2'>
                    <Link href="">
                        <Image src="/images/search-f.svg" width={60} height={60} alt="search" className='h100 white-bg br-5'/>
                    </Link>
                  </div>
                </div>
                <button className='transparent-button m-1 p-1 pl-2 pr-2'>
                  <h5 className='m-0'>Sheeran concert</h5>
                </button>
                <button className='transparent-button m-1 p-1 pl-2 pr-2'>
                  <h5 className='m-0'>Hack Kosice</h5>
                </button>
              </div>
              <div className='col-4 d-none d-md-block text-center'>
                <Image src="/images/find-event.svg" width={170} height={170} alt="calendar icon"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='top-decor'></div>

      <div className='white-bg'>
        <div className="container pt-5 pb-5">
          <h1 className='fw-bold fs-4 mb-5'><Image src="/images/fire.svg" width={50} height={50} className='icon' alt="fire"/>&nbsp;Hot news</h1>
          <div className="row">
            <div className='col-3'>
              <div className='card'>
              <Image src="/images/sheeran-concert.jpg" alt="photo" width={306} height={175}/>
               <div className='card-text'>
                 <h2 className='fw-bold'>Ed Sheeran</h2>
                 <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin"/>&nbsp;O2 Arena</h4>
                 <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar"/>&nbsp;21.06.2020</h4>
                 <div className='text-center'>
                  <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                 </div>
               </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='card'>
                <Image src="/images/sheeran-concert.jpg" alt="photo" width={306} height={175} className='card-img'/>
               <div className='card-text'>
                 <h2 className='fw-bold'>Ed Sheeran</h2>
                 <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin"/>&nbsp;O2 Arena</h4>
                 <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar"/>&nbsp;21.06.2020</h4>
                 <div className='text-center'>
                  <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                 </div>
               </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='card'>
                <Image src="/images/sheeran-concert.jpg" alt="photo" width={306} height={175} className='card-img'/>
               <div className='card-text'>
                 <h2 className='fw-bold'>Ed Sheeran</h2>
                 <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin"/>&nbsp;O2 Arena</h4>
                 <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar"/>&nbsp;21.06.2020</h4>
                 <div className='text-center'>
                  <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                 </div>
               </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='card'>
                <Image src="/images/sheeran-concert.jpg" alt="photo" width={306} height={175} className='card-img'/>
               <div className='card-text'>
                 <h2 className='fw-bold'>Ed Sheeran</h2>
                 <h4><Image src="/images/pin.svg" className='icon' width={18} height={18} alt="pin"/>&nbsp;O2 Arena</h4>
                 <h4><Image src="/images/calendar.svg" className='icon' width={18} height={18} alt="calendar"/>&nbsp;21.06.2020</h4>
                 <div className='text-center'>
                  <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-5'>
            <button className='button-yellow'>
              <h4 className='mb-0 p-2'>Show all</h4>
            </button>
          </div>
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
                <Image src="/images/search.svg" width={100} height={100} alt="search"/>
              </h1>
            </div>
            <div className='col-2'></div>
            <div className='col-5'>
              <h1 className=''>1. Find event</h1>
            </div>
          </div>

          <hr/>

          <div className='row m-4'>
            <div className='col-1'></div>
            <div className='col-4'>
              <h1 className='text-end'>2. Pick best travel option</h1>
            </div>
            <div className='col-2'></div>
            <div className='col-5'>
              <h1 className=''>
                <Image src="/images/plane.svg" width={100} height={100} alt="plane"/>
              </h1>
            </div>
          </div>

          <hr/>

          <div className='row m-4'>
            <div className='col-5'>
              <h1 className=' text-end'>
                <Image src="/images/happy.svg" width={100} height={100} alt="happy"/>
              </h1>
            </div>
            <div className='col-2'></div>
            <div className='col-5'>
              <h1 className=''>Enjoy event</h1>
            </div>
          </div>
        </div>
      </div>

      
      <div className='top-decor'></div>
      <div className='white-bg'>
        <div className="container pt-3 pb-3">
          <h1 className='text-center fw-bold fs-55'>FAQ</h1>
          
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h3 className='mb-0'>Accordion Item #1</h3>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  bla
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <h3 className='mb-0'>Accordion Item #2</h3>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  bla
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <h3 className='mb-0'>Accordion Item #3</h3>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  bla
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
                <Image src="/images/user.svg" width={150} height={150} className='icon' alt="user"/>
              </h1>
              <h1 className='text-center mt-5'><span className='animated-underline'>Create personal account</span></h1>
            </div>
            <div className='col-6 vertical-border-line'>
              <h1 className='fs-10 text-center'>
                <Image src="/images/users.svg" width={150} height={150} className='icon' alt="users"/>
              </h1>
              <h1 className='text-center mt-5'><span className='animated-underline'>Create group</span></h1>
            </div>
          </div>
        </div>
      </div>

      <Contact/>
    </div>
  )
}

export default Home
