import { createStore } from 'vuex'


const store = createStore({
  state(){
    return {
      name : 'kim',
       
      
    }
  },
  mutations :{
    NameChange(state){
      state.name = 'park'

    }
  }
})

export default store