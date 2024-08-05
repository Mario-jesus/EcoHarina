import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueChainComponent } from './value-chain.component';

describe('ValueChainComponent', () => {
  let component: ValueChainComponent;
  let fixture: ComponentFixture<ValueChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueChainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
