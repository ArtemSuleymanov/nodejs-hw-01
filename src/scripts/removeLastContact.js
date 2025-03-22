import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const funcRemoveLastContact = await readContacts();
  funcRemoveLastContact.pop();
  await writeContacts(funcRemoveLastContact);
};

removeLastContact();
