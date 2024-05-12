import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MOCK_LIST } from '../../services/list-investments.mock';
import { ListInvestmentsService } from '../../services/list-investments.service';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestmentsService;
  
  const mockList = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestmentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(Unit) should list investments', () => {
    spyOn(service, 'getInvestments').and.returnValue(of(mockList));

    component.ngOnInit();
    expect(service.getInvestments).toHaveBeenCalledWith();

    expect(component.investments.length).toEqual(5);
    expect(component.investments[0].name).toEqual('Banco 1');
    expect(component.investments[0].value).toEqual(100);
    expect(component.investments[component.investments.length - 1].name).toEqual('Banco 5');
    expect(component.investments[component.investments.length - 1].value).toEqual(100);
  });

  it('(Interface) should list investments', () => {
    spyOn(service, 'getInvestments').and.returnValue(of(mockList));

    component.ngOnInit();
    fixture.detectChanges();

    let investments = fixture.nativeElement.querySelectorAll('.list-items');
    expect(investments.length).toEqual(5);
    expect(investments[0].textContent.trim()).toEqual('Banco 1 | 100');
    expect(investments[investments.length - 1].textContent.trim()).toEqual('Banco 5 | 100');
  });
});
