<!-- select box second packaging  -->

<template>
    <div>
        <div class="select-box" v-bind="$attrs">
            <el-form :inline="true" :model="selectData" class="demo-form-inline">
            <el-form-item label="title">
                <el-input v-model="selectData.goodname" placeholder="Input searching word" />
            </el-form-item>
            <el-form-item label="introduce">
                <el-input v-model="selectData.description" placeholder="Input searching word" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Query</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script setup lang="ts">

</script>


<style lang="scss" scoped>
    
</style>