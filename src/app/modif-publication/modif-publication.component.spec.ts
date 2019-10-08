import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPublicationComponent } from './modif-publication.component';

describe('ModifPublicationComponent', () => {
  let component: ModifPublicationComponent;
  let fixture: ComponentFixture<ModifPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
