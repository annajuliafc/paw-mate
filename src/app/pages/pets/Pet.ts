import { Vaccine } from "./vaccines/Vaccine";

export interface Pet {
  tutorId: number,
  tutorName: string,
  petId: number,
  name: string;
  birthDate: Date;
  breed: string;
  color: string;
  weight: string;
  vaccines: Vaccine[];
}
