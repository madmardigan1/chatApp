import { TestBed } from '@angular/core/testing';

import { FirestoreServService } from './firestore-serv.service';

describe('FirestoreServService', () => {
  let service: FirestoreServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
