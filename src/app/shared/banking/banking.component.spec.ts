import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from '../investments/components/list/list.component';
import { BankingComponent } from './banking.component';


describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingComponent, ListComponent, HttpClientTestingModule] // ListComponent is imported because it is used in BankingComponent
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testes Unitários
  it('(Unit) getPoupanca: should return 10', () => { 
    expect(component.getPoupanca).toEqual(10);
  });

  it('(Unit) getCarteira: should return 50', () => { 
    expect(component.getCarteira).toEqual(50);
  });

  it('(Unit) setSacar: should transfer 5 from poupanca to carteira', () => { 
    expect(component.setSacar('5'));
    expect(component.getPoupanca).toEqual(5);
    expect(component.getCarteira).toEqual(55);
  });

  it('(Unit) setDepositar: should transfer 10 from carteira to poupanca', () => { 
    expect(component.setDepositar('10'));
    expect(component.getPoupanca).toEqual(20);
    expect(component.getCarteira).toEqual(40);
  });

  it('(Unit) setSacar: should do not have transfer, value is NaN or poupanca < value', () => { 
    expect(component.setSacar('string')).toBeUndefined();
    expect(component.setSacar('20')).toBeUndefined();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it('(Unit) setDepositar: should do not have transfer, value is NaN or carteira < value', () => { 
    expect(component.setDepositar('string')).toBeUndefined();
    expect(component.setDepositar('60')).toBeUndefined();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  // Testes de Interface
  it('(Interface) setDepositar: should transfer 10 from carteira to poupanca', () => { 
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20');
    expect(component.getPoupanca).toEqual(20);
    expect(component.getCarteira).toEqual(40);
  });

  it('(Interface) setSacar: should transfer 10 from poupanca to carteira', () => { 
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-carteira').textContent).toEqual('60');
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });
});
