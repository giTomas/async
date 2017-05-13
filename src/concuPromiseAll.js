
export async function fetchFromGitHubUser(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }

  return body;
}

export async function showUserAndRepos(handle) {
  try {
    const [user, repos] = await Promise.all([
      fetchFromGitHubUser(`/users/${handle}`),
      fetchFromGitHubUser(`/users/${handle}/repos`),
    ]);

    console.log(user.name);
    console.log(`${repos.length} repos`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}
