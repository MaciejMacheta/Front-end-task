
<template>
  <div class="title">
          <div class="user">
              <img src="name-icon.png" class="icon" >
              <div class="username">Maciej Macheta<br>
                  <span class="active">zajęty</span></div>
          </div>
      </div>
   <div class="tasks" onclick="exit()">
          <img src="ok-icon.png" id="ok-icon">
          <p class="tasks-title">MOJE LISTY:</p></div>
          
          <div class="tasks-elements" onclick="taskbar()">Moja lista 1
          <div class="counter">{{ items.length + items2.length}}</div>
          </div>
       
          
          <p class="taskbar-title">Moja Lista 1</p>
          <div class="taskbar">
          
     <div class="taskbar-header">        
    <div>
        <div class="day">Dzisiaj</div><div v-on:click="openToday()" class="addBTN">+</div>
    </div></div>
  
  

  <div 
  class="list-element" 
  v-for="(item, index) in items" 
  v-bind:key="item.id"
  v-bind:item = "item"
  v-bind:class="{
    isCompleted: item.isCompleted
  }"> 

  
  <div @click="completeTask(item.id)" class="completeBTN"></div>
  
  <div>{{ item.desc }}</div>

  <div @click="removeTask(index)" class="delBTN">X</div>

  </div> 

  <br>
  
  <div >
  <div class="day">Jutro</div><div v-on:click="openTomorrow()" class="addBTN2">+</div>
  <div 
  class="list-element" 
  v-for="(item, index) in items2" 
  v-bind:key="item.id"
  v-bind:class="{
    isCompleted: item.isCompleted
  }"> 

  <div @click="completeTask2(item.id)" class="completeBTN"></div>

  <div >{{ item.desc }}</div>
  
  <div @click="removeTask2(index)" class="delBTN">X</div>
  </div> </div>
</div>
</template>

<script>
export default{
        name: 'app',
        data() { 
            return{
                items: [
                {
                id: 1, 
                desc: 'Stworzenie mojej pierwszej aplikacji', 
                isCompleted: false,
                },
                {
                id: 2, 
                desc: 'napisanie zadania', 
                isCompleted: false,
                },
                 ],
                items2: [
                {
                id: 1, 
                desc: 'Stworzenie mojej pierwszej aplikacji', 
                isCompleted: false,
                }],
              
            };
           
        },
        props: ['item'],
        methods: {


          openToday()
            {
              const plans = prompt("Co chcesz dzisiaj zrobić?", "Wysłać zadanie");
              if(plans != '' && plans != null){
              this.items.push({
              id: Math.random(),
              desc: plans,
              isCompleted: false
            })}
            },


            openTomorrow()
            {
              const plans2 = prompt("Jakie plany na jutro?", "Odpoczynek");
              if(plans2 != '' && plans2 != null){
              this.items2.push({
              id: Math.random(),
              desc: plans2,
              isCompleted: false
            })}  
            },

            removeTask: function(index)
            {
              this.items.splice(index, 1);
            },

            removeTask2: function(index)
            {
              this.items2.splice(index, 1);
            },

            completeTask(id)
            {
              const index = this.items.findIndex(item => item.id === id)
              this.items[index].isCompleted = true 
            },

            completeTask2(id)
            {
              const index = this.items2.findIndex(item => item.id === id)
              this.items2[index].isCompleted = true 
            },
          }
    }
    
</script> 
<style scoped>
div.list-element
{
    display: flex;
    justify-content: space-between;
    border: 2px solid rgba(68, 68, 68, 0.411);
    width: 90%;
    margin: 5%;
    padding-left: 5%;
    padding-right: -5%;
    text-decoration: none;
}

div.isCompleted
{
  text-decoration: line-through;
  background-color: rgb(185, 185, 185);
  opacity: 0.7;
  transition: 0.8s;
}
</style>
