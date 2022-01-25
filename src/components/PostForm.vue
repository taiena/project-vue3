<template>
    <form class="Form">
        <input
            v-model="post.title"
            class="Input"
            type="text"
            placeholder="Title"
        >
        <input
            v-model="post.body"
            class="Input"
            type="text"
            placeholder="Description"
        >
        <button
            @click.prevent="createPost"
            class="Btn"
            type="sumbit"
        >
            Create post
        </button>
    </form>
</template>

<script>

export default {

    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        }
    },

    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)

            console.log('created post: ', this.post);
            
            this.post = {
                title: "",
                body: ""
            }
        },
    }
}
</script>

<style scoped>
.Form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin-bottom: 1rem;;
    border: 1px solid DarkOrchid;
    background-color: GhostWhite;
}

.Input {
    width: 100%;
    margin-bottom: 1rem;
    padding: 10px 15px;
    border: 1px solid DarkOrchid;
}

.Btn {
    padding: 10px 15px;
    color: darkorchid;
    background: white;
    border: 1px solid DarkOrchid;
}

.Btn:hover {
    cursor: pointer;
    background: LavenderBlush;
}
</style>
