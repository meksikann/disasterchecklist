<template>
    <div class="container">
        <h2 class="title"> {{title}} </h2>
        <checklist-item :checklistId="checklist.id" v-for="item in items" :key="`${item}`" :title="item" />
    </div>
</template>

<script>
    import {
        addChecklist,
        getActive,
        getChecklist,
        modifyChecklist,
        setActiveChecklist
    } from '../localStorage/localStorage.js';
    import {
        checklists as predefinedChecklists
    } from '../localStorage/predefined';
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
            } catch (err) {}
            return {
                checklist: {
                    id: checklistId,
                    items: [],
                    title: 'Empty',
                },
            };
        },
        destroyed() {
            document.removeEventListener("shouldUpdateActive", this.updateActive);
        },
        mounted() {
            if (this.checklist.id) {
                if (this.checklist.id < 0) {
                    this.checklist = predefinedChecklists.find(checklistItem => checklistItem.id === this.checklist.id);
                } else {
                    this.checklist = getChecklist(this.checklist.id);
                }
            }
            setActiveChecklist(this.checklist.id);
            document.addEventListener("shouldUpdateActive", this.updateActive);
        },
        updateActive() {
            console.info('should update active...');
            this.checklist = {
                ...this.checklist,
                items: [
                    ...this.items,
                    ...getActive().items.filter(item => !this.items.includes(item)),
                ],
            };
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
        max-width: 100%;
        text-align: center;
    }
    .title {
        text-align: center;
    }
</style>