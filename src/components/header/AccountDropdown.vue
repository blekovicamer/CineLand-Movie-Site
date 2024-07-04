<template>
    <div class="relative">  
        <button @click="isOpen = !isOpen" class="">

            <img
              src="@/assets/images/profileimg.png"
              alt="profile-img"
              class="h-10 rounded-full ml-5 mr-1"
             />

        </button>
        

        <div v-if="isOpen" class="absolute py-2 bg-[#9B3922] rounded-lg w-48 z-40 right-0">   
            <a href="" class="block px-4 py-2 hover:bg-[#481E14]">Account</a>
            <a href="" class="block px-4 py-2 hover:bg-[#481E14]">Settings</a>
            <a href="" class="block px-4 py-2 hover:bg-[#481E14]">Log out</a>
        </div>

   </div>
</template>

<script>
export default {

    created(){
        const handleEscape = (e) => {
            if(e.key === "Esc" && e.key == "Escape"){
                this.isOpen = false
            }
        }
        document.addEventListener("keydown", handleEscape)
    },


    data(){
        return{
            isOpen:false
        }
    }
}
</script>

<style>

</style>