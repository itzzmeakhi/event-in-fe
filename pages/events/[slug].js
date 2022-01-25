import Image from 'next/image';
import Link from 'next/link';

import MetaData from '@/components/MetaData/MetaData';

import { API_URL } from '@/config/index';

import styles from '@/styles/EventItemPage.module.css';

const EventItemPage = ({ evt }) => {
  const {
    name,
    description,
    image,
    date,
    time,
    venue,
    performers,
    address
  } = evt;
  console.log(evt)
  return (
    <MetaData>
      <div className={styles.eventItemPage}>
        <span>{date} at {time}</span>
        <h1>{name}</h1>
        <div>
          <Image src={image} height="600" width="960" /> 
        </div>
        <h3>Performers:</h3>
        <p>{performers}</p>
        <h3>Description:</h3>
        <p>{description}</p>
        <h3>Venue: {venue}</h3>
        <p>{address}</p>

        <Link href='/events'>
          <a>{'<'} Go Back</a>
        </Link>
      </div>
    </MetaData>
  );
}


export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/events`)
  const events = await res.json()

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const res = await fetch(`${API_URL}/events/${slug}`)
  const events = await res.json()

  return {
    props: {
      evt: events[0],
    }
  }
}

export default EventItemPage;