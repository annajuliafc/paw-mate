import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PetRegisterComponent } from './pet-register/pet-register.component';

const routes: Routes = [
  {
    path: 'register/:tutorId',
    component: PetRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
