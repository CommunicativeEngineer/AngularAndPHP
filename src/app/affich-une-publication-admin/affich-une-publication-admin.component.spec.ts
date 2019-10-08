import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichUnePublicationAdminComponent } from './affich-une-publication-admin.component';

describe('AffichUnePublicationAdminComponent', () => {
  let component: AffichUnePublicationAdminComponent;
  let fixture: ComponentFixture<AffichUnePublicationAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichUnePublicationAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichUnePublicationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
