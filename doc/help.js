var help = [
	//商户面板
	{
		description: '商户面板',
		children: [{
			url: null,
			description: '商户信息',
			key: 'company-info'
		}, {
			url: null,
			description: '管理员信息',
			key: 'company-adminInfo'
		}]
	},
	//微信管理
	{
		description: '微信管理',
		children: [{
			description: '帐号设置',
			children: [{
				url: null,
				description: '支付设置',
				key: 'wechat-account'
			}]
		}, {
			description: '自定义设置',
			children: [{
				url: null,
				description: '自定义菜单',
				key: 'wechat-customSet-menuSet'
			}]
		}, {
			description: '微信设置',
			children: [{
				url: null,
				description: '微信授权',
				key: 'wechat-wechatSet-authorization'
			}]
		}, {
			url: null,
			description: '自动回复',
			key: 'wechat-autoReply'
		}]
	},

	//微信商城
	{
		description: '微信商城',
		children: [
			//商城概况
			{
				url: null,
				description: '商城概况',
				key: 'mall-mallSurvey'
			},
			//店铺管理
			{
				description: '店铺管理',
				children: [{
					url: null,
					description: '店铺主页',
					key: 'mall-store-customPage'
				}]
			},
			//物流管理
			{
				description: '物流管理',
				children: [{
					url: null,
					description: '运费模板',
					key: 'mall-logistics-carriageModule'
				}, {
					url: null,
					description: '自提管理',
					key: 'mall-logistics-selfExtracting'
				}]
			},
			//商品管理
			{
				description: '商品管理',
				children: [{
					url: null,
					description: '商品列表',
					key: 'mall-commodity-list'
				}, {
					url: null,
					description: '商品基本信息',
					key: 'mall-commodity-createBaseInfo'
				}, {
					url: null,
					description: '商品详情',
					key: 'mall-commodity-createDesc'
				}, {
					url: null,
					description: '商品营销信息',
					key: 'mall-commodity-createMarketingInfo'
				}, {
					url: null,
					description: '商品分组列表',
					key: 'mall-commodity-grouping'

				}, {
					url: null,
					description: '创建商品分组基本信息',
					key: 'mall-commodity-groupCreateBaseInfo'
				}, {
					url: null,
					description: '关联商品分组商品',
					key: 'mall-commodity-groupCreatechoseCommodity'
				}, {
					url: null,
					description: '编辑商品分组基本信息',
					key: 'mall-commodity-groupEditBaseInfo'
				}, {
					url: null,
					description: '修改关联商品分组商品',
					key: 'mall-commodity-groupEditchoseCommodity'
				}]
			},
			//订单管理
			{
				description: '订单管理',
				children: [{
					url: null,
					description: '订单列表',
					key: 'mall-order-list'
				}, {
					url: null,
					description: '订单详情',
					key: 'mall-order-detail'
				}]
			},
			//售后管理
			{
				description: '售后管理',
				children: [{
					url: null,
					description: '退换货管理',
					key: 'mall-afterService-exchange'
				}, {
					url: null,
					description: '商品评价',
					key: 'mall-afterService-evaluation'
				}]
			},
			//会员管理
			{
				description: '会员管理',
				children: [{
					url: null,
					description: '会员列表',
					key: 'mall-afterService-list'
				}, {
					url: null,
					description: '会员等级与权益',
					key: 'mall-afterService-rights'
				}, {
					url: null,
					description: '会员详情',
					key: 'mall-afterService-detail'
				}, {
					url: null,
					description: '会员等级设置',
					key: 'mall-afterService-levelSetting'
				}]
			},
			//分销管理
			{
				description: '分销管理',
				children: [{
					url: null,
					description: '分销申请设置',
					key: 'mall-distribution-applySet'
				}, {
					url: null,
					description: '分销商自动审核设置',
					key: 'mall-distribution-automaticVerify'
				}, {
					url: null,
					description: '分销申请审核',
					key: 'mall-distribution-applyVerifyList'
				}, {
					url: null,
					description: '分销商品',
					key: 'mall-distribution-commodityList'
				}, {
					url: null,
					description: '分销商列表',
					key: 'mall-distribution-list'
				}, {
					url: null,
					description: '分销商详情',
					key: 'mall-distribution-detail'
				}, {
					url: null,
					description: '分销等级设置',
					key: 'mall-distribution-level'
				}, {
					url: null,
					description: '佣金提现设置',
					key: 'mall-distribution-commissionCashSet'
				}, {
					url: null,
					description: '分销商政策',
					key: 'mall-distribution-policy'
				}]
			},
			//财务管理
			{
				description: '财务管理',
				children: [{
					url: null,
					description: '商城收入记录',
					key: 'mall-finance-incomeRecord'
				}, {
					url: null,
					description: '分销佣金记录',
					key: 'mall-finance-commissionRecord'
				}, {
					url: null,
					description: '佣金提现申请',
					key: 'mall-finance-withdrawCashApply'
				}, {
					url: null,
					description: '提现批准记录',
					key: 'mall-finance-withdrawCashPass'
				}, {
					url: null,
					description: '提现驳回记录',
					key: 'mall-finance-withdrawCashReject'
				}, {
					url: null,
					description: '佣金转余额记录',
					key: 'mall-finance-commissionToBalance'
				}]
			}
			//
		]
	},

	//系统管理
	{
		description: '系统管理',
		children: [{
			description: '商城设置',
			children: [{
				url: null,
				description: '订单及收货设置',
				key: 'systemSet-mallSet-orderSet'
			}, {
				url: null,
				description: '系统功能名称',
				key: 'systemSet-mallSet-moduleNameSet'
			}]
		}]
	},

	//营销管理
	{
		description: '营销管理',
		children: [{
			description: '优惠券管理',
			children: [{
				url: null,
				description: '优惠券列表',
				key: 'marketing-coupon-list'
			}, {
				url: null,
				description: '优惠券设置',
				key: 'marketing-coupon-couponSet'
			}, {
				url: null,
				description: '优惠券投放设置',
				key: 'marketing-coupon-couponSendSet'
			}]
		}]
	}
	//
]
