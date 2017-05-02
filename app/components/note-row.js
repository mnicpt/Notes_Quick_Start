import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['note_row'],
    note: null,
    showNote: null,

    actions: {
        selectNote() {
            this.get('showNote')(this.get('note'));
        }
    }
});
