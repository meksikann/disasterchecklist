<template>
    <v-list-tile class="checklist-tile" :to="`/checklist/${checklist.id}`">
        <v-icon>notifications_active</v-icon>
        <h3 class="checklist-tile-title">{{checklist.title}}</h3>
        <v-icon>edit</v-icon>
        <v-btn @click.stop.prevent="deleteChecklist" class="delete-btn"><v-icon>delete</v-icon></v-btn>
    </v-list-tile>
</template>

<script>
    import {
        deleteChecklist,
    } from '../localStorage/localStorage';
    export default {
        methods: {
            deleteChecklist() {
                deleteChecklist(this.checklist.id);
                this.$emit('delete');
            },
        },
        props: {
            checklist: Object,
        },
    };
</script>

<style>
    .checklist-tile {
        display: flex;
        height: 4rem;
        width: 100%;
    }
    .checklist-tile-title {
        flex-grow: 1;
        text-align: center;
    }
    .delete-btn {
        background-color: initial !important;
        box-shadow: none;
        height: initial;
    }
    .v-list__tile {
        width: 100%;
    }
    .v-icon {
        padding: 1rem;
    }
</style>
