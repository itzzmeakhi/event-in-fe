import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/EventItem.module.css';

const EventItem = ({ evt: {
  name,
  image,
  date,
  time,
  slug
}}) => {
  return (
    <div className={styles.eventItem}>
      <div className={styles.img}>
        <Image 
          src={image || '/public/images/event-default.png'} 
          width='170' 
          height='100' />
      </div>
      <div className={styles.info}>
        <p>{date} at {time}</p>
        <h3>{name}</h3>
      </div>
      <Link 
        href={`/events/${slug}`}>
        <a className={styles.btnLink}>Details</a>
      </Link>
    </div>
  );
}

export default EventItem;