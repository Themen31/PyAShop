import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionesListComponent } from './donaciones-list.component';

describe('DonacionesListComponent', () => {
  let component: DonacionesListComponent;
  let fixture: ComponentFixture<DonacionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonacionesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
