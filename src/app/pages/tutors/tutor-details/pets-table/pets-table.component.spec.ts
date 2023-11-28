import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetsTableComponent } from './pets-table.component';
import { TutorsModule } from '../../tutors.module';

describe('PetsTableComponent', () => {
  let component: PetsTableComponent;
  let fixture: ComponentFixture<PetsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetsTableComponent],
      imports: [TutorsModule]
    });

    fixture = TestBed.createComponent(PetsTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
