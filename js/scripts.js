const { createApp } = Vue;

  createApp({
    data() {
      return {
        emails: []
      };
    },
    mounted(){
      // console.log(axios);
      
      for(let i = 0 ;i < 10; i++){
        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((list) => {
                // console.log(list.data.response);
                this.emails.push(list.data.response)
          });
      }
    }  
  }).mount('#app')
