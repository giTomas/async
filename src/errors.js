// export function showGitHubUser(handle) {
//   const url = `https://api.github.com/users/${handle}`;
//   fetch(url)
//       .then(response => response.json())
//       .then((user) => {
//         console.log(user.name);
//         console.log(user.location);
//       });
// }

export async function fetchGitHubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }

  return body;
}

export async function showGitHubUser(handle) {
  try {
    const user = await fetchGitHubUser(handle);
    console.log(user.name);
    console.log(user.location);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

export const showGitHubUserAsync2 = async function (handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  return user;
};

export const showGitHubUserAsync3 = async (handle) => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  return user;
};

export class GitHubApiClient {
  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    const user = await response.json();
    return user;
  }

}
