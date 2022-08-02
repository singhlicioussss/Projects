import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetproductsComponent } from './setproducts.component';

describe('SetproductsComponent', () => {
  let component: SetproductsComponent;
  let fixture: ComponentFixture<SetproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
