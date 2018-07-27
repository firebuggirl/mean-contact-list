import { ContactCreateModule } from './contact-create.module';

describe('ContactCreateModule', () => {
  let contactCreateModule: ContactCreateModule;

  beforeEach(() => {
    contactCreateModule = new ContactCreateModule();
  });

  it('should create an instance', () => {
    expect(contactCreateModule).toBeTruthy();
  });
});
