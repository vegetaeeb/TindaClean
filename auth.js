window.onload = async () => {
  const auth0 = await createAuth0Client({
    domain: "dev-gczye7k6j72ulyuy.us.auth0.com",
    client_id: "yQaeyckqoA1iahtw9LdBRApSJcfp6GED",
  redirect_uri: "https://vegetaeeb.github.io/TClean/index.html"
});



  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {
    await auth0.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/TClean/");
  }

  const isAuthenticated = await auth0.isAuthenticated();
  if (isAuthenticated) {
    const user = await auth0.getUser();
    document.getElementById("user-info").innerHTML = `Bienvenido, ${user.name}`;
    document.getElementById("login").style.display = "none";
    document.getElementById("btnLogout").style.display = "inline-block";
  }
};

