import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichUneActualiteAdminComponent } from './affich-une-actualite-admin.component';

describe('AffichUneActualiteAdminComponent', () => {
  let component: AffichUneActualiteAdminComponent;
  let fixture: ComponentFixture<AffichUneActualiteAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichUneActualiteAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichUneActualiteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
