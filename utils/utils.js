export const saveUser = (user) => {
    const stringData = JSON.stringify(user);
    localStorage.setItem('user', stringData);
};

export const getUser = () => {
    const stringData = localStorage.getItem('user');
    if (!stringData) return null;
    const parsedUser = JSON.parse(stringData);
    return parsedUser;
};

export const isRelieved = (user) => {
    return user.relief >= 1;
};

export const createChar = (char) => {
    const character = {
        name: char.get('name'),
        class: char.get('class'),
        relief: 0,
        gold: 15,
        completed: {}
    };

    return character;
};

export const loadChar = () => {
    const charName = document.getElementById('name');
    const charClass = document.getElementById('class');
    const charRelief = document.getElementById('relief');
    const charGold = document.getElementById('gold');

    const character = getUser();

    if (!character) {
        window.location = '../';
    }

    charName.textContent = character.name;
    charClass.textContent = character.class;
    charGold.textContent = character.gold;
    
    if (isRelieved(character)) {
        charRelief.textContent = 'RELIEVED';
    } else {
        charRelief.textContent = character.relief;
    }
};

export const createQuestSelection = (quest) => {
    const link = document.createElement('a');
    const img = document.createElement('img');

    img.src = quest.image;
    img.className = 'quest-img';

    link.href = '../quest/?id=' + quest.id;

    link.appendChild(img);

    return link;
};

export const createQuestCompleted = () => {
    const span = document.createElement('span');
    span.classList.add('quest');
    span.classList.add('completed');

    return span;
};

export const choiceCreator = (choice) => {
    const choiceLabel = document.createElement('label');

    const choiceRadio = document.createElement('input');
    choiceRadio.type = 'radio';
    choiceRadio.name = 'choice';
    choiceRadio.required = true;
    choiceRadio.value = choice.id;
    choiceLabel.appendChild(choiceRadio);

    const questDescription = document.createElement('span');
    questDescription.textContent = choice.description;
    choiceLabel.appendChild(questDescription);

    return choiceLabel;
};

export const findById = (arr, id) => {
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        if (item.id === id) {
            return item;
        }
    }

    return null;
};

export const scoreCalc = (choice, questId, user) => {
    user.relief += choice.relief;
    user.gold += choice.gold;
    user.completed[questId] = true;
};