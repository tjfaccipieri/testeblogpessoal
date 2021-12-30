import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTemaComponent } from './edit-tema.component';

describe('EditTemaComponent', () => {
  let component: EditTemaComponent;
  let fixture: ComponentFixture<EditTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
