import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlunoPage } from './aluno.page';

describe('AlunoPage', () => {
  let component: AlunoPage;
  let fixture: ComponentFixture<AlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
