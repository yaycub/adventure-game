export const saveUser = (user) => {
    const stringData = JSON.stringify(user);
    localStorage.setItem('user', stringData);
};

export const getUser = () => {
    const stringData = localStorage.getItem('user');
    if (!stringData) return null;
    const parsedUser = JSON.parse(stringData);
    return parsedUser;
}

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
        window.location = './';
    }

    charName.textContent = character.name;
    charClass.textContent = character.class;
    charRelief.textContent = character.relief;
    charGold.textContent = character.gold;
    
}