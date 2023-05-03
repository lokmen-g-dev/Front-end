import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAsVendorComponent } from './apply-as-vendor.component';

describe('ApplyAsVendorComponent', () => {
  let component: ApplyAsVendorComponent;
  let fixture: ComponentFixture<ApplyAsVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyAsVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyAsVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
