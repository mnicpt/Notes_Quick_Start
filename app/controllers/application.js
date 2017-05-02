import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addNote() {
            let notes = this.get('store').peekAll('note');
            this.set('model.singleNote', notes.content.length === 0);
            this.get('store').push({
                data: [{
                    id: notes.content.length,
                    type: 'note',
                    attributes: {
                        title: 'New Note',
                        date: new Date().toUTCString(),
                        content: " ",
                        selected: false
                    }
                }]
            });
        },

        showNote(note) {
            this.get('store').peekAll('note').map(note => note.set('selected', false));
            note.set('selected', true);
            this.set('model.selectedNote', note);
        }
    }
});
