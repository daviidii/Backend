<script setup lang="ts">
import { taskColumns } from "~/components/columns";
import Toaster from "~/components/ui/toast/Toaster.vue";
import type { TaskProps } from "~/types/types";

const { data: tasks } = await useFetch<TaskProps[]>(
  "http://localhost:5000/duran"
);

const data = ref(tasks.value || []);

const handleDeleteRow = (rowId: number) => {
  data.value = data.value.filter((item) => item._id !== rowId);
};

const handleAddRow = (newTask: TaskProps) => {
  data.value = [...data.value, newTask];
};
</script>
<template>
  <Toaster />
  <div class="flex items-center justify-center h-full">
    <div v-if="data" class="container">
      <DataTable
        :columns="taskColumns"
        :data="data"
        @delete-row="handleDeleteRow"
        @add-row="handleAddRow"
      />
    </div>
  </div>
</template>
