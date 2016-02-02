var help = [
	//商户面板
	{
		description: '商户面板',
		children: [{
			url: null,
			description: '商户信息',
			key: 'companyinfo'
		}, {
			url: null,
			description: '管理员信息',
			key: 'companyadminInfo'
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
				key: 'wechataccount'
			}]
		}, {
			description: '自定义设置',
			children: [{
				url: null,
				description: '自定义菜单',
				key: 'wechatcustomSetmenuSet'
			}]
		}, {
			description: '微信设置',
			children: [{
				url: null,
				description: '微信授权',
				key: 'wechatwechatSetauthorization'
			}]
		}, {
			url: null,
			description: '自动回复',
			key: 'wechatautoReply'
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
				key: 'mallmallSurvey'
			},
			//店铺管理
			{
				description: '店铺管理',
				children: [{
					url: null,
					description: '店铺主页',
					key: 'mallstorecustomPage'
				}]
			},
			//物流管理
			{
				description: '物流管理',
				children: [{
					url: null,
					description: '运费模板',
					key: 'malllogisticscarriageModule'
				}, {
					url: null,
					description: '自提管理',
					key: 'malllogisticsselfExtracting'
				}]
			},
			//商品管理
			{
				description: '商品管理',
				children: [{
					url: null,
					description: '商品列表',
					key: 'mallcommoditylist'
				}, {
					url: null,
					description: '商品基本信息',
					key: 'mallcommoditycreateBaseInfo'
				}, {
					url: null,
					description: '商品详情',
					key: 'mallcommoditycreateDesc'
				}, {
					url: null,
					description: '商品营销信息',
					key: 'mallcommoditycreateMarketingInfo'
				}, {
					url: null,
					description: '商品分组列表',
					key: 'mallcommoditygrouping'

				}, {
					url: null,
					description: '创建商品分组基本信息',
					key: 'mallcommoditygroupCreateBaseInfo'
				}, {
					url: null,
					description: '关联商品分组商品',
					key: 'mallcommoditygroupCreatechoseCommodity'
				}, {
					url: null,
					description: '编辑商品分组基本信息',
					key: 'mallcommoditygroupEditBaseInfo'
				}, {
					url: null,
					description: '修改关联商品分组商品',
					key: 'mallcommoditygroupEditchoseCommodity'
				}]
			},
			//订单管理
			{
				description: '订单管理',
				children: [{
					url: null,
					description: '订单列表',
					key: 'mallorderlist'
				}, {
					url: null,
					description: '订单详情',
					key: 'mallorderdetail'
				}]
			},
			//售后管理
			{
				description: '售后管理',
				children: [{
					url: null,
					description: '退换货管理',
					key: 'mallafterServiceexchange'
				}, {
					url: null,
					description: '商品评价',
					key: 'mallafterServiceevaluation'
				}]
			},
			//会员管理
			{
				description: '会员管理',
				children: [{
					url: null,
					description: '会员列表',
					key: 'mallafterServicelist'
				}, {
					url: null,
					description: '会员等级与权益',
					key: 'mallafterServicerights'
				}, {
					url: null,
					description: '会员详情',
					key: 'mallafterServicedetail'
				}, {
					url: null,
					description: '会员等级设置',
					key: 'mallafterServicelevelSetting'
				}]
			},
			//分销管理
			{
				description: '分销管理',
				children: [{
					url: null,
					description: '分销申请设置',
					key: 'malldistributionapplySet'
				}, {
					url: null,
					description: '分销商自动审核设置',
					key: 'malldistributionautomaticVerify'
				}, {
					url: null,
					description: '分销申请审核',
					key: 'malldistributionapplyVerifyList'
				}, {
					url: null,
					description: '分销商品',
					key: 'malldistributioncommodityList'
				}, {
					url: null,
					description: '分销商列表',
					key: 'malldistributionlist'
				}, {
					url: null,
					description: '分销商详情',
					key: 'malldistributiondetail'
				}, {
					url: null,
					description: '分销等级设置',
					key: 'malldistributionlevel'
				}, {
					url: null,
					description: '佣金提现设置',
					key: 'malldistributioncommissionCashSet'
				}, {
					url: null,
					description: '分销商政策',
					key: 'malldistributionpolicy'
				}]
			},
			//财务管理
			{
				description: '财务管理',
				children: [{
					url: null,
					description: '商城收入记录',
					key: 'mallfinanceincomeRecord'
				}, {
					url: null,
					description: '分销佣金记录',
					key: 'mallfinancecommissionRecord'
				}, {
					url: null,
					description: '佣金提现申请',
					key: 'mallfinancewithdrawCashApply'
				}, {
					url: null,
					description: '提现批准记录',
					key: 'mallfinancewithdrawCashPass'
				}, {
					url: null,
					description: '提现驳回记录',
					key: 'mallfinancewithdrawCashReject'
				}, {
					url: null,
					description: '佣金转余额记录',
					key: 'mallfinancecommissionToBalance'
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
				key: 'systemSetmallSetorderSet'
			}, {
				url: null,
				description: '系统功能名称',
				key: 'systemSetmallSetmoduleNameSet'
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
				key: 'marketingcouponlist'
			}, {
				url: null,
				description: '优惠券设置',
				key: 'marketingcouponcouponSet'
			}, {
				url: null,
				description: '优惠券投放设置',
				key: 'marketingcouponcouponSendSet'
			}]
		}]
	}
	//
]
