/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */
// HIGHT: "hight",
//LOW: "low",

class Notes {
  static Priority() {
    return { HIGHT: "hight", LOW: "low" };
  }

  constructor() {
    this.items = [];
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(noteName) {
    const index = this.items.findIndex((elem) => elem.text === noteName);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  updatePriority(text, newPriority){
    const index = this.items.findIndex((elem) => elem.text === text);
    if (index !== -1) {
        this.items[index].priority = newPriority;
      }
  }
}
const note1 = new Notes();

note1.addNote({text: "Note1", priority: Notes.Priority().LOW });
note1.addNote({text: "Note2", priority: Notes.Priority().HIGHT});
//console.log(note1.items);
//note1.removeNote("Petya");
//console.log(note1.items);
note1.updatePriority('Note1', Notes.Priority().HIGHT)
console.table(note1.items);