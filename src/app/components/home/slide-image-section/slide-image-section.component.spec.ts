import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideImageSectionComponent } from './slide-image-section.component';

describe('SlideImageSectionComponent', () => {
  let component: SlideImageSectionComponent;
  let fixture: ComponentFixture<SlideImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideImageSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
