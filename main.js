//read more summary
const readMoreBtn = document.querySelector("#read-more");

readMoreBtn.addEventListener("click", () => {
  document.querySelector(".read-more-text").style.display = "block";
  readMoreBtn.style.display = "none";
  console.log("hello");
});
