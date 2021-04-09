<template>
	<div>
		 <div class="block">
		    <span class="demonstration">月</span>
		    <el-date-picker
		      v-model="value2"
		      type="month"
		      placeholder="选择月">
		    </el-date-picker>
		  </div>
		<button @click="handerBut">点击</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value2: '',
			};
		},
		methods: {
			handerBut(){
				console.log(this.value2.getFullYear(),Number(this.value2.getMonth())+1)
				console.log(this.value2)
			}
		}
	};
</script>
