import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Login } from './login';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login, StoreModule.forRoot({}),],
      providers:[provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
