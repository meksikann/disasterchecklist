<template>
    <div class="checklist-item" :class="{ 'success': taken }">
        <input type="checkbox" v-model="taken" />
        <div class="title">{{ title }}</div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                taken: false,
            }
        },
        props: {
            checklistId: String,
            title: String,
        },
    }
</script>

<style scoped="scoped">
    .checklist-item {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        position: relative;
        width: 100%;
    }
    input {
        flex-grow: 0;
        position: absolute;
        left: 1rem;
    }
    
    .taken {
        background-color: lightgreen;
        color: green;
    }
    .title {
        flex-grow: 1;
        text-align: center;
    }
</style>
