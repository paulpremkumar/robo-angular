import { TestBed } from '@angular/core/testing';

import { GreatService } from './great-service';

describe('GreatService', () => {
  let service: GreatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('It should be get welcome message with name',()=>{
    expect(service.getMessageByName('Paul')).toBe("Welcome Paul");
  });
});
