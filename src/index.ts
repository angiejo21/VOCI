import { MediaProfessional, TrainingProgram, Platform } from "./class";
import { TContent, TMediaPlatform, TSpecialty } from "./interface";

const professional1 = new MediaProfessional(
  "Giulia",
  "Bianchi",
  TSpecialty.journalism,
  5,
  ["politics", "fiction", "travel"]
);
const professional2 = new MediaProfessional(
  "Rachele",
  "Neri",
  TSpecialty.direction,
  3,
  ["art", "travel", "cooking"]
);
const professional3 = new MediaProfessional(
  "Lorenzo",
  "Rossi",
  TSpecialty.publishing,
  10,
  ["sport", "fiction", "cooking"]
);

const program1 = new TrainingProgram(
  "Gender in everyday narrative",
  "We will reason together to develop a reworking of the journalistic lexicon in a neutral and inclusive key",
  TSpecialty.journalism,
  5
);
const program2 = new TrainingProgram(
  "Reasoning about rejection",
  "Use NO as a starting point.",
  TSpecialty.production,
  6
);
const program3 = new TrainingProgram(
  "Intersectionality. Beyond the word.",
  "Addressing the challenge of diversity in the workplace as a stimulus for growth and the search for new audiences",
  TSpecialty.publishing,
  14
);

const platform1 = new Platform(
  "Fiere",
  TMediaPlatform.online,
  "Social media with a focus on feminism and intersectionality",
  [TContent.podcast, TContent.interview]
);
const platform2 = new Platform(
  "Il mondo delle idee",
  TMediaPlatform.print,
  "Independent publisher",
  [TContent.book, TContent.article]
);
const platform3 = new Platform(
  "Riverbend Channel",
  TMediaPlatform.audiovisual,
  "Culture and travel channel",
  [TContent.video, TContent.vlog]
);

professional1.enrollInProgram(program1);
professional2.enrollInProgram(program2);

program2.addPartecipant(professional3);
program3.addPartecipant(professional3);

console.log(program1.partecipants);
console.log(program2.partecipants);
console.log(program3.partecipants);

platform1.publishContent(
  professional1,
  "Interviewing AOC. Where are we headed?"
);
platform2.publishContent(professional3, "Without onion, even men cry.");
platform3.publishContent(professional2, "Two-spirit people");
platform1.publishContent(
  professional3,
  "Woman's Title. A weekly podcast about books."
);
platform2.publishContent(
  professional1,
  "School and reality, a complex relationship."
);
platform3.publishContent(
  professional2,
  "A week behind bars, vlog from the Giudecca prison."
);
