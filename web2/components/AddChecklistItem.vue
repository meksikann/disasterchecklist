<template>
    <div class="checklist-item">
        <input class="item-title" type="text" v-model="title" @keypress.enter="save" />
        <v-btn class="btn" @click.stop.prevent="save" :disabled="isTitleDuplicate">Add</v-btn>
    </div>
</template>

<script>
    import {
        addChecklistItem
    } from '../localStorage/localStorage';
    export default {
        computed: {
            isTitleDuplicate() {
                return this.items.includes(this.title);
            },
        },
        data: function() {
            return {
                title: 'New item',
            }
        },
        methods: {
            save: function() {
                if(this.isTitleDuplicate) {
                    return;
                }
                addChecklistItem(this.checklistId,
                    this.title);
                this.$emit('save', this.title)
                this.title = "New item";
            },
        },
        props: {
            checklistId: Number,
            items: Array,
        }
    }
</script>

<style scoped>
    .btn {
        cursor: pointer;
        flex-grow: 0;
        height: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
        right: 0.2rem;
    }
    
    .checklist-item {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        position: relative;
        width: 100%;
    }
    
    .item-title {
        flex-grow: 1;
        font-size: 2rem;
        height: 4rem;
        max-width: 100%;
        text-align: center;
    }
</style>
