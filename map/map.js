import { getUser, loadChar, isRelieved, createQuestSelection, createQuestCompleted } from '../utils/utils.js';
import { quests } from '../data/quest-data.js';


loadChar();

const user = getUser();

if (isRelieved(user)){
    window.location = '../results';
}

const questDisplay = document.getElementById('quest-data');

for (let i = 0; i < quests.length; i++){
    const quest = quests[i];
    let display = null;
    
    if (user.completed[quest.id]) {
        display = createQuestCompleted(quest);
    } else {
        display = createQuestSelection(quest);
    }

    questDisplay.appendChild(display);
}