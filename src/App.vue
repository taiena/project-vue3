<template>
<div class="Container">
    <form class="Form">
        <input class="Input" type="text" placeholder="Title">
        <input class="Input" type="text" placeholder="Description">
        <button class="Btn">Create post</button>
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
            posts: [
                {id: 1, title: 'Javascript', body: 'JS is cool'},
                {id: 2, title: 'Python', body: 'Python is cool too'},
            ],
            
            likes: 0,
            dislikes: 0
        }
    },

    methods: {
        addLike() {
            this.likes++
        },
        addDislike() {
            this.dislikes++
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
