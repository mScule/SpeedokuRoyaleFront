import Locale from "@/i18n/types/locale";

import en from "./languages/en";
import fi from "./languages/fi";
import ja from "./languages/ja";

const messages = {
  [Locale.English]: en,
  [Locale.Finnish]: fi,
  [Locale.Japanese]: ja
};

export { messages };
