<template>
  <div class="home flex wh100">
    <div class="HomeLeft h100">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo h100"
        router
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu
          :index="index.toString()"
          v-for="(item, index) in selectData"
          :key="item.name"
        >
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(data, index2) in item.data"
              :key="index2"
              :index="data.url"
              >{{ data.name }}</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="HomeRight h100">
      <el-page-header @back="goBack" content="详情页面"> </el-page-header>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isCollapse: false
    };
  },
  created() {
    this.selectData = [
      {
        name: "aaa",
        data: [
          { url: "/aa", name: "111" },
          { url: "/bb", name: "222" },
          { url: "/FTeacher", name: "333" }
        ]
      },
      {
        name: "bbb",
        data: [{ url: "/BMakePaper", name: "333234234" }]
      }
    ];
  },
  components: {},
  methods: {
    goBack() {
      this.isCollapse = !this.isCollapse;
    },
    /** 展开菜单事件 */
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    /** 关闭菜单事件 */
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
// .HomeLeft {
//   .el-menu-vertical-demo {
//     width: auto;
//   }
//   // width: 30%;
//   // min-width: 300px;
//   // max-width: 250px;
// }
.HomeRight {
  flex: 1;
}
</style>
