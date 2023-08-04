import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDepartementComponent } from './add-edit-departement.component';

describe('AddEditDepartementComponent', () => {
  let component: AddEditDepartementComponent;
  let fixture: ComponentFixture<AddEditDepartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditDepartementComponent]
    });
    fixture = TestBed.createComponent(AddEditDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
