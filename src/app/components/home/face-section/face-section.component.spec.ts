import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSectionComponent } from './face-section.component';

describe('FaceSectionComponent', () => {
  let component: FaceSectionComponent;
  let fixture: ComponentFixture<FaceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
