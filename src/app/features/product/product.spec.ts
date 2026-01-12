import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product } from './product';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

describe('Product', () => {
  let component: Product;
  let fixture: ComponentFixture<Product>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product,StoreModule.forRoot({})],
      providers:[provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
