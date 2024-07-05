import {
  IPiattaforma,
  IProfessionistaMedia,
  IProgrammaFormazione,
  TContenuto,
  TMediaPiattaforma,
  TSpecializzazione,
} from "./interface";

export class ProfessionistaMedia implements IProfessionistaMedia {
  nome: string;
  cognome: string;
  specializzazione: TSpecializzazione;
  esperienza: number;
  interessi: string[];

  constructor(
    nome: string,
    cognome: string,
    specializzazione: TSpecializzazione,
    esperienza: number,
    interessi: string[]
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.specializzazione = specializzazione;
    this.esperienza = esperienza;
    this.interessi = interessi;
  }

  partecipaProgramma(programma: IProgrammaFormazione): void {
    programma.aggiungiPartecipante(this);
  }
}

export class ProgrammaFormazione implements IProgrammaFormazione {
  titolo: string;
  descrizione: string;
  specializzazione: TSpecializzazione;
  durata: number;
  elencoPartecipanti: IProfessionistaMedia[];

  constructor(
    titolo: string,
    descrizione: string,
    specializzazione: TSpecializzazione,
    durata: number,
    elencoPartecipanti: IProfessionistaMedia[] = []
  ) {
    this.titolo = titolo;
    this.descrizione = descrizione;
    this.specializzazione = specializzazione;
    this.durata = durata;
    this.elencoPartecipanti = elencoPartecipanti;
  }
  aggiungiPartecipante(professionista: IProfessionistaMedia): void {
    this.elencoPartecipanti.push(professionista);
    console.log(
      `${professionista.nome} ${professionista.cognome} è stato aggiunto a al programma ${this.titolo}`
    );
  }
}

export class Piattaforma implements IPiattaforma {
  nome: string;
  tipo: TMediaPiattaforma;
  descrizione: string;
  categorieContenuti: TContenuto[];

  constructor(
    nome: string,
    tipo: TMediaPiattaforma,
    descrizione: string,
    categorieContenuti: TContenuto[]
  ) {
    this.nome = nome;
    this.tipo = tipo;
    this.descrizione = descrizione;
    this.categorieContenuti = categorieContenuti;
  }

  pubblicaContenuto(
    professionista: IProfessionistaMedia,
    contenuto: string
  ): void {
    console.log(
      `${this.nome} ha pubblicato "${contenuto}" di ${professionista.nome} ${professionista.cognome}`
    );
  }
}
