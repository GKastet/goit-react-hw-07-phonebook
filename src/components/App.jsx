import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { filterContact } from 'redux/contactsSlice';
import { Section } from './ContainerStyled';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';
//import { postApiContact } from 'Api/api';
import { addContactThunk, deleteContactThunk, fetchContactThunk } from 'redux/contactsThunk';
//import { getApiContact } from 'Api/api';

export default function App() {
  const {items} = useSelector(state => state.contacts);
  const filtered = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    

      dispatch(fetchContactThunk());
  }, [dispatch]);


  // useEffect(() => {
  //   if(!items)return;      
  //    postApiContact(items)     
  // }, [items]);


  const formAddContact = contactData => {
    
    console.log(contactData);
    const finded = items.find(contact => contact.name === contactData.name);
    if (finded) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }
    dispatch(addContactThunk(contactData))
    ;
  };

  const handleOnChangeFilter = evt => {
    dispatch(filterContact(evt.currentTarget.value));
  };

  // const filteredContact = items?.filter(contact =>
  //   contact.name.toLowerCase().includes(filtered.toLowerCase())
  // );



  return (
    <Section>
      <h1>Phonebook</h1>

      <ContactForm formAddContact={formAddContact} contactsArr={items} />
      <h2>Contacts</h2>
      <Filter value={filtered} handleOnChangeFilter={handleOnChangeFilter} />
      <Contacts
        filteredContact={items}
        onRemoveContact={contactId => {
          dispatch(deleteContactThunk(contactId));
        }}
        value={filtered}
        handleOnChangeFilter={handleOnChangeFilter}
      />
    </Section>
  );
}
