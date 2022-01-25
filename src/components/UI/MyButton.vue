<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>

</script>

<style scoped>
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
