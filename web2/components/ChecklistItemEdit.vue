<template>
    <div class="checklist-item">
        <input class="item-title" @change="onTitleChange" :value="title" />
    </div>
</template>

<script>
    export default {
        methods: {
            onTitleChange(event) {
                this.$emit('titleChange', event);
            }
        },
        props: {
            checklistId: Number,
            title: String,
        },
    }
</script>

<style scoped="scoped">
    .checklist-item {
        cursor: pointer;
        display: flex;
        flex-direction: row;
        padding: 1rem;
        position: relative;
        width: 100%;
    }
    input {
        flex-grow: 0;
        left: 1rem;
        max-width: 100%;
    }
    .item-title {
        flex-grow: 1;
        font-size: 2rem;
        height: 4rem;
        line-height: 4rem;
        text-align: center;
    }
</style>
