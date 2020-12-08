jQuery(document).ready(function(){
one=jQuery('span.datac-one').html();
uic=jQuery('span.datac-uic').html();
urp=jQuery('span.datac-urp').html();
udl=jQuery('span.datac-udl').html();
tip=jQuery('span.datac-tip').html();
vpp=jQuery('span.datac-vpp').html();
hcc=jQuery('span.datac-hcc').html();
tac=jQuery('span.datac-tac').text();
tic=jQuery('span.datac-tic').text();
tgc=jQuery('span.datac-tgc').text();
tdl=jQuery('span.datac-tdl').text();
tpc=jQuery('span.datac-tpc').text();
tps=jQuery('span.datac-tps').text();
ter=jQuery('span.datac-ter').text();
if(jQuery('form[name="updateCart"], form[name="oneStepCheckoutForm"]').length){
	jQuery('#basket_store .basket_content').remove();
}
function Af(){
	jQuery('.in_cart_list').remove();
	jQuery('.in_cart_pro').remove();
	a=jQuery('input#product_id').val();
	b=jQuery('#basket_store .basket_name a').map(function(){return jQuery(this).attr('name')});
	jQuery.each(jQuery.unique(b),function(b,c){
	jQuery('.productitem_'+c+' .product_buy, .productitem_'+c+' .btn-success, .productitem_'+c+' .list-btn.button_buy').after('<a class="in_cart_list btn" rel="tooltip" href="'+uic+'" title="'+tic+'"><i class="icon-ok"></i></a>');
	a==c&&jQuery('.buttons .btn-primary.button').after('<a class="in_cart_pro btn" rel="tooltip" href="'+uic+'" title="'+tic+'"><i class="icon-ok"></i></a>');
	});
}
function Bf(a){Af(),
	jQuery('.productitem_'+a+' .in_cart_list').prepend('<div class="item_list_added"></div>'),
	jQuery('.in_cart_pro').prepend('<div class="item_pro_added"></div>'),
	jQuery('.item_list_added, .item_pro_added').fadeOut(2400)
}
function Cf(a){for(var b in a)if('products'==b&&a.hasOwnProperty(b))for(var c in a[b])if(a[b].hasOwnProperty(c)){
	for(var d in a[b][c]){
		'category_id'==d&&(str_cat=a[b][c][d]);
		'product_id'==d&&(str_pid=a[b][c][d]);
		'thumb_image'==d&&(str_img=a[b][c][d]);
		if(str_img=='')var str_img='noimage.gif';
		'product_name'==d&&(str_pro=a[b][c][d]);
		if('attributes_value'==d){var str_atr='';for(e in a[b][c][d]) if(a[b][c][d].hasOwnProperty(e)){
				for(var f in a[b][c][d][e])
				'attr_id'==f&&(str_aid=a[b][c][d][e][f]),
				'value_id'==f&&(str_vid=a[b][c][d][e][f]),
				'attr'==f&&(str_anm=a[b][c][d][e][f]),
				'value'==f&&(str_avl=a[b][c][d][e][f]);
				str_atr+='<div class="basket_attr" id="attr_id_'+str_pid+'_'+str_aid+str_vid+'"><span class="name">'
				+str_anm+':</span> <span class="value">'+str_avl+'</span></div>'
		}}
		if('quantity'==d){
			str_but='<span class="basket_minus btn" minuskey="quantity['+c+']" minusval="'+a[b][c][d]+'">в€’</span> <input type="text" value="'
			+a[b][c][d]+'" class="basket_inputbox inputbox" name="quantity['+c+']"> <span class="basket_plus btn" pluskey="quantity['+c+']" plusval="'+a[b][c][d]+'">+</span>';
		}
		'price'==d&&(str_prc='<span class="basket_price"><em>x</em>'+a[b][c][d].toFixed(vpp)+' '+hcc+'</span>')
	}
	str_row+='<div class="basket_row"><a class="basket_img" href="'+urp+'?category_id='+str_cat+'&product_id='+str_pid+'"><img src="'
	+tip+'/'+str_img+'"></a><div class="basket_name"><a href="'+urp+'?category_id='+str_cat+'&product_id='+str_pid+'" name="'+str_pid+'">'
	+str_pro+'</a>'+str_atr+'</div><div class="basket_value"><a class="basket_del" href="'+udl+'?number_id='+c+'?ajax=1" title="'
	+tdl+'">вњ–</a> <span class="basket_quan">'+str_but+'</span>'+str_prc+'</div></div>'
}}
function Df(a){
	str_row='';Cf(a);if((a.price_product-a.rabatt_summ)>0)str_sum=(a.price_product-a.rabatt_summ).toFixed(vpp);else str_sum=0;
	jQuery('#basket_store .basket_content').html('<div class="basket_list"><div class="basket_rows">'+str_row+'</div><div class="basket_total">'+tpc+' '
	+a.count_product+' '+tps+' '+str_sum+' '+hcc+'</div><a class="basket_incart btn btn-success" href="'+uic+'">'+tgc+'</a></div>')
	jQuery('.test .basket_icon-total').html(str_sum+' '+hcc);
}

jQuery('body').on('click','.oiproduct .button_buy, .product_corps .button_buy, .list-btn.button_buy',function(a){
	a.preventDefault();
	b=jQuery(this).attr('href');
	c=b.split("product_id=")[1];
	jQuery('body').append('<div class="basket_load_ajax"></div>');
	jQuery.ajax({cache:!1,url:b+'&ajax=1',dataType:'json',success:function(a){
		jQuery('.basket_load_ajax').remove();
		'cart'==a.type_cart?(jQuery('#basket_store .basket_icon').html(a.count_product),Df(a),Bf(c)):window.location.assign(b)
	},error:function(a){jQuery('.basket_load_ajax').remove();location.reload()}});return!1
});
jQuery('body').on('click','.prod_buttons .prod_buy, .prod_buttons .btn-primary, .button.buy',function(a){
	a.preventDefault();
	a=jQuery('form[name="product"]').serialize();
	jQuery('body').append('<div class="basket_load_ajax"></div>');
	jQuery.ajax({cache:!1,url:one+'index.php?option=com_jshopping&controller=cart&task=add&'+a+'&ajax=1',dataType:'json',ifModified:true,success:function(a){
		jQuery('.basket_load_ajax').remove();
		'cart'==a.type_cart?(jQuery('#basket_store .basket_icon').html(a.count_product),Df(a),Bf()):alert(ter)
	},error:function(){jQuery('.basket_load_ajax').remove();location.reload()}});return!1
});
jQuery('body').on('click','.basket_del',function(a){
	a.preventDefault();
	a=jQuery(this).attr('href');
	jQuery('#basket_store .basket_total').append('<div class="basket_load"></div>');
	jQuery.ajax({cache:!1,url:a+'&ajax=1',dataType:'json',success:function(a){
		jQuery('.basket_load').remove();
		'cart'==a.type_cart?(
			jQuery('#basket_store .basket_icon').html(a.count_product),str_row='',Cf(a),
			str_sum=(a.price_product-a.rabatt_summ).toFixed(vpp),str_sum<0&&(jQuery(str_sum=0)),
			jQuery('#basket_store .basket_content').html('<div class="basket_list"><div class="basket_rows">'+str_row+'</div><div class="basket_total">'
			+tpc+' '+a.count_product+' '+tps+' '+str_sum+' '+hcc+'</div><a class="basket_incart btn btn-success" href="'+uic+'">'+tgc+'</a></div>'),
			a.count_product=='0'&&(jQuery('#basket_store .basket_list').remove()),Af()
		):setTimeout(function(){location.reload()})
	},error:function(){jQuery('.basket_load').remove();location.reload()}});return!1
});
jQuery('body').on('click','.basket_minus',function(a){
	a.preventDefault();
	a=jQuery(this).attr('minuskey');
	b=jQuery(this).attr('minusval'),c=parseFloat(b)-1;
	a=0!=c?a+'='+c:a+'='+b;
	jQuery('#basket_store .basket_total').append('<div class="basket_load"></div>');
	jQuery.ajax({cache:!1,url:one+'index.php?option=com_jshopping&controller=cart&task=refresh&'+a+'&ajax=1',dataType:'json',ifModified:true,success:function(a){
		jQuery('.basket_load').remove();
		'cart'==a.type_cart&&(jQuery('#basket_store .basket_icon').html(a.count_product),Df(a))
	},error:function(){jQuery('.basket_load').remove();location.reload()}});return!1
});
jQuery('body').on('click','.basket_plus',function(a){
	a.preventDefault();
	a=jQuery(this).attr('pluskey');
	b=jQuery(this).attr('plusval'),b=parseFloat(b)+1;
	a=a+'='+b;
	jQuery('#basket_store .basket_total').append('<div class="basket_load"></div>');
	jQuery.ajax({cache:!1,url:one+'index.php?option=com_jshopping&controller=cart&task=refresh&'+a+'&ajax=1',dataType:'json',ifModified:true,success:function(a){
		jQuery('.basket_load').remove();
		'cart'==a.type_cart&&(jQuery('#basket_store .basket_icon').html(a.count_product),Df(a))
	},error:function(){jQuery('.basket_load').remove();location.reload()}});return!1
});
jQuery('body').on('keyup','.basket_inputbox',function(a){
	a.preventDefault();
	a=jQuery(this).attr('name');
	b=jQuery(this).val();
	if(0!=b)a=a+'='+b,
	jQuery('#basket_store .basket_total').append('<div class="basket_load"></div>'),
	jQuery.ajax({cache:!1,url:one+'index.php?option=com_jshopping&controller=cart&task=refresh&'+a+'&ajax=1',dataType:'json',ifModified:true,success:function(a){
		jQuery('.basket_load').remove();
		'cart'==a.type_cart?(jQuery('#basket_store .basket_icon').html(a.count_product),Df(a)):setTimeout(function(){location.reload()})
	},error:function(){jQuery('.basket_load').remove();location.reload()}});else return!1
});Af()});