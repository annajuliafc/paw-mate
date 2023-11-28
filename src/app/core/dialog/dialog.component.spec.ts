import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<DialogComponent>>;

  const dialogData = {
    title: 'Test Title',
    message: 'Test Message',
    buttonConfirmText: 'Confirm',
    buttonCancelText: 'Cancel',
  };

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [DialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: spy },
        { provide: MAT_DIALOG_DATA, useValue: dialogData },
      ],
    });

    dialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<DialogComponent>>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display dialog title and message', () => {
    const titleElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    const contentElement = fixture.debugElement.query(By.css('mat-dialog-content')).nativeElement;

    expect(titleElement.textContent).toContain(dialogData.title);
    expect(contentElement.textContent).toContain(dialogData.message);
  });

  it('should close the dialog when cancel button is clicked', () => {
    const cancelButton = fixture.debugElement.query(By.css('button[color="primary"]')).nativeElement;
    cancelButton.click();

    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should close the dialog when confirm button is clicked', () => {
    const confirmButton = fixture.debugElement.query(By.css('button[color="primary"]')).nativeElement;
    confirmButton.click();

    expect(dialogRefSpy.close).toHaveBeenCalled();
  });
});
