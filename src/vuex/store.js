import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
   winHeight: $(window).height(),   //浏览器高度
   notes: [{
     content: '今天学习了vuex',
     title: '笔记一',
     favorite: false
   },{
     content: '今天学习了nodeJs',
     title: '笔记二',
     favorite: false
   }],
   activeNote: ""
}

const mutations = {
    addNotes: function(state,payload){
      let obj = {
         title: payload.title,
         content: payload.content,
         favorite: false //默认不收藏
      }
      state.notes.push(obj);
      state.activeNote = obj;
    },
    delete: function(state,callback){
      for(let i=0;i<state.notes.length; i++){
        if(state.notes[i] == state.activeNote){
          state.notes.splice(i,1);
          callback();
        }
      }
      state.activeNote = state.notes[0];
    },
    editNote: function(state,title,content){
      state.activeNote.content = content;
      state.activeNote.title = title;
    },
    setActiveNote: function(state,note){
      state.activeNote = note;
    },
    setFavorite: function(state,callback){
        if(state.activeNote != ""){
          state.activeNote.favorite = !state.activeNote.favorite
          callback();
        }
    }
}

const getters = {
    activeNote: function(state){
      return state.activeNote;
    },
    notes: function(state){
      return state.notes;
    },
    favorite: function(state){
      let favoriteNotes = [];
      for(let i=0;i< state.notes.length; i++){
        if(state.notes[i].favorite){
          favoriteNotes.push(state.notes[i]);
        }
      }
      return favoriteNotes;
    }
}

const actions = {

}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
