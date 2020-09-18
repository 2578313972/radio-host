<template>
  <div class="">
    <div>
      <div style="text-align:right;">
        <el-button type="primary" @click="addComponent">添加</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="#" type="index"> </el-table-column>
        <el-table-column label="主机序号" prop="id" min-width="180">
        </el-table-column>
        <el-table-column label="主机名称" prop="name" min-width="180">
        </el-table-column>
        <el-table-column label="IP" prop="ip" min-width="180">
        </el-table-column>
        <el-table-column label="操作" min-width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >查看</el-button
            >
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <div style="text-align:center;margin-top:15px;">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>

    <Dialog :visible="dialogFormVisible" :option="option" />
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";
export default {
  data() {
    return {
      tableData: [
        {
          id: "2016-05-02",
          name: "王小虎",
          ip: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: "2016-05-02",
          name: "王小虎",
          ip: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: "2016-05-02",
          name: "王小虎",
          ip: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogFormVisible: true,
      option: {
        title: "添加"
      }
    };
  },
  components: { Dialog },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },

    /** 添加按钮 */
    addComponent() {
      this.dialogFormVisible = true;
      this.option = {
        title: "添加"
      };
    },

    handleSizeChange(e) {
      console.log(e);
    },
    handleCurrentChange(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped></style>
