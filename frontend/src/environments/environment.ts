// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const BASE_URL: string = "http://localhost:3344";
const APPLICATION_NAME: string = '/infymovie';

export const environment = {
  production: false,
  movieApi: BASE_URL + APPLICATION_NAME + '/movies'
};