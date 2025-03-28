import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const contactList = await readContacts();
  const newOneContact = createFakeContact();
  writeContacts([...contactList, newOneContact]);
};

addOneContact();
