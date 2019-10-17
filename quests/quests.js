import { getUser, loadChar, saveUser, choiceCreator, findById, scoreCalc } from '../utils/utils.js';
import { quests } from '../data/quest-data.js';

loadChar();

const query = new URLSearchParams(window.location.search);
const questId = query.get('id');
const quest = findById(quests, questId);

if (!quest) {
    window.location = '../map';
}

