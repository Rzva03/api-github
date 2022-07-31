const FORM = document.getElementById("form");
const CONTAINER = document.getElementById("container");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = search.value;
  console.log(username);
  getDataUser(username);
});
async function getDataUser(username) {
  try {
    let data = await fetch(`https://api.github.com/users/${username}`);
    let json = await data.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
function name(params) {}
