import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpUseCompComponent } from './my-http-use-comp.component';

describe('MyHttpUseCompComponent', () => {
  let component: MyHttpUseCompComponent;
  let fixture: ComponentFixture<MyHttpUseCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHttpUseCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHttpUseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
