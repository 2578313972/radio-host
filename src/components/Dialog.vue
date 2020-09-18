<template>
  <div class="">
    <el-dialog :title="option.title" :visible.sync="visible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm flex-wrap"
        style="justify-content: space-between;"
      >
        <el-form-item label="主机序号" prop="hostNumber" style="width:48%;">
          <el-input
            style="width:100%;"
            v-model="ruleForm.hostNumber"
          ></el-input>
        </el-form-item>

        <el-form-item label="类型" prop="type" style="width:48%;">
          <el-select
            style="width:100%;"
            v-model="ruleForm.type"
            placeholder="请选择活动区域"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="主机名称" class="w100" prop="hostname">
          <el-input style="width:100%;" v-model="ruleForm.hostname"></el-input>
        </el-form-item>

        <el-form-item label="IP" style="width:48%;" prop="IP">
          <el-input style="width:100%;" v-model="ruleForm.IP"></el-input>
        </el-form-item>
        <el-form-item label="" style="width:48%;"> </el-form-item>

        <el-form-item label="MIC音源组IP" prop="MICIP" style="width:48%;">
          <el-input style="width:100%;" v-model="ruleForm.MICIP"></el-input>
        </el-form-item>
        <el-form-item label="MIC音源组端口" style="width:48%;">
          <el-input style="width:100%;" v-model="ruleForm.MIC80"></el-input>
        </el-form-item>

        <el-form-item label="PC音源组IP" prop="PCIP" style="width:48%;">
          <el-input style="width:100%;" v-model="ruleForm.PCIP"></el-input>
        </el-form-item>
        <el-form-item label="PC音源组口" style="width:48%;">
          <el-input style="width:100%;" v-model="ruleForm.PC80"></el-input>
        </el-form-item>

        <el-form-item label="CD音源组IP" prop="CDIP" style="width:48%;">
          <el-input style="width:100%;" v-model="ruleForm.CDIP"></el-input>
        </el-form-item>

        <el-form-item label="CD音源组口" style="width:48%;">
          <el-input style="width:100%;" v-model="ruleForm.CD80"></el-input>
        </el-form-item>

        <el-form-item label="备用音源组IP" prop="standbyIP" style="width:48%;">
          <el-input style="width:100%;" v-model="ruleForm.standbyIP"></el-input>
        </el-form-item>
        <el-form-item label="备用音源组口" style="width:48%;">
          <el-input style="width:100%;" v-model="ruleForm.standby80"></el-input>
        </el-form-item>

        <el-form-item label="使用位置" style="width:48%;">
          <el-select
            style="width:100%;"
            v-model="ruleForm.usePosition"
            placeholder="请选择活动区域"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="(visible = true), submitForm('ruleForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        hostNumber: "",
        type: "",
        hostname: "",
        IP: "",
        MICIP: "",
        MIC80: "",
        PCIP: "",
        PC80: "",
        CDIP: "",
        CD80: "",
        standbyIP: "",
        standby80: "",
        usePosition: ""
      },
      rules: {
        hostNumber: [
          { required: true, message: "请输入主机序号", trigger: "blur" }
        ],
        hostname: [
          { required: true, message: "请输入主机名称", trigger: "blur" }
        ],
        IP: [{ required: true, message: "请输入IP", trigger: "blur" }],
        MICIP: [
          { required: true, message: "请输入MIC音源组IP", trigger: "blur" }
        ],
        PCIP: [
          { required: true, message: "请输入PC音源组IP", trigger: "blur" }
        ],
        CDIP: [
          { required: true, message: "请输入CD音源组IP", trigger: "blur" }
        ],
        standbyIP: [
          { required: true, message: "请输入备用音源组IP", trigger: "blur" }
        ]
      }
    };
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    submitForm(formName) {
      console.log(this.$axios);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
// .towRow /deep/ .el-form-item__content {
//   display: flex;
//   justify-content: space-around;
// }
</style>
