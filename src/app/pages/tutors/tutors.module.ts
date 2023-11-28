import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Route
import { TutorsRoutingModule } from './tutors-routing.module';

// Components
import { TutorRegisterComponent } from './tutor-register/tutor-register.component';
import { TutorDetailsComponent } from './tutor-details/tutor-details.component';

// Modules
import { MaterialModule } from 'src/app/core/material/material.module';
import { PetsTableComponent } from './tutor-details/pets-table/pets-table.component';

@NgModule({
  declarations: [
    TutorRegisterComponent,
    TutorDetailsComponent,
    PetsTableComponent,
  ],
  imports: [
    CommonModule,
    TutorsRoutingModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TutorRegisterComponent, TutorDetailsComponent],
})
export class TutorsModule {}
