<template>
    <div class="checklist-item">
        <input class="item-title" @change="onTitleChange" :value="title" />
        <v-btn @click.stop.prevent="deleteItem" class="delete-btn">
            <v-icon>delete</v-icon>
        </v-btn>
    </div>
</template>

<script>
    import {
        removeChecklistItem
    } from '../localStorage/localStorage';
    export default {
        methods: {
            deleteItem() {
                removeChecklistItem(this.checklistId, this.title);
                this.$emit('delete', this.title);
            },
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
