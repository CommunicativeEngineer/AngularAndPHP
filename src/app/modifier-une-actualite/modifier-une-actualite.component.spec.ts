import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUneActualiteComponent } from './modifier-une-actualite.component';

describe('ModifierUneActualiteComponent', () => {
  let component: ModifierUneActualiteComponent;
  let fixture: ComponentFixture<ModifierUneActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierUneActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierUneActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
