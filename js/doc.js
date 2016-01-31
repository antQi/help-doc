~ function() {
	var page = {
		init: function() {
			//加载菜单
			var createLi = function(obj) {
				for (var i = 0; i < obj.length; i++) {
					if (obj[i].children) {
						menu += '<li class="list-group-item children"><a href="#">' + obj[i].description + '</a>';
						menu += '<ul class="list-group">';
						createLi(obj[i].children);
						menu += '</ul>';
					} else {
						menu += '<li class="list-group-item"><a href="#">' + obj[i].description + '</a><a href="#" class="pull-right edit" data-edit="'+obj[i].description+','+obj[i].key+'"><i class="fa fa-edit"></i></a>'
					}
					menu += '</li>';
				}
			}

			var menu = '<ul id="menu" class="list-group">';
			createLi(help)
			menu += '</ul>';
			$('#content').html(menu);
			$('#menu').metisMenu();
			
			$('.edit').each(function(k,v){
				$(v).click(function(){
					if(this.dataset){
						var item=this.dataset.edit.split(',')[0];
						var key=this.dataset.edit.split(',')[1];
						$('#editKey').val(key);
						$('#editItem').val(item);
						$('#add').trigger('click')
					}
				})
			})
		},
		run: function() {
			this.init()
		}
	}

	page.run()
}()
