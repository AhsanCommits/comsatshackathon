import '../../../styles/Home/events__card.scss';

const EventCard = ({ img, date, time, location, heading, description }) => {
  return (
    <div className="events__card">
      <div className="events__card--img">
        <img src={img} alt="Workshop" />
      </div>

      <div className="events__card--info">
        <div className='events__card--info-up'>
          <div className='events__card--date'>
            <img src='./images/events/calendar.svg' alt="calendar" />
            <span>{date}</span>
          </div>

          <div className='events__card--time'>
            <img src='./images/events/clock.svg' alt="clock" />
            <span>{time}</span>
          </div>
        </div>
        <div className='events__card--info-down'>
          <div className='events__card--location'>
            <img src='./images/events/marker.svg' alt="marker" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className='events__card--text'>
        <h4 className='events__card--headline'>{heading}</h4>
        <p className='events__card--description'>
          {description}
        </p>
      </div>

      {/* <button className='events__card--button'>
        Register
      </button> */}
    </div>
  )
}

export default EventCard;