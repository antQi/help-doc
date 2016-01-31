~ function() {
	var page = {
		init: function() {
			//初始化编辑器
			$('#summernote').summernote();
			$('.note-editor').css({
				'margin-bottom': '20px',
				'border': '1px solid #F0EDED',
				'height':'400px'
			})
			$('.note-editable').css({'height': '83%'});

			//绑定事件
			$('#saveDoc').click(function(){
				var data={
					key:$('#editItem').val(),
					doc:$('.note-editable').html()
				}
				$.post('../saveDoc',data)
				.fail(function(){
					alert('啊啊！服务器出错啦.')
				})
				.done(function(){
					console.log('sdfasdf')
				})
				// $.get('../doc/help.json')
				// .fail(function(){
				// 	alert('啊啊！，４０４');
				// })
				// .done(function(data){
				//
				// })
			})
		},
		run: function() {
			this.init()
		}
	}

	page.run();
}()
