import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInstallComponent } from './modal-install.component';

describe('ModalInstallComponent', () => {
  let component: ModalInstallComponent;
  let fixture: ComponentFixture<ModalInstallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalInstallComponent]
    });
    fixture = TestBed.createComponent(ModalInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
