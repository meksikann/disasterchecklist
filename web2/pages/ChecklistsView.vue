<template>
    <v-list class="checklists">
        <checklist-tile :checklist="checklist" v-for="checklist in checklists" :key="checklist.id" @delete="onDelete" />
        <v-list-tile>
            <v-btn class="add-btn" to="/checklist">
                <v-icon>add_circle</v-icon>Add
                <v-icon>add_circle</v-icon>
            </v-btn>
        </v-list-tile>
    </v-list>
</template>

<script>
    import ChecklistTile from "../components/ChecklistTile";
    import {
        getChecklists
    } from "../localStorage/localStorage";
    export default {
        components: {
            "checklist-tile": ChecklistTile
        },
        data() {
            return {
                checklists: getChecklists()
            };
        },
        methods: {
            onDelete() {
                this.checklists = getChecklists();
            }
        },
        name: "ChecklistsView"
    };
</script>

<style scoped>
    .add-btn {
        display: flex;
        height: 4rem;
        width: 100%;
    }
</style>
