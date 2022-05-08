<template>
	<view class="content">
		<!-- 顶部 start -->
		<view class="top-bar">
			<!-- 头像 -->
			<view class="top-bar-left"><image class="avater" src="../../static/img/one.jpeg" mode=""></image></view>
			<view class="top-bar-center"><image src="../../static/images/火@2x.png" mode="" class="logo"></image></view>
			<!-- 按钮 -->
			<view class="top-bar-right">
				<view class="search"><image src="../../static/images/search@2x.png" mode=""></image></view>
				<view class="add"><image src="../../static/images/add group@2x.png" mode=""></image></view>
			</view>
		</view>
		<!-- 顶部start -->
		<!-- 列表区域 start-->
		<view class="main">
			<!-- 好友请求 -->
			<view class="apply"></view>
			<!-- 朋友列表 -->
			<view class="friends">
				<view class="friends-list">
					<!-- 左侧头像 -->
					<view class="friends-list-left">
						<text class="tip">11</text>
						<!-- <image src="../../static/images/WechatIMG7285.jpeg" alt=""></image> -->
					</view>
					<!-- 右侧消息 -->
					<view class="friends-right">
						<view class="top">
							<!-- 名字 -->
							<view class="name">好友申请</view>
							<!-- 时间 -->
							<view class="time">12:21</view>
						</view>
						<view class="news">茫茫人还,相聚便是缘分</view>
					</view>
				</view>
			</view>
			<view class="friends">
				<view class="friends-list" v-for="item in friends" :key="item.id">
					<!-- 左侧头像 -->
					<view class="friends-list-left">
						<text class="tip">{{item.tip}}</text>
						<image :src="item.imgUrl" alt=""></image>
					</view>
					<!-- 右侧消息 -->
					<view class="friends-right">
						<view class="top">
							<!-- 名字 -->
							<view class="name">{{item.name}}</view>
							<!-- 时间 -->
							<view class="time">{{chengeTime(item.time) }}</view>
						</view>
						<view class="news">{{item.news}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 列表区域 end-->
	</view>
</template>

<script>
import datas from '../../commons/js/datas.js'
import timeMy from '../../commons/js/myfun.js'
export default {
	data() {
		return {
			friends:[]
		};
	},
	onLoad() {
		this.getFrinds()
	},
	methods: {
		chengeTime:function(date){
			return timeMy.dataTime(date)
		},
		getFrinds:function(){
			this.friends = datas.frindes()
			// 每个头像挂个路径
			for(var i =0;i<this.friends.length;i++){
				this.friends[i].imgUrl = '../../static/img/' + this.friends[i].imgUrl
			}
		}
	}
};
</script>

<style lang="scss">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	// width: 100%;
	padding-top: var(--status-bar-height);
	padding-bottom: $uni-spacing-col-base;
}

.top-bar {
	width: 100%;
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
	height: 88rpx;
	background: $uni-bg-color;
	padding-top: var(--status-bar-height);
	border-bottom: 1px solid $uni-border-color;
	padding-left: $uni-spacing-col-base;
	padding-right: $uni-spacing-col-base;
	box-sizing: border-box;
	.top-bar-left {
		float: left;
		image {
			margin-top: 16rpx;
			width: 68rpx;
			height: 68rpx;
			border-radius: 16px;
		}
	}
	.top-bar-center {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		text-align: center;
		.logo {
			width: 88rpx;
			height: 42rpx;
		}
		.title {
		}
	}
	.top-bar-right {
		float: right;
		.search {
			width: 88rpx;
			height: 88rpx;
			display: inline-block;
		}
		.add {
			width: 88rpx;
			height: 88rpx;
			display: inline-block;
		}
		image {
			padding: 26rpx 0 0 26rpx;
			width: 52rpx;
			height: 52rpx;
		}
	}
}
.main {
	padding: 98rpx $uni-spacing-col-base 0;
	// padding: 10px;
}
.friends-list {
	height: 96rxp;
	padding: 16rpx 0;
	&:active {
		background-color: $uni-bg-color-grey;
	}
	.friends-list-left {
		position: relative;
		float: left;
		image {
			width: 96rpx;
			height: 96rpx;
			border-radius: $uni-border-radius-base;
			background-color: $uni-bg-color;
		}
		.tip {
			position: absolute;
			top: -6rpx;
			left: 86rpx;
			min-width: 36rpx;
			height: 36rxp;
			background: $uni-color-error;
			border-radius: $uni-border-radius-circle;
			font-size: $uni-font-size-sm;
			color: $uni-text-color-inverse;
			line-height: 36rpx;
			text-align: center;
			z-index: 11;
		}
	}
	.friends-right {
		padding-left: 128rpx;
		.top {
			height: 50rpx;
			.name {
				float: left;
				font-size: 36rpx;
				color: #272832;
				letter-spacing: -0.62px;
				font-weight: 400;
				color: $uni-text-color;
				line-height: 50rpx;
			}
			.time {
				// display: none;
				float: right;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-disable;
			}
		}
		.news {
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
			line-height: 40rpx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
		}
	}
}
</style>
