import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contact = createFakeContact();
  console.log(contact);
};

generateContacts(5);
