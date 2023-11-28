import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/core/material/material.module';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
