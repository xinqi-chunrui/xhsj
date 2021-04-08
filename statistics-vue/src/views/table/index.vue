<template>
	<div class="table-list">
		<el-table :data="tableData" style="width: 100%" :span-method="objectSpanMethod" border show-summary>
			<el-table-column prop="province" label="省份">
			</el-table-column>
			<el-table-column prop="area" label="区域">
			</el-table-column>
			<el-table-column label="2021年4月7日">
				<el-table-column prop="TadayPV" label="PV">
				</el-table-column>
				<el-table-column prop="TadayUV" label="UV">
				</el-table-column>
				<el-table-column prop="TadayIP" label="IP">
				</el-table-column>
			</el-table-column>
			<el-table-column label="4月份数据">
				<el-table-column prop="MonthPV" label="PV">
				</el-table-column>
				<el-table-column prop="MonthUV" label="UV">
				</el-table-column>
				<el-table-column prop="MonthIP" label="IP">
				</el-table-column>
			</el-table-column>
			<el-table-column label="4月目标">
				<el-table-column prop="TargetUV" label="日均UV">
				</el-table-column>
			</el-table-column>
			<el-table-column label="4月">
				<el-table-column prop="PraUV" label="日均UV">
				</el-table-column>
			</el-table-column>
			<el-table-column label="4月份总数据">
				<el-table-column prop="SumPV" label="PV">
				</el-table-column>
				<el-table-column prop="SumUV" label="UV">
				</el-table-column>
				<el-table-column prop="SumIP" label="IP">
				</el-table-column>
			</el-table-column>
			<el-table-column label="4月份目标">
				<el-table-column prop="MonthPra" label="总UV">
				</el-table-column>
			</el-table-column>
			<el-table-column prop="schedule" label="完成进度">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					province: '广东',
					area: '东莞',
					TadayPV: 1000,
					TadayUV: 2000,
					TadayIP: 3000,
					MonthPV: 1000,
					MonthUV: 2000,
					MonthIP: 3000,
					TargetUV: 50000,
					PraUV: 100000,
					SumPV: 1000,
					SumUV: 2000,
					SumIP: 3000,
					MonthPra: 10000,
					schedule: '100%'
				}, {
					province: '广东',
					area: '广州',
					TadayPV: 10001,
					TadayUV: 20001,
					TadayIP: 30001,
					MonthPV: 10001,
					MonthUV: 20001,
					MonthIP: 30001,
					TargetUV: 500001,
					PraUV: 1000001,
					SumPV: 10001,
					SumUV: 20001,
					SumIP: 30001,
					MonthPra: 101000,
					schedule: '100%'
				}, {
					province: '广东',
					area: '深圳',
					TadayPV: 10001,
					TadayUV: 20001,
					TadayIP: 30001,
					MonthPV: 10001,
					MonthUV: 20001,
					MonthIP: 30001,
					TargetUV: 500001,
					PraUV: 1000001,
					SumPV: 10001,
					SumUV: 20001,
					SumIP: 30001,
					MonthPra: 101000,
					schedule: '100%'
				}]
			}
		},
		mounted() {
			//get或者post , api为接口地址
			this.$http({
				method: 'post',
				url: 'api/flows/list',
				data: { //get这里应为params
					//请求参数
				},
				//withCredentials:true, //局部携带cookie
				headers: {} //如果需要添加请求头可在这写
			}).then(res => { //res是返回结果
				//你的下一步操作 例:
				// this.info = res.data //存数据
				console.log(res)
			}).catch(err => { //请求失败就会捕获报错信息
				//err.response可拿到服务器返回的报错数据       
			})
		},
		methods: {
			objectSpanMethod() {}
		}
	}
</script>
<style scoped>
	.table-list {
		margin: 10px 0 0 10px;
	}
</style>
