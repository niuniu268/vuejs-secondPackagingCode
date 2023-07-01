<script setup lang="ts">
import TablePlus from './components/TablePlus.vue';
import { ref,watch } from "vue";
import { getGoodList } from './request/api';

const column = [
  {
    prop: 'goodname',
    label: 'Goods Name'
  },
  {
    prop: 'goodId',
    label: 'Good ID'
  },
  {
    prop: 'description',
    label: 'Description'
  },
  {
    prop: 'operation',
    label:'Operation'
  }
]

export interface listInt{
    goodname: string,
    goodid: string,
    description:string
}


const list = ref<listInt[]>([])

getGoodList().then(res => {

  const transformedDate: listInt[] = res.data.map(
    (item:any) => {
      return {
        goodname: item.goodname,
        goodid: item.goodid,
        description: item.description
      };
    }
  )
  list.value = transformedDate;
})

const tableData = ref<listInt[]>([]);

const handleEdit = (index: number, row: listInt) => {
  console.log(index, row)
}

watch(list, (value)=>{
  tableData.value = value;
})
</script>

<template>
  <div>
    <table-plus :tableData="tableData" :column="column">
      <template #operation="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </table-plus>
  </div>
</template>

<style scoped>

</style>
