import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/pages/pets/Pet';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.scss'],
})
export class PetsTableComponent {
  @Input() pets!: Pet[];
  @Input() petId!: number;
}
