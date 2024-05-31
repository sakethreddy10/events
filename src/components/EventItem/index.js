// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'
  const onClickEvent = () => {
    setActiveId(id)
  }

  return (
    <li>
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} className={eventImageClassName} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem
