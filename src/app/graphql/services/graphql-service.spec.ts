import { TestBed } from '@angular/core/testing';

import { GraphqlService } from './graphql-service';
import { provideApollo } from 'apollo-angular';
import { provideHttpClient } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/cache';
import { ApolloLink } from '@apollo/client/core';
describe('GraphqlService', () => {
  let service: GraphqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideHttpClient(), provideApollo(() => ({
      link: TestBed.inject(HttpLink).create({ uri: '/graphql' }),
      cache: new InMemoryCache(),
    }))],
    });
    service = TestBed.inject(GraphqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
