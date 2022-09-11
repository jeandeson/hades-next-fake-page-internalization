import pt from "./pt";
import fr from "./fr";
import en from "./en";

const myLocales = { "pt-BR": pt, "fr-FR": fr, "en-US": en };

export type localesObjKeys = keyof typeof myLocales;

export default myLocales;
