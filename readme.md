## Cliente

<details>
<summary>Voci</summary>

### Nome

Voci

### Da dove nasce l'idea

Si sente la la mancanza di voci femminili nel panorama europeo, così le fondatrici hanno voluto rompere questo silenzio.

### Vision

Contribuire al raggiungimento della parità di genere.

### Mission

Dare voce alle donne che stanno cambiando il mondo con piccoli e grandi passi.

### Chi siamo

Voci è un media brand nato per colmare il vuoto di una narrazione mediatica spesso con un'impronta che non dà spazio alle voce delle donne. Qui si cerca la parità, la condivisione delle storie di donne che stanno lottando per arrivarci.

Il team è composto da donne e uomini che credono nella parità e nella divulgazione dei valori di uguaglianza e rispetto reciproco.

###### Come funziona?

Voci divulga sul blog, sui social e su YouTube notizie, narrazioni e punti di vista differenti.

Vengono realizzati principalmente video, interviste e servizi, a volte sponsorizzati da grandi aziende o istituzioni in linea con i loro valori. I social sono il veicolo più forte, dove si aprono dibattiti e confronti e dove c’è una maggiore diffusione.

</details>

## Struttura

### Interfacce

<details>
<summary> Interfaccia IProfessionistaMedia </summary>
</br>

_Definisci un'interfaccia IProfessionistaMedia per rappresentare le donne che lavorano o aspirano a lavorare nei media.Segui queste indicazioni:_

#### Proprietà:

- [ ] nome
- [ ] cognome
- [ ] specializzazione (giornalismo, regia, produzione, ecc.)
- [ ] esperienza
- [ ] interessi

#### Metodo:

per iscriversi a un programma di formazione.

- [ ] _partecipaProgramma(programma: IProgrammaFormazione): void_

</details>

<details>
<summary>Interfaccia IProgrammaFormazione</summary>
</br>

_Definisci un'interfaccia IProgrammaFormazione per rappresentare i programmi di formazione, mentorship e sviluppo professionale offerti da Voci. Segui queste indicazioni:_

#### Proprietà:

- [ ] titolo
- [ ] descrizione
- [ ] ambito di specializzazione
- [ ] durata
- [ ] elenco partecipanti (IProfessionistaMedia[])

#### Metodo:

per aggiungere una professionista all'elenco dei partecipanti.

- [ ] _aggiungiPartecipante(professionista: IProfessionistaMedia): void_

</details>

<details>
<summary>Interfaccia IPiattaforma</summary>
</br>

_Definisci un'interfaccia IPiattaforma per rappresentare le piattaforme di pubblicazione (sia tradizionali che digitali) che collaborano con il media per promuovere contenuti che rispecchiano la diversità e la parità di genere. Segui queste indicazioni:_

#### Proprietà:

- [ ] nome
- [ ] tipo (stampato, online, audiovisivo)
- [ ] descrizione
- [ ] categorie di contenuto

#### Metodo:

per pubblicare il lavoro di una professionista media.

- [ ] _pubblicaContenuto(professionista: IProfessionistaMedia, contenuto: string): void_

</details>

### Classi

Implementa le classi ProfessionistaMedia, ProgrammaFormazione, e Piattaforma che rispettivamente implementano le interfacce IProfessionistaMedia, IProgrammaFormazione, e IPiattaforma.

- Classe ProfessionistaMedia: gestisce le informazioni sulle professioniste dei media, inclusa la loro partecipazione ai programmi di formazione.
- Classe ProgrammaFormazione: gestisce i dettagli dei programmi di formazione, mentorship e sviluppo professionale, inclusi gli iscritti.
- Classe Piattaforma: rappresenta le piattaforme di pubblicazione che si impegnano a promuovere contenuti diversi e inclusivi.

Logica di collegamento

- Nella classe ProfessionistaMedia, il metodo partecipaProgramma consente alle professioniste di iscriversi ai programmi di formazione offerti da Voci.
- Nella classe ProgrammaFormazione, il metodo aggiungiPartecipante facilita l'aggiunta di nuove professioniste ai programmi di sviluppo.
- Nella classe Piattaforma, il metodo pubblicaContenuto permette alle piattaforme di collaborare con le professioniste dei media per pubblicare lavori che promuovono la parità di genere e la diversità nei contenuti.

### Istanziare e testare

- [ ] Istanzia alcuni oggetti ProfessionistaMedia per rappresentare donne che lavorano o aspirano a lavorare nel settore dei media.
- [ ] Istanzia oggetti ProgrammaFormazione per rappresentare i diversi programmi offerti da Voci, focalizzati su mentorship, sviluppo professionale e specializzazione tecnica.
- [ ] Istanzia oggetti Piattaforma per rappresentare vari canali e piattaforme (sia tradizionali sia digitali) che collaborano con Voci per promuovere contenuti che riflettono la diversità e la parità di genere.
- [ ] Verifica il funzionamento della logica di collegamento tra professioniste dei media, programmi di formazione, e piattaforme di pubblicazione.
