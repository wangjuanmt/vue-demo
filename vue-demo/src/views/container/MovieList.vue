<template>
    <el-row>
        <el-col>
            <el-table
            :data="tableData"
            v-loading="loading"
            size="medium">
                <el-table-column
                            prop="title"
                            label="电影名称"
                            align="center">
                    </el-table-column>
                    <el-table-column
                            prop="year"
                            label="上映时间"
                            align="center">
                    </el-table-column>
            </el-table>

            <div>
                <span class="demonstration"></span>
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[10, 50, 100]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next"
                    :total="totalPages">
                </el-pagination>
            </div>

        </el-col>
    </el-row>

</template>

<script>
import { getListInfo } from "../../apis/movie";
export default {
  data() {
    return {
      totalPages: 1,
      pageSize: 10,
      currentPage: 1,
      size: 20,
      page: 1,
      tableData: [],
      loading: true
    };
  },

  methods: {
    getData(size, page) {
      var var1;
      getListInfo(size, page).then(response => {
        var1 = response.data;
        this.totalPages = var1.total;
        this.pageSize = var1.count;
        console.log(`每页 ${this.pageSize}条`);
        this.tableData = var1.subjects;
        this.loading = false;
      });
    },

    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
      this.getData(this.pageSize, this.currentPage);
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getData(this.pageSize, val);
      console.log(`现在是第 ${val} 页`);
    }
  },
  mounted() {
    this.getData(10, 1);
  }
};
</script>