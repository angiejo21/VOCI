export enum TSpecialty {
  journalism,
  publishing,
  direction,
  production,
}
export enum TMediaPlatform {
  print,
  online,
  audiovisual,
}
export enum TContent {
  article,
  interview,
  book,
  podcast,
  vlog,
  video,
}

// people that warks or wants to work in the media
export interface IMediaProfessional {
  firstName: string;
  lastName: string;
  specialty: TSpecialty;
  experience: number; //number of years
  interests: string[];
  enrollInProgram(program: ITrainingProgram): void;
}

//programs offered by Voci
export interface ITrainingProgram {
  title: string;
  description: string;
  specialty: TSpecialty;
  duration: number; //number of days
  partecipants: IMediaProfessional[];
  addPartecipant(professional: IMediaProfessional): void;
}

//media platforms that partner with Voci
export interface IPlatform {
  name: string;
  type: TMediaPlatform;
  description: string;
  contentTypes: TContent[];
  publishContent(professional: IMediaProfessional, content: string): void;
}
