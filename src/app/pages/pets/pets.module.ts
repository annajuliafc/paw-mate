import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Route
import { PetsRoutingModule } from './pets-routing.module';
import { RouterModule } from '@angular/router';

// Components
import { PetRegisterComponent } from './pet-register/pet-register.component';
import { VaccinesComponent } from './vaccines/vaccines.component';
import { VaccineRegisterDialogComponent } from './vaccines/vaccine-register-dialog/vaccine-register-dialog.component';

@NgModule({
  declarations: [PetRegisterComponent, VaccinesComponent, VaccineRegisterDialogComponent],
  imports: [
    CommonModule,
    PetsRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [PetRegisterComponent],
})
export class PetsModule {}
