<template>
  <div class="Container">
    <navbar />
    <h3>Post ID = {{ $route.params.id }}</h3>
    <div class="Post">

    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
}

.Post {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    border: 1px solid DarkOrchid;
    background-color: Ivory;
}

h3 {
    color: DarkOrchid;
    margin-bottom: 1rem;
}

</style>