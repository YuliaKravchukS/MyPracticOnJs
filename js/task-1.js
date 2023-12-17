/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */

class Notes {
  static Priority() {
    return {
      HIGHT: "hight",
      LOW: "low",
    };
  }

  constructor() {
    this.items = [];
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const item = this.items.findIndex((item) => item.text === text);
    if (item !== -1) {
      const elemt = this.items.splice(item, 1);
      return elemt[0];
    }
  }

  updatePriority(text, newPriority) {
    const item = this.items.findIndex((item) => item.text === text);
    if (item !== -1) {
      this.items[item].priority = newPriority;
    }
  }
}

const note1 = new Notes();
note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });
note1.addNote({ text: "Note3", priority: Notes.Priority().LOW });
console.log(note1);
// console.log(note1.removeNote("Note1"));
note1.removeNote("Note1");
console.log(note1);
note1.updatePriority("Note1", Notes.Priority().HIGHT);
console.log(note1);