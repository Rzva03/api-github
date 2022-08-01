const FORM = document.getElementById("form");
const CONTAINER = document.getElementById("container");
const BODY = document.querySelector("body");

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = search.value;
  getDataUser(userName);
  search.value = "";
});
async function getDataUser(userName) {
  try {
    let data = await fetch(`https://api.github.com/users/${userName}`);
    if (!data.ok) {
      throw new Error(data.status);
    }
    let user = await data.json();
    showUser(user);
    changeDarkToWhite();
  } catch (error) {
    showError(error.message);
  }
}
function showUser(user) {
  let avatar_url = user.avatar_url,
    name = validateName(user.name),
    bio = validateBio(user.bio),
    location = validateLocation(user.location),
    email = validateEmail(user.email),
    followers = user.followers,
    following = user.following,
    blog = validateBlog(user.blog);
  let newUser = `<article class="container__card">
                    <section class="card">
                    <img class="card__profile" src="${avatar_url}" alt="${name}" />
                    <h2 class="card__name">${name}</h2>
                    <p class="card__bio">
                        ${bio}
                    </p>
                    </section>
                    <section class="followers">
                    <section class="followers__follow">
                        <p>
                        <i class="fas fa-user-friends"></i>
                        <span class="followers__follow--count">${followers}</span> followers -
                        <span class="followers__following--count">${following}</span> following
                        </p>
                    </section>
                    </section>
                    <section class="contact">
                    <p class="contact__city">
                        <i class="fas fa-map-marker-alt"></i> ${location}
                    </p>
                    <p class="contact__email">
                        <i class="far fa-envelope"></i> ${email}
                    </p>
                    <p class="contact__page">
                        <i class="fas fa-link"></i> <a href="${blog}" target="_black" class="page">${blog}</a>
                    </p>
                    </section>
                </article>`;
  CONTAINER.innerHTML = newUser;
}
function validateName(name) {
  if (name == null) {
    return "Sin nombre";
  }
  return name;
}
function validateBio(bio) {
  if (bio == null) {
    return "Sin bio";
  }
  return bio;
}
function validateLocation(location) {
  if (location == null) {
    return "Sin localización";
  }
  return location;
}
function validateEmail(email) {
  if (email == null) {
    return "Sin email";
  }
  return email;
}
function validateBlog(blog) {
  if (blog == "") {
    return "Sin blog";
  }
  return blog;
}
function showError(error) {
  console.log(error);
  location.href = "api-github/errors/404.html";
}
function changeDarkToWhite() {
  BODY.classList.remove("dark");
}
