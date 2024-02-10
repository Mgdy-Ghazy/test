import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDsdetailsComponent } from './product-dsdetails.component';

describe('ProductDsdetailsComponent', () => {
  let component: ProductDsdetailsComponent;
  let fixture: ComponentFixture<ProductDsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDsdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
