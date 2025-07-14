import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarProdutosComponent } from './importar-produtos.component';

describe('ImportarProdutosComponent', () => {
  let component: ImportarProdutosComponent;
  let fixture: ComponentFixture<ImportarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportarProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
