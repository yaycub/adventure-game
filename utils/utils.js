export const saveUser = (user) => {
    const stringData = JSON.stringify(user);
    localStorage.setItem('user', stringData);
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