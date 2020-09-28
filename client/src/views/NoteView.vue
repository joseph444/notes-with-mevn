<template>
  <div class="row">
    <div class="col s12 m12 l12 p-2">
        <div class="align-left" @click="previous"> <i class="fa fa-arrow-left" aria-hidden="true"></i></div>
       
    </div>
    <div class="col offset-l4 offset-m2 offset-s2 s8 m8 l4">
      <div class="card">
        <div class="card-content" v-if="!isEmpty">
            <div class="container" v-if="editMode">
                <div class="row">
                    <div class="col s12 input-field">
                        <input type="text" class="validate" v-model="data['title']">
                        <label for="">name</label>
                    </div>
                    <div class="col s12 input-field">
                        <textarea class="materialize-textarea" v-model="data['body']"></textarea>
                        <label for="">body</label>
                    </div>
                    <div class="col-s12 center-align">
                      <button class="btn green darken-2" @click="Edit">Edit</button>
                      <button class="btn red lighten-2" @click="CancelEdit">Cancel</button>
                    </div>
                </div>
            </div>
            <div v-else>
              <div class="right-align" @click="edit" ><i class="fa fa-pencil-square" aria-hidden="true"></i></div>
              <div class="right-align" @click="deleteIt(data['_id'])"><i class="fa fa-trash" aria-hidden="true"></i></div>
              <h6 class="card-title">{{data['title']}}</h6>
              <p>{{data['body']}}</p>
            </div>
        </div>
        <div class="card-content" v-if="isEmpty">
          
            <h6 class="card-title">Sorry No Such Note exists</h6>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props:['id'],
  created(){
   
    console.log(this.id);
    this.$http.get(this.$store.state.api+`post/${this.id}/show`)
      .then(data=>{
        if(data.data.status==='ok'){
          this.data=data.data.data;
          if(!this.data._id){
            this.isEmpty=false;
          }
        }

        
      })
      .catch(err=>{
        console.log(err);
      })
  },
  data(){
    return {
      isEmpty:false,
      data:{},
      editMode:false
    }
  },
  methods:{
    edit:function(e){
      this.editMode=true;
    },
    previous: function(e){
      this.$router.go(-1);
    },
    deleteIt:function(e){
      this.$store.commit("deleteNote",e);
      this.$http.delete(this.$store.state.api+"post/"+e+"/delete")
          .then(data=>{
            if(data.data.status==="ok"){
              this.previous("ok");
            }else{
              console.log(data.data.message);
              alert("Some error Occured");
              this.previous("ok");
            }
          })
          .catch(err=>{
            console.log(err);
          })
    },
  Edit: function (e) { 
    const form ={
      name:this.data.title,
      body: this.data.body
    }
    this.$http.put(this.$store.state.api+`post/${this.data._id}/edit`,form)
              .then(data=>{
                this.editMode=false;
                if(data.data.status==='ok'){
                  this.$store.commit("editANote",this.data);
                  
                }
                else{
                  console.log(data.data.message);
                }
              })
              .catch(err=>console.log(err))
   },
  CancelEdit:function (e) { 
    this.editMode=false;
      this.$http.get(this.$store.state.api+`post/${this.id}/show`)
      .then(data=>{
        if(data.data.status==='ok'){
          this.data=data.data.data;
          if(!this.data._id){
            this.isEmpty=false;
          }
        }

        
      })
      .catch(err=>{
        console.log(err);
      })
   }
  }
}
</script>

<style lang="scss" scoped>
  .fa{
    font-size: 1.3rem;
  }
  .p-2{
    padding:1.2rem;
  }
</style>
