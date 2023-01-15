import EventCard from "./EventCard";

const Events = () => {

  return (
    <section id='events' className="events">
      <h1 className="events__heading">
        Workshops
      </h1>

      <div className="events__cards">

        <EventCard
          img='./images/events/git.jpg'
          date='March 3, 2023'
          time='10:00 AM — 11:30 AM'
          location='Auditorium, 1st floor, A-block, Sahiwal Campus, CUI'
          heading='Intro to Git & GitHub'
          description='This workshop will teach the use of Git version control system, including basic commands, branching and merging, and remote repositories.
          Attendees will practice using Git on real projects and receive guidance. The goal is to improve proficiency in using Git for code management and collaboration.'
        />

        <EventCard
          img='./images/events/machineLearning.jpeg'
          date='March 3, 2023'
          time='12:00 PM — 01:30 PM'
          location='Auditorium, 1st floor, A-block, Sahiwal Campus, CUI'
          heading='Machine Learning Basics'
          description='This training session will teach participants how to use machine learning techniques to analyze data and make predictions.
          Attendees will learn about different types of algorithms and models and how to implement them using popular programming languages such as Python.'
        />

        <EventCard
          img='./images/events/twillio.png'
          date='March 3, 2023'
          time='02:00 PM — 03:30 PM'
          location='Auditorium, 1st floor, A-block, Sahiwal Campus, CUI'
          heading='How to use Twillio in projects'
          description='This Twilio API integration workshop will teach participants how to integrate Twilio API in their own proejcts.
          By the end of the workshop, participants will have a basic understanding of how to use Twilio to add messaging and voice capabilities to their own projects.'
        />

      </div>

    </section>
  )
}

export default Events;