<template>
    <div class="container">
        <input type="text" v-model="title" />
        <checklist-item checklistId="this.checklistId" v-for="item in items" :key="`${item}`" :title="item" />
        <add-checklist-item checklistId="this.checklistId" @save="onAdd" v-if="checklist" />
    </div>
</template>

<script>
    import {
        addChecklist,
        getChecklist
    } from '../localStorage/localStorage.js';
    import AddChecklistItem from '../components/AddChecklistItem';
    import ChecklistItem from '../components/ChecklistItem';
    export default {
        components: {
            'add-checklist-item': AddChecklistItem,
            'checklist-item': ChecklistItem,
        },
        computed: {
            items() {
                return this.checklist ? this.checklist.items : []
            },
            title() {
                return this.checklist ? this.checklist.title : undefined
            }
        },
        data: function() {
            return {
                checklist: {
                    title: 'Empty',
                    items: [],
                },
                checklistId: undefined,
            }
        },
        methods: {
            onAdd: function(checklistItem) {
                console.info('save handler triggered', checklistItem);
                this.checklist = {
                    ...this.checklist,
                    items: [
                        ...this.items,
                        checklistItem,
                    ],
                };
            },
        },
        beforeMount: function() {
            console.info(this.checklist);
            this.checklistId = window.location.hash;
            if (this.checklistId) {
                this.checklist = getChecklist(this.checklistId)
            }
            if (!this.checklist) {
                this.checklist = {
                    title: 'Empty',
                    items: [],
                };
                this.checklistId = addChecklist(this.checklist);
            }
        },
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }
    
    input {
        font-size: 3rem;
        font-weight: bold;
        margin: 1rem auto;
        text-align: center;
    }
</style>