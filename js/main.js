const FORM = document.getElementById("form");
const CONTAINER = document.getElementById("container");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = search.value;
  console.log(userName);
  getDataUser(userName);
});
async function getDataUser(userName) {
  try {
    let data = await fetch(`https://api.github.com/users/${userName}`);
    let user = await data.json();
    console.log(user);
    showUser(user);
  } catch (error) {
    console.log(error);
  }
}
function showUser(user) {
  let newUser = `<article class="container__card">
                    <section class="card">
                    <img class="card__profile" src="${user.avatar_url}" alt="${user.name}" />
                    <h2 class="card__name">${user.name}</h2>
                    <p class="card__bio">
                        ${user.bio}
                    </p>
                    </section>
                    <section class="followers">
                    <section class="followers__follow">
                        <p>
                        <i class="fas fa-user-friends"></i>
                        <span class="followers__follow--count">${user.followers}</span> followers -
                        <span class="followers__following--count">${user.following}</span> following
                        </p>
                    </section>
                    </section>
                    <section class="contact">
                    <p class="contact__city">
                        <i class="fas fa-map-marker-alt"></i> ${user.location}
                    </p>
                    <p class="contact__email">
                        <i class="far fa-envelope"></i> ${user.email}
                    </p>
                    <p class="contact__page">
                        <i class="fas fa-link"></i> <a href="${user.blog}" target="_black" class="page">${user.blog}</a>
                    </p>
                    </section>
                </article>`;
  CONTAINER.innerHTML = newUser;
}
