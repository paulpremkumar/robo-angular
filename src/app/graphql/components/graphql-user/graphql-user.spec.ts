import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlUser } from './graphql-user';

describe('GraphqlUser', () => {
  let component: GraphqlUser;
  let fixture: ComponentFixture<GraphqlUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphqlUser]
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
