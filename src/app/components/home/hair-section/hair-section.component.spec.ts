import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairSectionComponent } from './hair-section.component';

describe('HairSectionComponent', () => {
  let component: HairSectionComponent;
  let fixture: ComponentFixture<HairSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
