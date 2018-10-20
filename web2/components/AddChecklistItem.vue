<template>
    <div class="checklist-item">
        <input class="item-title" type="text" v-model="title" />
        <v-btn class="btn" @click="save">Save</v-btn>
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
    .btn {
        cursor: pointer;
        flex-grow: 0;
        height: 4rem;
        padding-left: 2rem;
        padding-right: 2rem;
        position: absolute !important;
        right: 0.2rem;
    }
    
    .checklist-item {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        position: relative;
        width: 100%;
    }
    
    .item-title {
        flex-grow: 1;
        font-size: 2rem;
        height: 4rem;
        text-align: center;
    }
</style>
