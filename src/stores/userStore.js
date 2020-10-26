 
  import { observable, computed, action,configure } from "mobx";
  
  configure({enforceActions:true})
  //  @observable isLogged = false;
  //   @computed
  //   get delayMessage = () => {
  //     return 'The train is delayed by' + this.count;
  //   };
  
  //   @action updateDelay = delay => {
  //     this.count = delay;
  //   };
  // }
  class UserProfile {
    @observable isLogged=false;
    @observable toDoList=['Mine'];
     @action addStore=story=>{
      this.toDoList.push(story)
    }
    @computed TodoListCounter=()=>{
      return this.toDoList.lengths
    }
  }
  export default new UserProfile();