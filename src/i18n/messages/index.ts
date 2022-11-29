import Locale from "@/i18n/types/locale";

import en from "./languages/en";
import fi from "./languages/fi";
import jp from "./languages/jp";

const messages = {
  [Locale.English]: en,
  [Locale.Finnish]: fi,
  [Locale.Japanese]: jp
};

export { messages };
