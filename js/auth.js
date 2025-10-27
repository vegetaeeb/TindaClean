window.onload = async () => {
  const auth0 = await createAuth0Client({
    domain: "dev-gczye7k6j72ulyuy.us.auth0.com",
    client_id: "yQaeyckqoA1iahtw9LdBRApSJcfp6GED",
  });

  const loginButton = document.getElementById("login");
  const logoutButton = document.getElementById("logout");
  const profileDiv = document.getElementById("profile");

  loginButton.addEventListener("click", () => auth0.loginWithRedirect());
  logoutButton.addEventListener("click", () => auth0.logout({ returnTo: window.location.origin }));

  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
  }

  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) {
    const user = await auth0.getUser();
    profileDiv.innerHTML = `<p>Hola, ${user.name}</p>`;
    loginButton.style.display = "none";
    logoutButton.style.display = "inline-block";
  }
};

