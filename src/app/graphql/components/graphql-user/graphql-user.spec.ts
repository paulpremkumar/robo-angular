import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlUser } from './graphql-user';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
describe('GraphqlUser', () => {
  let component: GraphqlUser;
  let fixture: ComponentFixture<GraphqlUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphqlUser],
      providers:[    provideHttpClient(),  // provides _HttpClient
      provideApollo(() => ({
        cache: new InMemoryCache(),
        link: {
          request: () => null, // fake link to avoid real HTTP
        } as any,
      })),
      {
        provide: HttpLink,
        useValue: { create: () => ({}) } // mock HttpLink
      },]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphqlUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
