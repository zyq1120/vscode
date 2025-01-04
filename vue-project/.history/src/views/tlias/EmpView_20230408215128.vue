<template>
    <div>
        <el-container style="height: 700px; border: 1px solid #eee">
            <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)">学习辅助系统</el-header>
            <el-container>
                <el-aside width="200px"><el-menu :default-openeds="['1', '3']">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>系统信息管理</template>
                            <el-menu-item-group>

                                <el-menu-item index="1-1">部门管理</el-menu-item>
                                <el-menu-item index="1-2">员工管理</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-aside>

                <el-main>
                    <!-- form表单 -->
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="审批人">
                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                    </el-form>
                    <el-table :data="tableData">
                        <el-table-column prop="name" label="姓名" width="180">
                        </el-table-column>
                        <el-table-column prop="image" label="图像" width="180">
                        </el-table-column>
                        <el-table-column prop="gender" label="性别" width="140">
                        </el-table-column>
                        <el-table-column prop="job" label="职位" width="140">
                        </el-table-column>
                        <el-table-column prop="entrydate" label="入职日期" width="180">
                        </el-table-column>
                        <el-table-column prop="updatetime" label="最后操作时间" width="230">
                        </el-table-column>
                        <el-table-column label="操作">
                            <el-button type="primary" size="mini">编辑</el-button>
                            <el-button type="danger" size="mini">删除</el-button>
                        </el-table-column>
                    </el-table></el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: []
        }

    }
}
</script>

<style></style>