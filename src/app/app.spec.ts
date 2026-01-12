import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { ActivatedRoute, provideRouter, withRouterConfig } from '@angular/router';
import "zone.js";
import "zone.js/testing";
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [    provideHttpClient(),  // provides _HttpClient
      provideApollo(() => ({
        cache: new InMemoryCache(),
        link: {
          request: () => null, // fake link to avoid real HTTP
        } as any,
      })),  provideRouter([], withRouterConfig({})), // provides router services
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: new Map(),
              queryParamMap: new Map()
            },
            params: { subscribe: (fn: any) => fn({}) },
            queryParams: { subscribe: (fn: any) => fn({}) }
          }
        }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(App);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, robo-angular');
  // });
});
