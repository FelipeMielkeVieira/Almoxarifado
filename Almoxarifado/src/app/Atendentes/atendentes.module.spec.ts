import { AtendentesModule } from './atendentes.module';

describe('AtendentesModule', () => {
  let atendentesModule: AtendentesModule;

  beforeEach(() => {
    atendentesModule = new AtendentesModule();
  });

  it('should create an instance', () => {
    expect(atendentesModule).toBeTruthy();
  });
});
