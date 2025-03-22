import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactList = await readContacts();
  const newContacts = Array.from({ length: number }, createFakeContact);
  const updatedContacts = [...contactList, ...newContacts];
  await writeContacts(updatedContacts);
};

generateContacts(3);
