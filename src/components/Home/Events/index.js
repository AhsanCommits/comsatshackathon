import EventCard from "./EventCard";

const Events = () => {

  return (
    <section id='events' className="events">
      <h1 className="events__heading">
        Workshops
      </h1>

      <div className="events__cards">

        <EventCard
          img='https://i.imgur.com/cO7Dhvx.png'
          date='October 20, 2022'
          time='12:40 PM — 01:40 PM'
          location='Auditorium, 1st floor, A-block, Sahiwal Campus, CUI'
          heading='Intro to Git & GitHub'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />

        <EventCard
          img='https://i.imgur.com/cO7Dhvx.png'
          date='October 20, 2022'
          time='12:40 PM — 01:40 PM'
          location='Auditorium, 1st floor, A-block, Sahiwal Campus, CUI'
          heading='Machine Learning Basics'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />

        <EventCard
          img='https://i.imgur.com/cO7Dhvx.png'
          date='October 20, 2022'
          time='12:40 PM — 01:40 PM'
          location='Auditorium, 1st floor, A-block, Sahiwal Campus, CUI'
          heading='How to use Twillio in projects'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />

      </div>

    </section>
  )
}

export default Events;