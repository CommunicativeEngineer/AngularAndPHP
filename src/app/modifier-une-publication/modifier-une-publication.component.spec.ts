import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUnePublicationComponent } from './modifier-une-publication.component';

describe('ModifierUnePublicationComponent', () => {
  let component: ModifierUnePublicationComponent;
  let fixture: ComponentFixture<ModifierUnePublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierUnePublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierUnePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
