

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

export async function fetchFromGitHub(endpoint) {
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
    // don't wait for promise to fullfill as if there as wait
    const userPromise = fetchFromGitHub(`/users/${handle}`);
    const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);
    // mot waitinf for two htttp request sequentially
    const user = await userPromise;
    const repos = await reposPromise;

    console.log(user.name);
    console.log(`${repos.length} repos`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}
