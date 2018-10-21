<template>
    <div class="container">
        <input type="text" @change="onTitleChange" :value="title" />
        <checklist-item-edit :checklistId="checklist.id" v-for="item in items" :key="`${item}`" :title="item" @titleChange="onItemChange" @delete="onItemDelete" />
        <add-checklist-item :checklistId="checklist.id" :items="items" @save="onAdd" v-if="checklist" />
    </div>
</template>

<script>
    import {
        addChecklist,
        getChecklist,
        getNextId,
        modifyChecklist,
        setActiveChecklist
    } from '../localStorage/localStorage.js';
    import AddChecklistItem from '../components/AddChecklistItem';
    import ChecklistItemEdit from '../components/ChecklistItemEdit';
    export default {
        components: {
            'add-checklist-item': AddChecklistItem,
            'checklist-item-edit': ChecklistItemEdit,
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
        methods: {
            onAdd: function(checklistItem) {
                if(this.items.includes(checklistItem)) {
                    return;
                }
                this.checklist = {
                    ...this.checklist,
                    items: [
                        ...this.items,
                        checklistItem,
                    ],
                };
                modifyChecklist(this.checklist);
            },
            onItemChange(event) {
                const oldItem = this.items.find(item => item === event.target.defaultValue);
                if(!oldItem) {
                    this.checklist = {
                        ...this.checklist,
                        items: [
                            ...this.items,
                            event.target.value,
                        ],
                    };
                } else {
                    const newItems = [...this.items];
                    newItems[newItems.indexOf(event.target.defaultValue)] = event.target.value;
                    this.checklist = {
                        ...this.checklist,
                        items: newItems,
                    };
                }
                modifyChecklist(this.checklist);
            },
            onItemDelete(itemTitle) {
                this.checklist = {
                    ...this.checklist,
                    items: this.items.filter(item => item !== itemTitle),
                };
            },
            onTitleChange(event) {
                this.checklist = {
                    ...this.checklist,
                    title: event.target.value,
                };
                modifyChecklist(this.checklist);
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
                addChecklist(this.checklist);
                this.$router.replace(`/checklist/${this.checklist.id}/edit`);
            }
            setActiveChecklist(this.checklist.id);
            document.title = `Disaster Assistant | Edit: ${this.checklist.title}`;
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
</style>