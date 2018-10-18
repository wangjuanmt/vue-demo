<template>
    <el-row>
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-table
            :data="tableData"
            style="width: 100%">
                <el-table-column
                    prop="name"
                    label="电影名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="上映日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="derector"
                    label="导演">
                    width="180">
                </el-table-column>
            </el-table>

            <div class="block">
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
import {getMovieList} from '../../apis/movie'
export default {
    data() {
        return {
            totalPages: 1,
            pageSize: 15,
            currentPage: 1,
            size: 20,
            page: 1,
            movieList: [],
            tableData: []
        }
    },

    methods: {
        searchData () {
        getMovieList().then(res => {
          this.tableData = res;
        });
      },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        }
    },
    mounted() {
      this.searchData();
    }
};
</script>