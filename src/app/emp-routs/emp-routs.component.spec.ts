import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRoutsComponent } from './emp-routs.component';

describe('EmpRoutsComponent', () => {
  let component: EmpRoutsComponent;
  let fixture: ComponentFixture<EmpRoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpRoutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpRoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
