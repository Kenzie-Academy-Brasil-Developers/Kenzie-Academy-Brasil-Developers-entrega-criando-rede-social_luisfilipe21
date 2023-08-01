
function renderSectionSuggestions(suggestUsers){
    const ul_sugestions = document.querySelector('.suggestions__list');
    ul_sugestions.innerHTML = '';

    for(let i=0; i<suggestUsers.length; i++){
        const suggestions = suggestUsers[i];
        const person = createCardSuggestionUser[suggestions];
        ul_sugestions.appendChild(person);
    }
}

function createCardSuggestionUser(suggestUsers) {

    const list_item = document.createElement('li');
    const profile_div = document.createElement('div');
    const profile_image = document.createElement('img');
    const profile_info_div = document.createElement('div');
    const user_name = document.createElement('h2');
    const user_job = document.createElement('p');
    const list_button = document.createElement('button');

    list_item.classList.add('list__item');
    profile_div.classList.add('list__profile');
    profile_image.classList.add('profile__photo');
    profile_info_div.classList.add('list__info');
    user_name.classList.add('user__name', 'title2');
    user_job.classList.add('user__job');
    list_button.classList.add('list__button');

    user_name.innerText = suggestUsers.user;
    user_job.innerText = suggestUsers.stack;

    profile_image.src = suggestUsers.img;

    profile_info_div.append(user_name, user_job);
    profile_div.append(profile_image, profile_info_div);
    list_item.append(profile_div, list_button);

    return list_item;
}

createSectionSuggestionUser(suggestUsers)