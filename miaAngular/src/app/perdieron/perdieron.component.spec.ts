import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdieronComponent } from './perdieron.component';

describe('PerdieronComponent', () => {
  let component: PerdieronComponent;
  let fixture: ComponentFixture<PerdieronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerdieronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdieronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
