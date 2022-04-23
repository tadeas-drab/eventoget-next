import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from './shared/navigation'

const Home: NextPage = () => {
  return (

    <div>
      <Head>
        <title>Tripseek</title>
        <meta name="description" content="find or create events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>
      <div className="h-100">
        <div className="container mt-10">
          <h1 className="main-title fw-bold mt-2">Search, plan and enjoy events</h1>
          <div className="row mt-3">
            <div className='col-8'>
              <h4 className="lighter-text">Find best event for your family or friend. And if you can't find, just create it</h4>
              <div className="mt-5 w-100">
                <input placeholder='Hackatlon'></input>
                <button className='btn search-button'>Search</button>
              </div>
              <button className='transparent-button fs-085 m-1'>Sheeran concert</button>
              <button className='transparent-button fs-085 m-1'>Hack Kosice</button>
            </div>
            <div className='col-4 d-none d-md-block text-center'>
              <img src="/images/find-event.svg" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>

      <div className='top-decor'></div>

      <div className='white-bg'>
        <div className="container pt-5 pb-5">
          <h1 className='fw-bold fs-4 mb-5'><img src="/images/fire.svg" className='icon'/>&nbsp;Hot news</h1>
          <div className="row">
            <div className='col-3'>
              <div className='card'>
                <img src="/images/sheeran-concert.jpg" alt="photo" className='card-img'/>
               <div className='card-text'>
                 <h2 className='fw-bold'>Ed Sheeran</h2>
                 <h4><img src="/images/pin.svg" className='icon'/>&nbsp;O2 Arena</h4>
                 <h4><img src="/images/calendar.svg" className='icon'/>&nbsp;21.06.2020</h4>
                 <div className='text-center'>
                  <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                 </div>
               </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='card'>
                <img src="/images/sheeran-concert.jpg" alt="photo" className='card-img'/>
               <div className='card-text'>
                 <h2 className='fw-bold'>Ed Sheeran</h2>
                 <h4><img src="/images/pin.svg" className='icon'/>&nbsp;O2 Arena</h4>
                 <h4><img src="/images/calendar.svg" className='icon'/>&nbsp;21.06.2020</h4>
                 <div className='text-center'>
                  <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                 </div>
               </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='card'>
                <img src="/images/sheeran-concert.jpg" alt="photo" className='card-img'/>
               <div className='card-text'>
                 <h2 className='fw-bold'>Ed Sheeran</h2>
                 <h4><img src="/images/pin.svg" className='icon'/>&nbsp;O2 Arena</h4>
                 <h4><img src="/images/calendar.svg" className='icon'/>&nbsp;21.06.2020</h4>
                 <div className='text-center'>
                  <button className='card-button'><h5 className='mb-0'>More info</h5></button>
                 </div>
               </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='card'>
                <img src="/images/sheeran-concert.jpg" alt="photo" className='card-img'/>
               <div className='card-text'>
                 <h2 className='fw-bold'>Ed Sheeran</h2>
                 <h4><img src="/images/pin.svg" className='icon'/>&nbsp;O2 Arena</h4>
                 <h4><img src="/images/calendar.svg" className='icon'/>&nbsp;21.06.2020</h4>
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

      <div className='mt-5'>
        <h1 className='text-center fw-bold fs-55'>How does it work</h1>
        <div className='container mt-5'>
          <div className='row m-4'>
            <div className='col-5'>
              <h1 className=' text-end'>
                <img src="/images/search.svg" className='icon'/>
              </h1>
            </div>
            <div className='col-2'></div>
            <div className='col-5'>
              <h1 className=''>1. Find event</h1>
            </div>
          </div>

          <hr/>

          <div className='row m-4'>
            <div className='col-5'>
              <h1 className='text-end'>2. Pick best travel option</h1>
            </div>
            <div className='col-2'></div>
            <div className='col-5'>
              <h1 className=''>
                <img src="/images/plane.svg" className='icon'/>
              </h1>
            </div>
          </div>

          <hr/>

          <div className='row m-4'>
            <div className='col-5'>
              <h1 className=' text-end'>
                <img src="/images/happy.svg" className='icon'/>
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
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-decor'></div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
