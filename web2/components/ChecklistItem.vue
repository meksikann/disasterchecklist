<template>
    <div class="checklist-item" :class="{ 'success': taken }" @click="toggleTaken">
        <div class="title">{{ title }}</div>
    </div>
</template>

<script>
    import {
        addTakenItem,
        isItemTaken,
        removeTakenItem
    } from '../localStorage/localStorage';
    export default {
        data: function() {
            return {
                taken: isItemTaken(this.title),
            }
        },
        methods: {
            toggleTaken() {
                this.taken = !this.taken;
                if (this.taken) {
                    addTakenItem(this.title);
                } else {
                    removeTakenItem(this.title);
                }
            },
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
