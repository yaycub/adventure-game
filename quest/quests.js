import { getUser, loadChar, saveUser, choiceCreator, findById, scoreCalc } from '../utils/utils.js';
import { quests } from '../data/quest-data.js';

loadChar();

const query = new URLSearchParams(window.location.search);
const questId = query.get('id');
const questSelect = findById(quests, questId);

// if (!questSelect) {
//     window.location = '../map';
// }

const questTitle = document.getElementById('title');
const questImage = document.getElementById('image');
const questDescription = document.getElementById('description');
const questForm = document.getElementById('quest-form');
const questChoices = document.getElementById('choices');
const questResult = document.getElementById('result');
const questResultDescription = document.getElementById('result-description');

questTitle.textContent = questSelect.title;
questImage.src = questSelect.image;
questDescription.textContent = questSelect.description;

for (let i = 0; i < questSelect.choices.length; i++) {
    const questChoice = questSelect.choices[i];
    const makeChoice = choiceCreator(questChoice);
    questChoices.appendChild(makeChoice);
}

questForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(questForm);
    const choiceId = formData.get('choice');
    const choice = findById(questSelect.choices, choiceId);

    const user = getUser();
    scoreCalc(choice, questSelect.id, user);
    saveUser(user);

    questForm.classList.add('hidden');
    questResult.classList.remove('hidden');
    questResultDescription.textContent = choice.result;

    loadChar();
});