<template>
    <div class="container">
        <input type="text" v-model="title" />
        <checklist-item :checklistId="checklist.id" v-for="item in items" :key="`${item}`" :title="item" />
        <add-checklist-item :checklistId="checklist.id" @save="onAdd" v-if="checklist" />
    </div>
</template>

<script>
    import {
        addChecklist,
        getChecklist,
        getNextId,
        setActiveChecklist
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
            let checklistId;
            try {
                checklistId = parseInt(this.$route.params.checklistId, 10);
            } catch(err) {
            }
            return {
                checklist: {
                    id: checklistId,
                    items: [],
                    title: 'Empty',
                },
            };
        },
        methods: {
            onAdd: function(checklistItem) {
                this.checklist = {
                    ...this.checklist,
                    items: [
                        ...this.items,
                        checklistItem,
                    ],
                };
            },
        },
        mounted() {
            if (this.checklist.id) {
                this.checklist = getChecklist(this.checklist.id);
            }
            if (!this.checklist || !this.checklist.id) {
                this.checklist = {
                    id: getNextId(),
                    items: [],
                    title: 'Empty',
                };
                this.$router.push(`/checklist/${this.checklist.id}`);
            }
            setActiveChecklist(this.checklist.id);
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