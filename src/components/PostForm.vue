<template>
    <form class="Form">
        <my-input
            v-model="post.title"
            class="Input"
            type="text"
            placeholder="Title"
        />
        <br />
        <my-input
            v-model="post.body"
            class="Input"
            type="text"
            placeholder="Description"
        />
        <br />
        <my-button
            @click.prevent="createPost"
            type="sumbit"
        >
            Create post
        </my-button>
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

</style>
