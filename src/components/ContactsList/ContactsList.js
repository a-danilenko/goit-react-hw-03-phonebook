import PropTypes from "prop-types";
import s from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map((contact) => (
      <li className = {s.contactItem} key={contact.id}>
        {`${contact.name} : ${contact.number}`}
        {
          <button
            className={s.contactButton}
            type='button'
            name='delete'
            onClick={() => onRemoveContact(contact.id)}
          >
            delete contact
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}
export default ContactList;