import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpuseComponentComponent } from './my-httpuse-component.component';

describe('MyHttpuseComponentComponent', () => {
  let component: MyHttpuseComponentComponent;
  let fixture: ComponentFixture<MyHttpuseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHttpuseComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHttpuseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
