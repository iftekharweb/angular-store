import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitSectionComponent } from './kit-section.component';

describe('KitSectionComponent', () => {
  let component: KitSectionComponent;
  let fixture: ComponentFixture<KitSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
