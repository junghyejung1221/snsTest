import { createStore } from 'vuex'
import postdata from './postdata'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : 30,
      // 유저데이터들
      storedata : postdata,
      likebutton : 0

    }
  },
  mutations :{
    NameChange(state){
      state.name = 'park'
    },
    AddAge(state){
      state.age++
    },
    SwitchLike(state){
      state.likebutton = 1
    },
  }
})

export default store