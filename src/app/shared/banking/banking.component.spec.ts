import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
});
