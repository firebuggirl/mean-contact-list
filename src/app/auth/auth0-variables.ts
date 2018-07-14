
//import { environment } from '../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'QHWVXznSaFNIB47Zbrn2A4DC5AobbVnQ',
  domain: 'juliettet.auth0.com'
  //callbackURL: 'http://localhost:7777'
  callbackURL:'https://ang6-crud.herokuapp.com/'
  //callbackURL: 'http://aci-demo-juliettet.eastus.azurecontainer.io/'
  //callbackURL: 'http://138.68.230.240:32780/' //DigitalOcean Test
};
