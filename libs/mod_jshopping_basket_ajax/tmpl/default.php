<?php /** Module Basket ajax for JoomShopping
	 /** version 1.0 **/
defined('_JEXEC') or die;
?>
<style type="text/css">
#basket_store{	
	background-color: <?php echo $params->get('bgColor'); ?>;
	border: <?php echo $params->get('bgBorder'); ?>px solid <?php echo $params->get('bgBorderColor'); ?>;
	border-radius: <?php echo $params->get('BorderRad'); ?>px;
	width: <?php echo $params->get('cartWidth'); ?>%;
	min-width: 70px;
}
#basket_1{
	background:url(/modules/mod_jshopping_basket_ajax/img/basket_ajax.png) no-repeat scroll 0 0;
	width: 64px;
	height: 34px;
}
#basket_2{
	background:url(/<?php echo $params->get('cartImage');?>) no-repeat scroll 0 0;
	width: <?php echo $params->get('cartImageWidth');?>px;
	height: <?php echo $params->get('cartImageHeight');?>px;
}
#basket_3{
	width: 55px;
	height: 25px;
}
.carttext{
    float: <?php echo $params->get('textPosition');?>;
	padding: 18px 5px;
	font-size: <?php echo $params->get('textSize');?>px;
	color: <?php echo $params->get('textColor'); ?>;
}
a#basket_right{
	float: right;
}
a#basket_left{
	float: left;
}
#basket_1, #basket_2, #basket_3, #basket_right, #basket_left{
	font-size: <?php echo $params->get('textSize');?>px;
	color: <?php echo $params->get('textColor'); ?>;
}
.basket_list{
	border: <?php echo $params->get('bgBorderList'); ?>px solid <?php echo $params->get('bgBorderColorList'); ?>;
	background-color: <?php echo $params->get('bgColorList'); ?>;
	border-radius: <?php echo $params->get('BorderRadList'); ?>px;
}
.basket_content{
	width: <?php echo $params->get('WidthList'); ?>px;
}
.basket_rows {
	max-height: <?php echo $params->get('HeightList'); ?>px;
}
.basket_img img{
    margin: 0px 5px 20px 0px;
	width: <?php echo $params->get('ProdImageWidth');?>px;
}
</style>
<div id="basket_store">
<?php if($params->get('cartImageOn')==1){?>
<a id="basket_1" class="basket_icon hasTooltip" data-placement="<?php echo $params->get('CartTooltip');?>" href="<?php echo SEFLink('index.php?option=com_jshopping&controller=cart&task=view',1)?>" title="<?php echo JText::_('MOD_GO_TO_CART') ?>"><?php echo $cart->count_product?></a>
<?php 
} elseif($params->get('cartImageOn')==2){?>
<a id="basket_2" class="basket_icon hasTooltip" data-placement="<?php echo $params->get('CartTooltip');?>" href="<?php echo SEFLink('index.php?option=com_jshopping&controller=cart&task=view',1)?>" title="<?php echo JText::_('MOD_GO_TO_CART') ?>"><?php echo $cart->count_product?></a>
<?php 
} elseif($params->get('cartImageOn')==3){?>
<a id="basket_3" class="basket_icon hasTooltip" data-placement="<?php echo $params->get('CartTooltip');?>" href="<?php echo SEFLink('index.php?option=com_jshopping&controller=cart&task=view',1)?>" title="<?php echo JText::_('MOD_GO_TO_CART') ?>"><?php echo $cart->count_product?></a>
<?php 
} elseif($params->get('cartImageOn')==4){?>
<?php  if($params->get('textPosition')==left){?>
<span class="carttext"><?php echo $params->get('cartText');?></span><a id="basket_right" class="basket_icon hasTooltip" data-placement="<?php echo $params->get('CartTooltip');?>" href="<?php echo SEFLink('index.php?option=com_jshopping&controller=cart&task=view',1)?>" title="<?php echo JText::_('MOD_GO_TO_CART') ?>"><?php echo $cart->count_product?></a>
<?php 
} else {?>
<span class="carttext"><?php echo $params->get('cartText');?></span><a id="basket_left" class="basket_icon hasTooltip" data-placement="<?php echo $params->get('CartTooltip');?>" href="<?php echo SEFLink('index.php?option=com_jshopping&controller=cart&task=view',1)?>" title="<?php echo JText::_('MOD_GO_TO_CART') ?>"><?php echo $cart->count_product?></a>
<?php }?>
<?php }?>
<div class="basket_content">
<?php if(count($cart->products)>=1){?>
	<div class="basket_list">
		<div class="basket_rows">
		<?php foreach($cart->products as $key_id=>$value){?>
			<div class="basket_row">
				<a class="basket_img" href="<?php echo $value['href']?>">
					<img src="<?php echo $jshopConfig->image_product_live_path?>/<?php if ($value["thumb_image"]!='') echo $value["thumb_image"]; else echo 'noimage.gif'?>">
				</a>
				<div class="basket_name">
					<a href="<?php echo $value['href']?>" name="<?php echo $value["product_id"]?>"><?php echo $value["product_name"]?></a>
					<?php foreach($value['attributes_value'] as $attr){?>
						<div class="basket_attr" id="attr_id_<?php echo $value["product_id"].'_'.$attr->attr_id.$attr->value_id?>">
							<span class="name"><?php echo $attr->attr?>:</span> <span class="value"><?php echo $attr->value?></span>
						</div>
					<?php }?>
				</div>
				<div class="basket_value">
					<a class="basket_del" href="<?php echo $value["href_delete"]?>?ajax=1" title="<?php echo JText::_('MOD_DELETE')?>">✖</a>
					<span class="basket_quan">
						<span class="basket_minus btn" minuskey="quantity[<?php echo $key_id?>]" minusval="<?php echo $value["quantity"]?>">−</span>
						<input class="basket_inputbox inputbox" type="text" value="<?php echo $value["quantity"]?>" name="quantity[<?php echo $key_id?>]">
						<span class="basket_plus btn" pluskey="quantity[<?php echo $key_id?>]" plusval="<?php echo $value["quantity"]?>">+</span>
					</span>
					<span class="basket_price"><em>x</em><?php echo formatprice($value["price"])?></span>
				</div>
			</div>
		<?php }?>
		</div>
		<div class="basket_total"><?php echo JText::_('MOD_PRODUCTS').' '.$cart->count_product.' '.JText::_('MOD_PRODUCTS_SUMM').' '.formatprice($cart->getSum(0,1))?></div>
		<a class="basket_incart btn btn-success" href="<?php echo SEFLink('index.php?option=com_jshopping&controller=cart&task=view',1)?>"><?php echo JText::_('MOD_GO_TO_CART')?></a>
	</div>
<?php }?>
</div>
</div>
<div class="no_display">
<span class="datac-one"><?php echo JURI::base()?></span>
<span class="datac-uic"><?php echo SEFLink('index.php?option=com_jshopping&controller=cart&task=view',1)?></span>
<span class="datac-urp"><?php echo SEFLink('index.php?option=com_jshopping&controller=product&task=view',1)?></span>
<span class="datac-udl"><?php echo SEFLink('index.php?option=com_jshopping&controller=cart&task=delete',1)?></span>
<span class="datac-tip"><?php echo $jshopConfig->image_product_live_path?></span>
<span class="datac-vpp"><?php echo $jshopConfig->product_price_precision?></span>
<span class="datac-hcc"><span class="currencycode"><?php echo $jshopConfig->currency_code?></span></span>
<span class="datac-tac">✔ <?php echo JText::_('MOD_PRODUCT_ADDED_CART')?></span>
<span class="datac-tic"><?php echo JText::_('MOD_PRODUCT_IN_CART')?></span>
<span class="datac-tgc"><?php echo JText::_('MOD_GO_TO_CART')?></span>
<span class="datac-tdl"><?php echo JText::_('MOD_DELETE')?></span>
<span class="datac-tpc"><?php echo JText::_('MOD_PRODUCTS')?></span>
<span class="datac-tps"><?php echo JText::_('MOD_PRODUCTS_SUMM')?></span>
<span class="datac-ter"><?php echo JText::_('MOD_ERROR_ADD_TO_CART')?></span>
</div>
