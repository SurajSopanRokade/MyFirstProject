import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteDrivenFormComponent } from './templete-driven-form.component';

describe('TempleteDrivenFormComponent', () => {
  let component: TempleteDrivenFormComponent;
  let fixture: ComponentFixture<TempleteDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleteDrivenFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempleteDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
