import { useContext } from 'react'
import Logger from 'vendor/Loggy'
import Context from './Context'
import signUpToEvent from '../logic/signUpToEvent'
import './EventHome.sass'
import { MdPeople, MdOutlineLocationOn, MdCalendarToday } from "react-icons/md"

function EventHome(props) {
  const logger = new Logger('EventHome')
  logger.info('call')

  const { handleFeedback } = useContext(Context)
  const { event, onSignUp } = props

  const handleSignUpToEventClick = () => {
    if (event.id)
      signUpToEvent(sessionStorage.token, event.id, error => {
        if (error) {
          handleFeedback({ level: 'error', message: error.message })

          return
        }
        onSignUp(event.id)
        handleFeedback({ level: 'success', message: 'Apuntado' })
      })
  }

  logger.info('render')

  return <div>
    <div className="EventHome__form">
      <MdPeople className='EventHome__participantsIcons' />
      <p className='EventHome__participants'>Participantes: {event.participants.length}</p>
      <p className='EventHome__title'>{event.title}</p>
      <p className='EventHome__description'>{event.description}</p>
      <MdOutlineLocationOn className='EventHome__icons' />
      <p className='EventHome__location'>{event.location}</p>
      < MdCalendarToday className='EventHome__icons' />
      <p className='EventHome__date' >{event.eventDate}</p>

      <div className='EventHome__contanier-button'>
        <button className="EventHome__button" onClick={handleSignUpToEventClick}>Apuntarme</button>
      </div>

    </div>
  </div>
}

export default EventHome



{/* <select name='select'>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
</select> */}

{/* <figure className=''>
                <img src="hola" alt="" />
            </figure> */}
