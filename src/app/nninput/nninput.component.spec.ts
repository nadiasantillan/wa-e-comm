import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NninputComponent } from './nninput.component';

describe('NninputComponent', () => {
  let component: NninputComponent;
  let fixture: ComponentFixture<NninputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NninputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NninputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
