import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingMassegeComponent } from './sending-massege.component';

describe('SendingMassegeComponent', () => {
  let component: SendingMassegeComponent;
  let fixture: ComponentFixture<SendingMassegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendingMassegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingMassegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
