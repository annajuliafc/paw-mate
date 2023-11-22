import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Route
import { DashboardRoutingModule } from './dashboard-routing.module';

// Components
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
