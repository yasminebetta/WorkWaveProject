import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDisplayComponent } from './fiche-display.component';

describe('FicheDisplayComponent', () => {
  let component: FicheDisplayComponent;
  let fixture: ComponentFixture<FicheDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
