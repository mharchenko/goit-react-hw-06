// import React from 'react';

// import Contact from '../Contact/Contact';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul>
//       {contacts.map(({ id, name, number }) => (
//         <Contact
//           key={id}
//           id={id}
//           name={name}
//           number={number}
//           onDelete={onDeleteContact}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;




import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/select';
import { selectFilter } from '../../redux/select';


const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filter =useSelector(selectFilter);

  
  const filteredContacts = contacts.filter((contact) =>
    filter ? contact.name.toLowerCase().includes(filter.toLowerCase()) : true
  );

  return (
    <ul>
    {filteredContacts.map(item => (
        <Contact {...item} key={item.id} />
      ))}
    </ul>
  );
};

export default ContactList;
