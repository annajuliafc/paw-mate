import { Pet } from "../pets/Pet";

export interface Tutor {
  tutorId: number;
  name: string;
  nickName: string;
  birthDate: Date;
  pets: Pet[];
}
