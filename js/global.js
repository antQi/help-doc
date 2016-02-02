~ function() {
	var page = {
		init: function() {
			var that = this;
			$('.tab-pane').each(function(k, v) {
				that.getTabPanel(v)
			})
		},
		getTabPanel: function(that) {
			//加载内容
			$.get('../views/' + that.dataset.ui)
				.fail(function(e) {
					$(that).html('哎呀！内容获取失败了.');
				})
				.done(function(result) {
					$(that).html(result);
					//加载脚本
					if (that.dataset.script) {
						var url = that.dataset.script.split(',');
						url.forEach(function(v,k){
								$('head').append($('<script type="text/javascript" src="../' + v + '.js"></script>'))
						})
					}
				})
		},
		run: function() {
			this.init();
		}
	}

	page.run();
}()
