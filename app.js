const app = Vue.createApp({
    data() {
      return { 
          entergoalvalue:'',
          goals: [],
     };
    },
    methods:{
        addgoal(){
            this.goals.push(entergoalvalue);
        }
    }
  });
  
  app.mount('#user-goals');