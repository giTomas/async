import * as app from './src/';

// app.showGitHubUser('mariusschulz');
// app.fetchGitHubUser('giromx')
//       .then((user) => {
//         console.log(user);
//       })
//       .catch((err) => {
//         console.error(`Errro: ${err.message}`);
//       });
//
// app.showGitHubUser('grixomx');
// app.showGitHubUser('giTomas');
// app.showGitHubUserAsync2('giTomas')
//       .then((user) => {
//         console.log(user.name);
//         console.log(user.location);
//       });
// app.showGitHubUserAsync3('giTomas')
//       .then((user) => {
//         console.log(user.name);
//         console.log(user.location);
//       });
// (async () => {
//   const user = await app.showGitHubUserAsync3('giTomas');
//   console.log(user.name);
//   console.log(user.location);
// })();

// (async () => {
//   const client = new app.GitHubApiClient();
//   const user = await client.fetchUser('giTomas');
//   console.log(user.name);
//   console.log(user.location);
// })();

// app.showUserAndRepos('giTomas');
// console.log('sync');

app.main();
