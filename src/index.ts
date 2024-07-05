import { ProfessionistaMedia, ProgrammaFormazione, Piattaforma } from "./class";
import { TContenuto, TMediaPiattaforma, TSpecializzazione } from "./interface";

const professionista1 = new ProfessionistaMedia(
  "Giulia",
  "Bianchi",
  TSpecializzazione.giornalismo,
  5,
  ["politica", "narrativa", "viaggi"]
);
const professionista2 = new ProfessionistaMedia(
  "Rachele",
  "Neri",
  TSpecializzazione.regia,
  3,
  ["arte", "viaggi", "cucina"]
);
const professionista3 = new ProfessionistaMedia(
  "Lorenzo",
  "Rossi",
  TSpecializzazione.editoria,
  10,
  ["sport", "narrativa", "cucina"]
);

const programma1 = new ProgrammaFormazione(
  "Il genere nella narrazione quotidiana",
  "Ragioneremo per sviluppare insieme una rielaborazione del lessico giornalistico in una chiave neutrale ed inclusiva",
  TSpecializzazione.giornalismo,
  5
);
const programma2 = new ProgrammaFormazione(
  "Ragionare sul rifiuto",
  "Usare un NO come punto di partenza.",
  TSpecializzazione.produzione,
  6
);
const programma3 = new ProgrammaFormazione(
  "Intersezionalità. Oltre la parola.",
  "Affrontare la sfida della diversità nell'ambiente di lavoro come uno stimolo alla crescita e alla ricerca di nuove fasce di pubblico",
  TSpecializzazione.editoria,
  14
);

const piattaforma1 = new Piattaforma(
  "Fiere",
  TMediaPiattaforma.online,
  "Social media con focus su femminismo ed intersezionalità",
  [TContenuto.podcast, TContenuto.intervista]
);
const piattaforma2 = new Piattaforma(
  "Il mondo delle idee",
  TMediaPiattaforma.stampato,
  "Casa editrice indipendente",
  [TContenuto.libro, TContenuto.articolo]
);
const piattaforma3 = new Piattaforma(
  "Riverbend Channel",
  TMediaPiattaforma.audiovisivo,
  "Canale di cultura e viaggi",
  [TContenuto.video, TContenuto.vlog]
);

professionista1.partecipaProgramma(programma1);
professionista2.partecipaProgramma(programma2);

programma2.aggiungiPartecipante(professionista3);
programma3.aggiungiPartecipante(professionista3);

console.log(programma1.elencoPartecipanti);
console.log(programma2.elencoPartecipanti);
console.log(programma3.elencoPartecipanti);

piattaforma1.pubblicaContenuto(
  professionista1,
  "Intervista a AOC. Where are we headed?"
);
piattaforma2.pubblicaContenuto(
  professionista3,
  "Senza cipolla, anche i maschi piangono."
);
piattaforma3.pubblicaContenuto(professionista2, "Two-spirit people");
piattaforma1.pubblicaContenuto(
  professionista3,
  "Titolo di donna. Un podcast settimanale sui libri."
);
piattaforma2.pubblicaContenuto(
  professionista1,
  "La scuola ed il reale, un rapporto complesso."
);
piattaforma3.pubblicaContenuto(
  professionista2,
  "Una settimana dietro le sbarre, vlog dal carcere della Giudecca"
);
