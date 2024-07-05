export enum TSpecializzazione {
  giornalismo,
  editoria,
  regia,
  produzione,
}
export enum TMediaPiattaforma {
  stampato,
  online,
  audiovisivo,
}
export enum TContenuto {
  articolo,
  intervista,
  libro,
  podcast,
  vlog,
  video,
}

// lavorano o aspirano a lavorare nei media
export interface IProfessionistaMedia {
  nome: string;
  cognome: string;
  specializzazione: TSpecializzazione;
  esperienza: number; //numero di anni
  interessi: string[];
  partecipaProgramma(programma: IProgrammaFormazione): void;
}

//programmi offerti da Voci
export interface IProgrammaFormazione {
  titolo: string;
  descrizione: string;
  specializzazione: TSpecializzazione;
  durata: number; //numero di giorni
  elencoPartecipanti: IProfessionistaMedia[];
  aggiungiPartecipante(professionista: IProfessionistaMedia): void;
}

//le piattaforme di pubblicazione che collaborano con Voci
export interface IPiattaforma {
  nome: string;
  tipo: TMediaPiattaforma;
  descrizione: string;
  categorieContenuti: TContenuto[];
  pubblicaContenuto(
    professionista: IProfessionistaMedia,
    contenuto: string
  ): void;
}
