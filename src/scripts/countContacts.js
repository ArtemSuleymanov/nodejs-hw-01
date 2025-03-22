import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const turnCountContacts = await readContacts();
  return turnCountContacts.length;
};

console.log(await countContacts());
