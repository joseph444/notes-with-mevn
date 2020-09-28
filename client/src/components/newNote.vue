<template>
    <div>
        <div v-if="close">
            <label class="grey-text text-darken-4" @click="close=!close"> Add A new Note</label>
        </div>
        <div v-if="!close">
             <div class="row">
                    <div class="col s12">
                        <div class="right-align" @click="closeIt"> <strong>&times;</strong> </div>
                        <div class="center-align"> <h6 class="grey-text text-darken-4">Add a new Note</h6> </div>
                    </div>
                <div class="col s12 input-field">
                    <input type="text" class="validate" v-model="name">
                    <label for="">Name</label>
                </div>
                <div class="col s12 input-field">
                    <textarea v-model="body" class="materialize-textarea"></textarea>
                    <label for="">Body</label>
                </div>
                <div class="col s12 center-align">
                    <button class="btn green darken-2" @click="addNote">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"",
            body:"",
            close:true
        }
    },
    methods:{
        closeIt:function (e) { 
            this.name="";
            this.body="";
            this.close=true
         },
         addNote:function(e){
             const form={
                 name:this.name,
                 body:this.body
             }
             this.$http.post(this.$store.state.api+"post/add",form)
                    .then(data=>{
                        if(data.data.status==='ok'){
                            const newData = data.data.data;

                            this.$store.commit('addNote',newData);
                            this.closeIt();
                        }
                        else{
                            alert("Please check your input");
                        }
                    })
                    .catch(err=>console.log(err))
         }
    }
}
</script>
<style lang="scss" scoped>

</style>