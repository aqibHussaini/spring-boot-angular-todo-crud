import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VietodoComponent } from './vietodo.component';

describe('VietodoComponent', () => {
  let component: VietodoComponent;
  let fixture: ComponentFixture<VietodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VietodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VietodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
