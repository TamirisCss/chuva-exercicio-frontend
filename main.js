//read more summary
const readMoreBtn = document.querySelector("#read-more");

readMoreBtn.addEventListener("click", () => {
  document.querySelector(".read-more-text").style.display = "block";
  readMoreBtn.style.display = "none";
});

//create and send topic
const createTopicBtn = document.querySelector(".share-idea-btn");
const submitBtn = document.querySelector(".submitBtn");
const newTopicBtn = document.querySelector(".newTopicBtn");

const createTopic = document.querySelector(".create-topic");
const shareIdeas = document.querySelector(".share-ideas");
const topicSent = document.querySelector(".topic-sent");

const inputCreateTopic = document.querySelector("#input-create-topic");
const textArea = document.querySelector("#text-area");

createTopicBtn.addEventListener("click", () => {
  createTopic.style.display = "flex";
  shareIdeas.style.display = "none";
});

submitBtn.addEventListener("click", () => {
  if (inputCreateTopic.value.length > 0 && textArea.value.length > 0) {
    topicSent.style.display = "block";
    createTopic.style.display = "none";
  } else {
    alert("Assunto ou conteúdo estão vazios");
  }
  inputCreateTopic.value = "";
  textArea.value = "";
});

newTopicBtn.addEventListener("click", () => {
  createTopic.style.display = "flex";
  topicSent.style.display = "none";
});

//expand answers
const expandAnswerBtn = document.querySelector(".expand-answer-btn");

expandAnswerBtn.addEventListener("click", () => {
  document.querySelector(".card-topic-expand").style.display = "block";
});
