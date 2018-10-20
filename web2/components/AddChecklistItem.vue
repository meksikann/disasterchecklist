<template>
    <div class="checklist-item">
        <input class="title" type="text" v-model="title" />
        <button @click="save">Save</button>
    </div>
</template>

<script>
    import {
        addChecklistItem
    } from '../localStorage/localStorage';
    export default {
        data: function() {
            return {
                title: 'New item',
            }
        },
        methods: {
            save: function() {
                addChecklistItem(this.checklistId,
                    this.title);
                this.$emit('save', this.title)
                this.title = "New item";
            },
        },
        props: {
            checklistId: Number,
        }
    }
</script>

<style scoped>
    button {
        flex-grow: 0;
        position: absolute;
        right: 0.2rem;
    }
    
    .checklist-item {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        position: relative;
        width: 100%;
    }
    
    .title {
        text-align: center;
        flex-grow: 1;
    }
</style>
