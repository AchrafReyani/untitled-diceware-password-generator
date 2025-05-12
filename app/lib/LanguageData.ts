import basque from '@/app/lists/basque'
import catalan from '@/app/lists/catalan'
import czech from '@/app/lists/czech'
import danish from '@/app/lists/danish'
import dutch from '@/app/lists/dutch'
import eff from '@/app/lists/eff'
import esperanto from '@/app/lists/esperanto'
import finnish from '@/app/lists/finnish'
import french from '@/app/lists/french'
import german from '@/app/lists/german'
import hungarian from '@/app/lists/hungarian'
import italian from '@/app/lists/italian'
import japanese from '@/app/lists/japanese'
import maori from '@/app/lists/maori'
import norwegian from '@/app/lists/norwegian'
import polish from '@/app/lists/polish'
import russian from '@/app/lists/russian'
import spanish from '@/app/lists/spanish'
import swedish from '@/app/lists/swedish'

export const availableLanguages = [
  "English",
  "Dutch",
  "French",
  "Japanese",
  "Basque",
  "Catalan",
  "Czech",
  "Danish",
  "Esperanto",
  "Finnish",
  "German",
  "Hungarian",
  "Italian",
  "Maori",
  "Norwegian",
  "Polish",
  "Russian",
  "Spanish",
  "Swedish",
];

export const languageWordLists: Record<string, Record<string, string>> = {
  English: eff,
  Dutch: dutch,
  Japanese: japanese,
  French: french,
  Basque: basque,
  Catalan: catalan,
  Czech: czech,
  Danish: danish,
  Esperanto: esperanto,
  Finnish: finnish,
  German: german,
  Hungarian: hungarian,
  Italian: italian,
  Maori: maori,
  Norwegian: norwegian,
  Polish: polish,
  Russian: russian,
  Spanish: spanish,
  Swedish: swedish,
};
