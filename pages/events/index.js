import EventItem from '@/components/EventItem/EventItem';
import MetaData from '@/components/MetaData/MetaData';

import { API_URL } from '@/config/index';

import styles from '@/styles/EventsPage.module.css';

const EventsPage = ({ events }) => {
  return (
    <MetaData>
      <div className={styles.eventsPage}>
        <h1>Events</h1>
        {events.length === 0 && <h3> No Events to show</h3>}
        {events.map(evt => <EventItem key={evt.id} evt={evt} />)}
      </div>
    </MetaData>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  return {
    props: {
      events
    }
  };
};

export default EventsPage;