import {
  IPlatform,
  IMediaProfessional,
  ITrainingProgram,
  TContent,
  TMediaPlatform,
  TSpecialty,
} from "./interface";

export class MediaProfessional implements IMediaProfessional {
  firstName: string;
  lastName: string;
  specialty: TSpecialty;
  experience: number;
  interests: string[];

  constructor(
    firstName: string,
    lastName: string,
    specialty: TSpecialty,
    experience: number,
    interests: string[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.specialty = specialty;
    this.experience = experience;
    this.interests = interests;
  }

  enrollInProgram(program: ITrainingProgram): void {
    program.addPartecipant(this);
  }
}

export class TrainingProgram implements ITrainingProgram {
  title: string;
  description: string;
  specialty: TSpecialty;
  duration: number;
  partecipants: IMediaProfessional[];

  constructor(
    title: string,
    description: string,
    specialty: TSpecialty,
    duration: number,
    partecipants: IMediaProfessional[] = []
  ) {
    this.title = title;
    this.description = description;
    this.specialty = specialty;
    this.duration = duration;
    this.partecipants = partecipants;
  }
  addPartecipant(professional: IMediaProfessional): void {
    this.partecipants.push(professional);
    console.log(
      `${professional.firstName} ${professional.lastName} has been added to the program: ${this.title}`
    );
  }
}

export class Platform implements IPlatform {
  name: string;
  type: TMediaPlatform;
  description: string;
  contentTypes: TContent[];

  constructor(
    name: string,
    type: TMediaPlatform,
    description: string,
    contentTypes: TContent[]
  ) {
    this.name = name;
    this.type = type;
    this.description = description;
    this.contentTypes = contentTypes;
  }

  publishContent(professional: IMediaProfessional, content: string): void {
    console.log(
      `${this.name} published "${content}" by ${professional.firstName} ${professional.lastName}`
    );
  }
}
