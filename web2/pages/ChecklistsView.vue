<template>
    <v-list class="checklists">
        <checklist-tile :checklist="checklist" v-for="checklist in predefinedChecklists" :key="checklist.id" :locked="true"/>
        <checklist-tile :checklist="checklist" v-for="checklist in checklists" :key="checklist.id" @delete="onDelete" />
        <v-list-tile :key="0">
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
    import {
        checklists as predefinedChecklists
    } from '../localStorage/predefined';
    export default {
        components: {
            "checklist-tile": ChecklistTile
        },
        data() {
            return {
                checklists: [],
                predefinedChecklists,
            };
        },
        name: 'Checklists',
        meta: {
            title: 'Checklists',
        },
        methods: {
            onDelete() {
                this.checklists = getChecklists();
            }
        },
        mounted() {
            this.checklists = getChecklists();
            document.title = 'Disaster Assistant | Checklists';
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
