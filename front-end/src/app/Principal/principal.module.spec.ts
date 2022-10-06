import { PrincipalModule } from './principal.module';

describe('PrincipalModule', () => {
  let principalModule: PrincipalModule;

  beforeEach(() => {
    principalModule = new PrincipalModule();
  });

  it('should create an instance', () => {
    expect(principalModule).toBeTruthy();
  });
});