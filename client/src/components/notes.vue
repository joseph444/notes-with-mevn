<template>
    <div class="row">
        <div class="col s6 m4 l2" v-for="(note,i) in Notes" :key="i">
        <div class="card" @click="Show(note['_id'])">
            <div class="card-content" >
                <h6 class="card-title">{{note['title']}}</h6>
                <hr>
                <p> {{note['body']}} </p>
                <div class="right-align"><small>{{getDate(note['created_at'])}}</small></div>
            </div>
        </div>
        </div>

    </div>
</template>
<script>
    //import axios from "axios";
export default {
    
    created(){

        this.$http.get(this.$store.state.api+"post/all").then( data=>{
               const status = data['data']['status'];
               if(status==='ok'){
                   this.$store.commit('setNotes',data['data']['data'])
                   this.Notes = this.$store.state.Notes.notes;
               }
            })
            .catch(err=>{
                console.log(err);
            });
    },
    data(){
        return{
            Notes:[]
        }
    },
    methods:{
        getDate:function(created_at){
            let date = new Date(created_at);
            return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        },
        Show:function(id){
            this.$router.push({
                name:'note',
                params:{
                    id:id
                }
            })
        }
    }
}
</script>
<style lang="scss" >

.card-title{
    text-transform:capitalize;
}
   
</style>