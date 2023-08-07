import { posts, users, suggestUsers } from "./database.js";

// function handeleModalPost(posts) {
//     const containerController = document.querySelector('.container__controller')
//     const button_posts = document.querySelectorAll('.posts__button');

//     let buttonFound = {};

//     for (let i = 0; i < button_posts.length; i++) {
//         const buttonClick = button_posts[i];

//         buttonClick.addEventListener('click', function (event) {
//             containerController.innerHTML = '';

//             for (let postId = 0; postId < posts.length; postId++) {
//                 if (posts[postId].id === event.target.id) {
//                     buttonFound = posts[postId];
//                 }
//             }
//         })

//         const postModal = createModal(buttonFound);
//         containerController.appendChild(postModal);
//         containerController.showModal();
//     }
// }


function createModal(posts) {
  const containerController = document.querySelector('.container__controller');
  containerController.showModal();
  containerController.innerHTML = '';

  containerController.insertAdjacentHTML('beforeend', `
    <div class="article__info">
    <img src=${posts.img} class="profile__photo"/>
    <div class="article__user">
    <span class='span__close'>X</span>
      <h2 class="user__name title2">${posts.user}</h2>
      <p class="user__job text2 ">${posts.stack} </p>
    </div>
  </div>
  <h2 class="posts__title title1">
    ${posts.title}
  </h2>
  <p class=" text1">
    ${posts.text}
  </p>
    `);

  const closeButton = document.querySelector('.span__close');
  closeButton.addEventListener('click', function () {
    containerController.close();
  });

  // const articleSection = document.querySelector('.posts__aticle');
  // articleSection.innerHTML = '';
  // const button_post = document.querySelector('.posts__button')

  // const div_container = document.createElement('div');
  // const article_div = document.createElement('div');
  // const spanClose = document.createElement('span');
  // const article_image = document.createElement('img');
  // const article_div_user = document.createElement('div');
  // const user_name = document.createElement('h2');
  // const user_job = document.createElement('p');

  // const article_title = document.createElement('h2');
  // const article_post_info = document.createElement('p');

  // div_container.classList.add('div__container');
  // article_div.classList.add('article__info');
  // article_image.classList.add('profile__photo');
  // article_div_user.classList.add('article__user');
  // spanClose.classList.add('span__close');
  // spanClose.innerText = "X"

  // user_name.classList.add('user__name', 'title2');
  // user_job.classList.add('user__job', 'text2');

  // article_title.classList.add('post__title', 'title1');
  // article_post_info.classList.add('post__info', 'text1');

  // // button_post.id = posts.id;
  // article_image.src = posts.img;

  // user_name.innerText = posts.user;
  // user_job.innerText = posts.stack;

  // article_title.innerText = posts.title;
  // article_post_info.innerText = posts.text;

  // article_div_user.append(user_name, user_job);
  // article_div.append(article_image, article_div_user);
  // articleSection.append(spanClose, article_div, article_title, article_post_info);
  // div_container.appendChild(articleSection);

  // containerController.appendChild(div_container);
}

// function closeHandleModalPost() {
//     const containerController = document.querySelector('.container__controller')

//     const button_close = document.querySelector('.span__close');
//     button_close.addEventListener('click', function () {

//         containerController.close();
//     })
// }


// área dos posts

function renderPosts(posts) {
  const article_main = document.querySelector('.posts__aticle')
  article_main.innerHTML = '';

  for (let i = 0; i < posts.length; i++) {
    const postsRender = posts[i];

    const individualPost = createPost(postsRender)
    article_main.appendChild(individualPost);
  }
}

function createPost(postsArray) {
  const article_main = document.createElement('div');
  const article_div = document.createElement('div');
  const article_image = document.createElement('img');
  const article_div_user = document.createElement('div');
  const user_name = document.createElement('h2');
  const user_job = document.createElement('p');

  const article_title = document.createElement('h2');
  const article_post_info = document.createElement('p');

  const div_container_likes = document.createElement('div');
  const button_post = document.createElement('button');
  const div_like_section = document.createElement('div');
  const div_image_like = document.createElement('img');
  const small_content = document.createElement('small');


  article_div.classList.add('article__info');
  article_image.classList.add('profile__photo');
  article_div_user.classList.add('article__user');

  div_container_likes.classList.add('container__likes');
  button_post.classList.add('posts__button');
  div_like_section.classList.add('container__img');
  div_image_like.classList.add('img__post');
  small_content.classList.add('posts__likes');

  user_name.classList.add('user__name', 'title2');
  user_job.classList.add('user__job', 'text2');

  article_title.classList.add('posts__title', 'title1');
  article_post_info.classList.add('posts__info', 'text1');
  button_post.classList.add('text2--bold')

  button_post.id = postsArray.id;
  article_image.src = postsArray.img;


  user_name.innerText = postsArray.user;
  user_job.innerText = postsArray.stack;

  article_title.innerText = postsArray.title;
  article_post_info.innerText = postsArray.text;
  small_content.innerHTML = postsArray.likes;

  button_post.innerText = 'Abrir Post';
  // div_image_like.src = "./src/assets/img/heart-gray.svg";
  // div_image_like.alt = "Empty Heart(Post not liked)"


  button_post.addEventListener('click', function (e) {
    const postFilter = posts.find(post => post.id === Number(e.target.id));
    createModal(postFilter);
  })

  article_div_user.append(user_name, user_job);
  article_div.append(article_image, article_div_user);
  div_like_section.append(div_image_like, small_content);
  div_container_likes.append(button_post, div_like_section);

  article_main.append(article_div, article_title, article_post_info, div_container_likes);

  return article_main
}


function colorLike() {
  const heartCollor = document.querySelectorAll('.img__post');

  for (let i = 0; i < heartCollor.length; i++) {
      heartCollor[i].addEventListener('click', function () {     
      if(heartCollor[i].classList.contains('like')) {
        heartCollor[i].classList.remove('like');
      } else {
        heartCollor[i].classList.add('like');
      }
    })
  }
}

function addPost(postsArray){
  const nameUser = document.querySelector('.user__name');
  const userJob = document.querySelector('.user__name');
  const userPhoto = document.querySelector('.profile__photo');
  const inputTitle = document.querySelector('.user__job');
  const postDescription = document.querySelector('.post__description');

  const postButton = document.querySelector('.profile__button');

  postButton.addEventListener('click', function(e){
    e.preventDefault();
    const newPost = {};

    newPost.id = `${Number(postsArray[postsArray.length - 1].id)+1}`;
    newPost.title = inputTitle.value;
    newPost.text = postDescription.value;
    newPost.user = nameUser.value;
    newPost.stack = userJob.value;
    newPost.img = userPhoto.img;


  })
}

// handeleModalPost(posts)
renderPosts(posts);
// createModal(posts);
// handeleModalPost(posts);
colorLike();
addPost();

