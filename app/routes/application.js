import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let notes = this.get('store').peekAll('note');
        let singleNote = notes.length === 1;

        return {
            notes: notes,
            singleNote: singleNote,
            selectedNote: null
        };
    }
});
