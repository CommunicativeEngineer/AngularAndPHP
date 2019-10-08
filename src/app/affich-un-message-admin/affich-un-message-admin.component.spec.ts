import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichUnMessageAdminComponent } from './affich-un-message-admin.component';

describe('AffichUnMessageAdminComponent', () => {
  let component: AffichUnMessageAdminComponent;
  let fixture: ComponentFixture<AffichUnMessageAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichUnMessageAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichUnMessageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
