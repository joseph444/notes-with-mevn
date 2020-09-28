const state ={

}
const getters ={
    getAllNotes:function(state){
        return state.notes
    }
}
const mutations= {
    setNotes:function(state,data){
        state.notes=data;
    },
    addNote:function(state,data){
        if(!state.notes){
            state.notes=[];  
        }
        state.notes.push(data);
        
    },
    deleteNote:function(state,id){
        if(state.notes){
            state.notes=state.notes.filter((data)=>{
                return data._id!=id
            })
        }
    }

}
const actions= {
    setNotesAction:function({commit},data){
        commit("setNotes",data.data);
    }
}

module.exports ={
    state,
    getters,
    mutations,
    actions
}