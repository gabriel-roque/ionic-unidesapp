import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfessorPage } from './professor.page';

describe('ProfessorPage', () => {
  let component: ProfessorPage;
  let fixture: ComponentFixture<ProfessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
