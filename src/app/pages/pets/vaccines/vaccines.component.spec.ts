import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VaccinesComponent } from './vaccines.component';
import { MatDialog } from '@angular/material/dialog';
import { VaccineRegisterDialogComponent } from './vaccine-register-dialog/vaccine-register-dialog.component';
import { Vaccine } from './Vaccine';
import { of } from 'rxjs';
import { PetsModule } from '../pets.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('VaccinesComponent', () => {
  let component: VaccinesComponent;
  let fixture: ComponentFixture<VaccinesComponent>;
  let mockMatDialog: any;
  let mockDialogRef: any;

  beforeEach(() => {
    mockDialogRef = {
      afterClosed: () =>
        of({ type: 'COVID-19', dateOfVacination: new Date() } as Vaccine),
    };

    mockMatDialog = {
      open: jasmine.createSpy('open').and.returnValue(mockDialogRef),
    };

    TestBed.configureTestingModule({
      declarations: [VaccinesComponent],
      imports: [PetsModule, BrowserAnimationsModule],
      providers: [
        { provide: MatDialog, useValue: mockMatDialog }
      ],
    });

    fixture = TestBed.createComponent(VaccinesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset vaccines', () => {
    component.vaccines.data = [{ type: 'Flu', dateOfVacination: new Date() }];
    component.resetVaccines();

    expect(component.vaccines.data.length).toBe(0);
    expect(component.addVaccines).toBeFalse();
  });

  it('should open vaccine register dialog', () => {
    spyOn(mockDialogRef, 'afterClosed').and.returnValue(
      of({ type: 'COVID-19', dateOfVacination: new Date() } as Vaccine)
    );

    component.openVaccineRegisterDialog();

    expect(mockMatDialog.open).toHaveBeenCalledWith(
      VaccineRegisterDialogComponent
    );
    expect(component.vaccines.data.length).toBe(1);
    expect(component.addVaccines).toBeFalse();
  });
});
