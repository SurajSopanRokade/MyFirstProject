import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstServComponent } from './my-first-serv.component';

describe('MyFirstServComponent', () => {
  let component: MyFirstServComponent;
  let fixture: ComponentFixture<MyFirstServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFirstServComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFirstServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
