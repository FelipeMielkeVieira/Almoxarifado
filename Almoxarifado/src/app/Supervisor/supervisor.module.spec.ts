import { SupervisorModule } from './supervisor.module';

describe('SupervisorModule', () => {
  let supervisorModule: SupervisorModule;

  beforeEach(() => {
    supervisorModule = new SupervisorModule();
  });

  it('should create an instance', () => {
    expect(supervisorModule).toBeTruthy();
  });
});
