const convenientStore = {
    id: 'convenient-store',
    title: 'Welcom to a strangely quiet convenient store!',
    image: '../assets/convenientstore.jpg',
    description:'You walk into a convenient store and are searching for a toilet sign. The clerk is tapping his fingers on the counter waiting for you to approach the counter.',
    choices: [{
        id: 'ask-clerk',
        description: 'Ask the Clerk where the Bathroom is',
        result: 'The clerk responds, "The bathroom is for customers only. So you can either buy something or get out." You receive no relief and are forced to exit the store as you are super uncomfortable.',
        relief: 0,
        gold: 0
    }, {
        id: 'buy-tums',
        description: 'Buy Tums',
        result: 'You search the aisles and buy some Tums thinking that it might provide some relief and purchase them from the clerk. They dont give you any relief because Tums are for indigestion not emergency poops.',
        relief: 0,
        gold: -5
    }]
};

const departmentStore = {
    id: 'department',
    title: 'Welcome to a very large Department Store',
    image: '../assets/departmentstore.jpg',
    description: `
        Just to reiterate, this department store is quite large. It seems like a maze of clothing racks and shoes. You see hallways at the edges of the room, that could lead to a restroom, but probably not. 
    `,
    choices: [{
        id: 'wander',
        description: 'Wander Around',
        result: `
            You wander around this large store wondering how long you have been wandering for. You feel lost, very lost. So, lost that you begin to think of relieving yourself between the clothing racks. Then you see a red glow coming a sign that reads, 'Exit' and you leave without any relief.
        `,
        relief: 0,
        gold: 0
    }, {
        id: 'ask-a-customer',
        description: 'Ask a random customer',
        result: `
            You see a nice customer, but you soon find that they only seem nice. They turn to you as you approach and shout, 'GET AWAY FROM ME' and smack you with a pile of clothes. You drop 5 gold as you flee from the fight and recieve no relief.
        `,
        relief: 0,
        gold: -5
    }]
};

const residentialHouse = {
    id: 'house',
    title: 'Approach a Strangers Home',
    image: '../assets/house.jpg',
    description: `
        You approach a Stranger's home with no idea what you plan to do once you arrive. The house is pretty plain and looks like every other house in the neighborhood. It's somewhat eerie how similar each house is and you begin to wonder if you walked onto the set of 'Edward Scissorhands'
    `,
    choices: [{
        id: 'bribe',
        description: 'Knock on the door and offer a bribe',
        result: `
            You knock on the door and offer 5 gold to the resident to use their restroom. The resident stares at you and never makes a sound. They then grab the 5 gold from your hand and slam the door in your face. You bang on the door demanding your gold back, but receive no response and leave. 
        `,
        relief: 0,
        gold: -5
    }, {
        id: 'backyard',
        description: 'Find a way into the backyard',
        result: `
            You search for a way into the backyard of the home to relieve yourself in the backyard like a uncultured idiot. You find the gate and unlock it and enter the backyard. You are proud of your resourcefulness, but then are met with a vicious dog. You try to calm the dog down by speaking to it, but the dog gestures that it does not speak your language. The dog then pounces towards you and bites you on the pocket in which you keep your wallet. You lose 15 gold and receive no relief as you escape.
        `,
        relief: 0,
        gold: -15
    }]
};

export const quests = [convenientStore, departmentStore, residentialHouse];