import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifContactUsComponent } from './modif-contact-us.component';

describe('ModifContactUsComponent', () => {
  let component: ModifContactUsComponent;
  let fixture: ComponentFixture<ModifContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
