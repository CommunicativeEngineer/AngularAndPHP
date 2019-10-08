import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifActualiteComponent } from './modif-actualite.component';

describe('ModifActualiteComponent', () => {
  let component: ModifActualiteComponent;
  let fixture: ComponentFixture<ModifActualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifActualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
