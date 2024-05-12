import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ListInvestmentsService } from './list-investments.service';
import { Investments } from '../model/investments';
import { MOCK_LIST } from './list-investments.mock';

describe('ListInvestmentsService', () => {
  let service: ListInvestmentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const URL = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';
  const mockList = MOCK_LIST;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(ListInvestmentsService);
  });

  afterEach(() => { 
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(Unit) should return list all investments', (done) => { 
    service.getInvestments().subscribe((data: Investments[]) => { 
      expect(data[0].name).toEqual('Banco 1');
      expect(data[0].value).toEqual(100);

      expect(data[data.length - 1].name).toEqual('Banco 5');
      expect(data[data.length - 1].value).toEqual(100);
      done();
    });

    const req = httpTestingController.expectOne(URL);
    req.flush(mockList);
    expect(req.request.method).toEqual('GET');
  });
});
