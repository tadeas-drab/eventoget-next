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
        <div className="container mt-7">
          <h1 className="main-title fw-bold">Search, plan and enjoy events</h1>
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
        <div className="container pt-3 pb-3">
          <h1 className='fw-bold'><img src="/images/fire.svg" className='icon'/>&nbsp;Hot news</h1>
          <div className="row mt-4">
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
          <div className='text-center mt-3'>
            <button className='button-yellow'>
              <h4 className='mb-0 p-2'>Show all</h4>
            </button>
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
