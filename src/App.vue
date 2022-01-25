<template>
<div class="Container">
    <form class="Form">
        <input
            :value="title"
            @input="title = $event.target.value"
            class="Input"
            type="text"
            placeholder="Title"
        >
        <input
            :value="body"
            @input="body = $event.target.value"
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

    <div class="Post" v-for="post in posts" :key="post.id">
        <div><strong>Title: </strong>{{ post.title }}</div>
        <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],

            title: "",
            body: ""
        }
    },

    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body
            }
            this.posts.push(newPost)
            this.title = ""
            this.body = ""
        },
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
}

.Post {
    padding: 1rem;
    margin-bottom: 1rem;;
    border: 1px solid DarkOrchid;
    background-color: Ivory;
}

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
