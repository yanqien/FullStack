<template>
  <div class="list-wrapper">
    <div class="list-header">
      <div class="header-fixed">
        <!--头部搜索-->
        <head-search
          class="itemList-search"
          v-model="postData.title"
          @refreshFn="refreshFn"
        ></head-search>
        <div class="cate">
          <van-tabs
            :ellipsis="false"
            line-width="27px"
            line-height="2px"
            v-model="activeOne"
            v-if="cateListOne && cateListOne.length > 0"
            @click="handleClickCateOne"
          >
            <van-tab
              v-for="(item, index) in cateListOne"
              :title="item.class_name"
              :key="index"
            ></van-tab>
          </van-tabs>
          <van-tabs
            :ellipsis="false"
            line-width="27px"
            line-height="2px"
            sticky
            v-model="activeTwo"
            v-if="cateListTwo && cateListTwo.length > 0"
            @click="handleClickCateTwo"
          >
            <van-tab
              v-for="(item, index) in cateListTwo"
              :title="item.class_name"
              :key="index"
            ></van-tab>
          </van-tabs>
          <van-tabs
            :ellipsis="false"
            line-width="27px"
            line-height="2px"
            sticky
            v-model="activeThree"
            v-if="cateListThree && cateListThree.length > 0"
            @click="handleClickCateThree"
          >
            <van-tab
              v-for="(item, index) in cateListThree"
              :title="item.class_name"
              :key="index"
            ></van-tab>
          </van-tabs>
        </div>

        <div class="sort itemList-sort">
          <div class="sort-item">
            <!--排序搜索-->
            <sort-search
              @pullItem="sortSearchFn"
              :typeList="typeList"
              :listStyle="listStyle"
            ></sort-search>
          </div>
        </div>
      </div>
    </div>

    <div class="list-wrapper-app">
      <!--商品列表-->
      <item-wrapper
        :itemList="itemList"
        :listStyle="listStyle"
        :otherInfo="otherInfo"
        :vanList="vanList"
        :isShowNoData="isShowNoData"
        @scrollReachBottom="getData"
      ></item-wrapper>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @Author: yanqien
 * @Date: 2021-04-24 16:18:13
 * @Last Modified by: yanqien
 * @Last Modified time: 2021-04-24 16:18:13
 */
import { ref, reactive, toRefs, defineComponent } from 'vue'
import headSearch from './headSearch/index.vue'
import sortSearch from './sortSearch/index.vue'
import itemWrapper from './itemWrapper/index.vue'
export default defineComponent({
  name: 'list-wrapper',
  setup() {
    const state: any = reactive({
      postData: {
        title: '',
        p: 1,
        order: undefined, // priceUp,priceDown,salesDown,salesUp,newUp,newDown
        new: undefined,
        ltime: undefined,
        crowd: undefined,
        class_id: undefined,
      },
      typeList: [
        { label: '默认', active: true, type: 0, prop: 'default', sort: 'none' },
        { label: '价格', active: false, type: 1, prop: 'price', sort: '' },
        { label: '销量', active: false, type: 2, prop: 'sales', sort: '' },
        { label: '新品', active: false, type: 3, prop: 'new', sort: '' },
        { label: '', active: false, type: 5, prop: 'listStyle', sort: 'none' },
      ],
      itemList: [
        {
          cost: null,
          cost_price: '0.00',
          directly_rate: '0.000',
          directly_money: '0.00',
          is_dh_commission: '1',
          is_staff_commission: '1',
          is_store_commission: '1',
          is_dl_commission: '1',
          is_fx_commission: '1',
          category_id: null,
          type: '1',
          item_id: '4964763',
          title: '【2提起送】伊利金典纯牛奶12*250ml（订货商专享）',
          status: '1',
          num: 32300,
          original_price: '400.00',
          price: '280.00',
          hide_stock: '1',
          buy_method: '1',
          buy_url: '',
          join_level_discount: '1',
          sales_volume: '23',
          basic_sales: '0',
          is_show_sale: '0',
          buy_need_points: '0',
          is_time_purchase: false,
          new_supplier_id: '0',
          fenxiao_slogan: '',
          sold_out: '1000',
          is_self_support: 1,
          item_config: {
            ele_title: '',
            is_allow_dhs_virtual_less: '0',
            is_dhs_virual_stock: '3',
            is_store_serve_award: '',
            item_agreement_name: '',
            item_agreement_prompt: '',
            item_labels: '',
            item_purchase_agreement: '3',
            kuajing_delivery: '10003',
            kuajing_type: '0',
            origin_area: '21',
            security_code_jump: '',
            security_code_jump_word: '',
            shopping_date_end: '',
            shopping_date_hint: '',
            shopping_date_name: '',
            shopping_date_range: '0',
            shopping_date_start: '',
            shopping_day_quota: '',
            shopping_day_quota_type: '1',
            shopping_memo_hint: '',
            shopping_need_date: '2',
            shopping_need_memo: '0',
          },
          origin_area_info: {
            id: '21',
            name: '加拿大',
            en_code: 'CAN',
            country_code: '124',
            customs_code: '',
            logo_url: 'http://oss.aliyuncs.com/wifenxiao/16/79/6/2020-03/5e6853f09a48a.png',
            is_enable: '1',
            create_time: '1583895536',
          },
          pic_url: 'http://img.wifenxiao.com/16/79/6/2021-04/6076900fd812f.jpg@!',
          is_compress: 1,
          group: [],
          itemPic: '',
          supplier: '0',

          sale_num: '23',
          is_act: true,
          current_price: '400.00',
          discount: '7',
          pre_commission: 60,
          up_discount_price: '',
          up_level_name: '',
        },
        {
          cost: '0.00',
          cost_price: '0.00',
          directly_rate: '0.000',
          directly_money: '0.00',
          is_dh_commission: '1',
          is_staff_commission: '1',
          is_store_commission: '1',
          is_dl_commission: '1',
          is_fx_commission: '1',
          category_id: null,
          type: '1',
          item_id: '4964564',
          title: '接芒果',
          status: '1',
          num: 3608,
          original_price: '99.00',
          price: '99.00',
          hide_stock: '1',
          buy_method: '1',
          buy_url: '',
          join_level_discount: '0',
          sales_volume: '23',
          basic_sales: '0',
          is_show_sale: '0',
          buy_need_points: '0',
          is_time_purchase: false,
          new_supplier_id: '0',
          fenxiao_slogan: '副标题（测试内容12345！@#¥%qwertiyu&*）',
          sold_out: '1000',
          is_self_support: 1,
          item_config: {
            ele_title: '',
            is_allow_dhs_virtual_less: '0',
            is_dhs_virual_stock: '3',
            is_store_serve_award: '',
            item_agreement_name: '',
            item_agreement_prompt: '',
            item_labels: '',
            item_purchase_agreement: '3',
            kuajing_delivery: '10011',
            kuajing_type: '0',
            origin_area: '21',
            security_code_jump: '',
            security_code_jump_word: '',
            shopping_date_end: '',
            shopping_date_hint: '',
            shopping_date_name: '',
            shopping_date_range: '0',
            shopping_date_start: '',
            shopping_day_quota: '',
            shopping_day_quota_type: '3',
            shopping_memo_hint: '',
            shopping_need_date: '0',
            shopping_need_memo: '0',
          },
          origin_area_info: {
            id: '21',
            name: '加拿大',
            en_code: 'CAN',
            country_code: '124',
            customs_code: '',
            logo_url: 'http://oss.aliyuncs.com/wifenxiao/16/79/6/2020-03/5e6853f09a48a.png',
            is_enable: '1',
            create_time: '1583895536',
          },
          pic_url: 'http://img.wifenxiao.com/16/79/6/2021-04/6076900fd812f.jpg@!',
          is_compress: 1,
          group: [],
          itemPic: '',
          supplier: '0',

          sale_num: '23',
          is_act: true,
          current_price: '98.00',
          discount: '7.9',
          is_bargin: 1,
          activity_status: '1',
          start: '1618448580',
          end: '1619776980',
          is_shelf_buy: '0',
          is_commission: '1',
          start_time: '2021-04-15 09:03',
          end_time: '2021-04-30 18:03',
          activity: true,
          actives_title: '砍价',
          pre_commission: 36.85,
          up_discount_price: '',
          up_level_name: '',
        },
        {
          cost: '0.00',
          cost_price: '0.00',
          directly_rate: '0.000',
          directly_money: '0.00',
          is_dh_commission: '1',
          is_staff_commission: '1',
          is_store_commission: '1',
          is_dl_commission: '1',
          is_fx_commission: '1',
          category_id: null,
          type: '1',
          item_id: '4964430',
          title: '芒果接',
          status: '1',
          num: 3610,
          original_price: '99.00',
          price: '77.00',
          hide_stock: '1',
          buy_method: '1',
          buy_url: '',
          join_level_discount: '1',
          sales_volume: '31',
          basic_sales: '0',
          is_show_sale: '1',
          buy_need_points: '0',
          is_time_purchase: false,
          new_supplier_id: '0',
          fenxiao_slogan: '',
          sold_out: '1000',
          is_self_support: 1,
          item_config: {
            ele_title: '',
            is_allow_dhs_virtual_less: '2',
            is_dhs_virual_stock: '3',
            is_store_serve_award: '',
            item_agreement_name: '',
            item_agreement_prompt: '',
            item_labels: '',
            item_purchase_agreement: '3',
            kuajing_delivery: '',
            kuajing_type: '0',
            origin_area: '21',
            security_code_jump: '',
            security_code_jump_word: '',
            shopping_date_end: '',
            shopping_date_hint: '',
            shopping_date_name: '',
            shopping_date_range: '0',
            shopping_date_start: '',
            shopping_day_quota: '',
            shopping_day_quota_type: '1',
            shopping_memo_hint: '',
            shopping_need_date: '2',
            shopping_need_memo: '0',
          },
          origin_area_info: {
            id: '21',
            name: '加拿大',
            en_code: 'CAN',
            country_code: '124',
            customs_code: '',
            logo_url: 'http://oss.aliyuncs.com/wifenxiao/16/79/6/2020-03/5e6853f09a48a.png',
            is_enable: '1',
            create_time: '1583895536',
          },
          pic_url: 'http://img.wifenxiao.com/16/79/6/2021-04/6076900fd812f.jpg@!',
          is_compress: 1,
          group: [],
          itemPic: '',
          supplier: '0',
          link_item:
            'http://m.wfx.wxfenxiao.com/mb/item/item-detail?sid=6&pid=10472&detailId=4964430&supplier=0&page=1',
          sale_num: '31',
          is_act: true,
          current_price: '99.00',
          discount: '7.8',
          pre_commission: 36.85,
          up_discount_price: '',
          up_level_name: '',
        },
        {
          cost: null,
          cost_price: '0.00',
          directly_rate: '0.000',
          directly_money: '0.00',
          is_dh_commission: '1',
          is_staff_commission: '1',
          is_store_commission: '1',
          is_dl_commission: '1',
          is_fx_commission: '1',
          category_id: null,
          type: '1',
          item_id: '4964282',
          title: 'A白减减-库存删除',
          status: '1',
          num: 100,
          original_price: '99.00',
          price: '0.07',
          hide_stock: '1',
          buy_method: '1',
          buy_url: '',
          join_level_discount: '1',
          sales_volume: '4',
          basic_sales: '0',
          is_show_sale: '0',
          buy_need_points: '0',
          is_time_purchase: false,
          new_supplier_id: '0',
          fenxiao_slogan: '',
          sold_out: '1000',
          is_self_support: 1,
          item_config: {
            ele_title: '',
            is_allow_dhs_virtual_less: '0',
            is_dhs_virual_stock: '3',
            is_store_serve_award: '',
            item_agreement_name: '',
            item_agreement_prompt: '',
            item_labels: '',
            item_purchase_agreement: '3',
            kuajing_type: '0',
            origin_area: '21',
            security_code_jump: '',
            security_code_jump_word: '',
            shopping_date_end: '',
            shopping_date_hint: '',
            shopping_date_name: '',
            shopping_date_range: '0',
            shopping_date_start: '',
            shopping_day_quota: '',
            shopping_day_quota_type: '1',
            shopping_memo_hint: '',
            shopping_need_date: '2',
            shopping_need_memo: '0',
          },
          origin_area_info: {
            id: '21',
            name: '加拿大',
            en_code: 'CAN',
            country_code: '124',
            customs_code: '',
            logo_url: 'http://oss.aliyuncs.com/wifenxiao/16/79/6/2020-03/5e6853f09a48a.png',
            is_enable: '1',
            create_time: '1583895536',
          },
          pic_url: 'http://img.wifenxiao.com/16/79/6/2021-03/604c209c6bf32.jpg@!',
          is_compress: 1,
          group: [null],
          itemPic: '',
          supplier: '0',
          link_item:
            'http://m.wfx.wxfenxiao.com/mb/item/item-detail?sid=6&pid=10472&detailId=4964282&supplier=0&page=1',
          sale_num: '4',
          is_act: true,
          current_price: '0.10',
          discount: '7',
          pre_commission: 0.02,
          up_discount_price: '',
          up_level_name: '',
        },
        {
          cost: null,
          cost_price: '0.00',
          directly_rate: '0.000',
          directly_money: '0.00',
          is_dh_commission: '1',
          is_staff_commission: '0',
          is_store_commission: '0',
          is_dl_commission: '0',
          is_fx_commission: '1',
          category_id: null,
          type: '1',
          item_id: '4964124',
          title: '白桃K11',
          status: '1',
          num: 490,
          original_price: '200.00',
          price: '40.00',
          hide_stock: '0',
          buy_method: '1',
          buy_url: '',
          join_level_discount: '1',
          sales_volume: '62',
          basic_sales: '0',
          is_show_sale: '0',
          buy_need_points: '0',
          is_time_purchase: false,
          new_supplier_id: '0',
          fenxiao_slogan: '',
          sold_out: '1000',
          is_self_support: 1,
          item_config: {
            bar_code: '',
            comm_barcode: '',
            curr_code: '142',
            declare_measure_unit: '',
            ele_title: '',
            hs_code: '',
            insured_fee: '0',
            is_allow_dhs_virtual_less: '0',
            is_dhs_virual_stock: '3',
            is_store_serve_award: '',
            item_agreement_name: '',
            item_agreement_prompt: '',
            item_labels: '天下无贼',
            item_purchase_agreement: '3',
            i_e_flag: 'I',
            kuajing_type: '0',
            origin_area: '21',
            production_marketing_country: '156',
            product_record_no: '',
            security_code_jump: 'www.baidu.com',
            security_code_jump_word: '',
            shopping_date_end: '',
            shopping_date_hint: '填写',
            shopping_date_name: '日期',
            shopping_date_range: '0',
            shopping_date_start: '',
            shopping_day_quota: '',
            shopping_day_quota_type: '1',
            shopping_memo_hint: '',
            shopping_need_date: '1',
            shopping_need_memo: '0',
          },
          origin_area_info: {
            id: '21',
            name: '加拿大',
            en_code: 'CAN',
            country_code: '124',
            customs_code: '',
            logo_url: 'http://oss.aliyuncs.com/wifenxiao/16/79/6/2020-03/5e6853f09a48a.png',
            is_enable: '1',
            create_time: '1583895536',
          },
          pic_url: 'undefined',
          is_compress: 0,
          group: [null],
          itemPic: '',
          supplier: '0',
          link_item:
            'http://m.wfx.wxfenxiao.com/mb/item/item-detail?sid=6&pid=10472&detailId=4964124&supplier=0&page=1',
          sale_num: '62',
          is_act: true,
          current_price: '60.00',
          discount: '6.7',
          pre_commission: 20,
          up_discount_price: '',
          up_level_name: '',
        },
        {
          cost: null,
          cost_price: '0.00',
          directly_rate: '5.000',
          directly_money: '0.00',
          is_dh_commission: '0',
          is_staff_commission: '1',
          is_store_commission: '1',
          is_dl_commission: '1',
          is_fx_commission: '1',
          category_id: null,
          type: '1',
          item_id: '4964123',
          title: '绿桃K',
          status: '1',
          num: 773,
          original_price: '200.00',
          price: '181.30',
          hide_stock: '1',
          buy_method: '1',
          buy_url: '',
          join_level_discount: '1',
          sales_volume: '103',
          basic_sales: '0',
          is_show_sale: '1',
          buy_need_points: '0',
          is_time_purchase: false,
          new_supplier_id: '0',
          fenxiao_slogan: '',
          sold_out: '1000',
          is_self_support: 1,
          item_config: {
            bar_code: '',
            comm_barcode: '',
            curr_code: '142',
            declare_measure_unit: '',
            ele_title: '',
            hs_code: '',
            insured_fee: '0',
            is_allow_dhs_virtual_less: '0',
            is_dhs_virual_stock: '3',
            is_store_serve_award: '1',
            item_agreement_name: '',
            item_agreement_prompt: '',
            item_labels: '与他人方便',
            item_purchase_agreement: '3',
            i_e_flag: 'I',
            kuajing_type: '0',
            origin_area: '21',
            production_marketing_country: '156',
            product_record_no: '',
            security_code_jump: 'www.baidu.com',
            security_code_jump_word: '',
            shopping_date_end: '',
            shopping_date_hint: '',
            shopping_date_name: '',
            shopping_date_range: '0',
            shopping_date_start: '',
            shopping_day_quota: '',
            shopping_day_quota_type: '1',
            shopping_memo_hint: '',
            shopping_need_date: '2',
            shopping_need_memo: '0',
          },
          origin_area_info: {
            id: '21',
            name: '加拿大',
            en_code: 'CAN',
            country_code: '124',
            customs_code: '',
            logo_url: 'http://oss.aliyuncs.com/wifenxiao/16/79/6/2020-03/5e6853f09a48a.png',
            is_enable: '1',
            create_time: '1583895536',
          },
          pic_url: 'undefined',
          is_compress: 0,
          group: [null],
          itemPic: '',
          supplier: '0',
          link_item:
            'http://m.wfx.wxfenxiao.com/mb/item/item-detail?sid=6&pid=10472&detailId=4964123&supplier=0&page=1',
          sale_num: '103',
          is_act: true,
          current_price: '259.00',
          discount: '7',
          pre_commission: 38.85,
          up_discount_price: '',
          up_level_name: '',
        },
        {
          cost: '0.01',
          cost_price: '0.00',
          directly_rate: '10.000',
          directly_money: '35.90',
          is_dh_commission: '1',
          is_staff_commission: '1',
          is_store_commission: '1',
          is_dl_commission: '1',
          is_fx_commission: '1',
          category_id: null,
          type: '1',
          item_id: '4964122',
          title: '红桃K',
          status: '1',
          num: 611,
          original_price: '200.00',
          price: '0.01',
          hide_stock: '1',
          buy_method: '1',
          buy_url: '',
          join_level_discount: '1',
          sales_volume: '389',
          basic_sales: '0',
          is_show_sale: '0',
          buy_need_points: '0',
          is_time_purchase: false,
          new_supplier_id: '0',
          fenxiao_slogan: '',
          sold_out: '1000',
          is_self_support: 1,
          item_config: {
            bar_code: '',
            comm_barcode: '',
            curr_code: '142',
            declare_measure_unit: '',
            ele_title: '',
            hs_code: '',
            insured_fee: '0',
            is_allow_dhs_virtual_less: '0',
            is_dhs_virual_stock: '3',
            is_store_serve_award: '',
            item_agreement_name: '',
            item_agreement_prompt: '',
            item_labels: '坏单包赔',
            item_purchase_agreement: '3',
            i_e_flag: 'I',
            kuajing_type: '0',
            origin_area: '21',
            production_marketing_country: '156',
            product_record_no: '',
            security_code_jump: '',
            security_code_jump_word: '',
            shopping_date_end: '',
            shopping_date_hint: '',
            shopping_date_name: '',
            shopping_date_range: '0',
            shopping_date_start: '',
            shopping_day_quota: '',
            shopping_day_quota_type: '1',
            shopping_memo_hint: '',
            shopping_need_date: '2',
            shopping_need_memo: '0',
          },
          origin_area_info: {
            id: '21',
            name: '加拿大',
            en_code: 'CAN',
            country_code: '124',
            customs_code: '',
            logo_url: 'http://oss.aliyuncs.com/wifenxiao/16/79/6/2020-03/5e6853f09a48a.png',
            is_enable: '1',
            create_time: '1583895536',
          },
          pic_url: 'http://img.wifenxiao.com/16/79/6/2021-03/6063009f164b9.png@!',
          is_compress: 1,
          group: [null, null],
          itemPic: '',
          supplier: '0',
          link_item:
            'http://m.wfx.wxfenxiao.com/mb/item/item-detail?sid=6&pid=10472&detailId=4964122&supplier=0&page=1',
          sale_num: '389',
          is_act: true,
          current_price: '0.01',
          discount: '7',
          pre_commission: 0,
          up_discount_price: '',
          up_level_name: '',
        },
        {
          cost: '20.00',
          cost_price: '0.00',
          directly_rate: '5.000',
          directly_money: '0.00',
          is_dh_commission: '1',
          is_staff_commission: '1',
          is_store_commission: '1',
          is_dl_commission: '1',
          is_fx_commission: '1',
          category_id: null,
          type: '1',
          item_id: '4963828',
          title: '红桃K1',
          status: '1',
          num: 996,
          original_price: '200.00',
          price: '320.00',
          hide_stock: '1',
          buy_method: '1',
          buy_url: '',
          join_level_discount: '1',
          sales_volume: '1',
          basic_sales: '0',
          is_show_sale: '0',
          buy_need_points: '0',
          is_time_purchase: false,
          new_supplier_id: '0',
          fenxiao_slogan: '',
          sold_out: '1000',
          is_self_support: 1,
          item_config: {
            bar_code: '',
            comm_barcode: '',
            curr_code: '142',
            declare_measure_unit: '',
            ele_title: '',
            hs_code: '',
            insured_fee: '0',
            is_allow_dhs_virtual_less: '0',
            is_dhs_virual_stock: '3',
            is_store_serve_award: '',
            item_agreement_name: '',
            item_agreement_prompt: '',
            item_labels: '坏单包赔',
            item_purchase_agreement: '3',
            i_e_flag: 'I',
            kuajing_type: '0',
            origin_area: '21',
            production_marketing_country: '156',
            product_record_no: '',
            security_code_jump: '',
            security_code_jump_word: '',
            shopping_date_end: '',
            shopping_date_hint: '',
            shopping_date_name: '',
            shopping_date_range: '0',
            shopping_date_start: '',
            shopping_day_quota: '1',
            shopping_day_quota_type: '1',
            shopping_memo_hint: '',
            shopping_need_date: '2',
            shopping_need_memo: '0',
          },
          origin_area_info: {
            id: '21',
            name: '加拿大',
            en_code: 'CAN',
            country_code: '124',
            customs_code: '',
            logo_url: 'http://oss.aliyuncs.com/wifenxiao/16/79/6/2020-03/5e6853f09a48a.png',
            is_enable: '1',
            create_time: '1583895536',
          },
          pic_url: 'http://img.wifenxiao.com/16/79/6/2020-12/5fced524ecf0a.jpg@!',
          is_compress: 1,
          group: [null],
          itemPic: '',
          supplier: '0',
          link_item:
            'http://m.wfx.wxfenxiao.com/mb/item/item-detail?sid=6&pid=10472&detailId=4963828&supplier=0&page=1',
          sale_num: '1',
          is_act: true,
          current_price: '359.00',
          discount: '8.9',
          pre_commission: 89.85,
          up_discount_price: '',
          up_level_name: '',
        },
        {
          cost: null,
          cost_price: '0.00',
          directly_rate: '5.000',
          directly_money: '0.00',
          is_dh_commission: '0',
          is_staff_commission: '1',
          is_store_commission: '1',
          is_dl_commission: '1',
          is_fx_commission: '1',
          category_id: null,
          type: '1',
          item_id: '4963827',
          title: '绿桃K',
          status: '1',
          num: 772,
          original_price: '200.00',
          price: '181.30',
          hide_stock: '1',
          buy_method: '1',
          buy_url: '',
          join_level_discount: '1',
          sales_volume: '151',
          basic_sales: '0',
          is_show_sale: '1',
          buy_need_points: '0',
          is_time_purchase: false,
          new_supplier_id: '0',
          fenxiao_slogan: '',
          sold_out: '1000',
          is_self_support: 1,
          item_config: {
            bar_code: '',
            comm_barcode: '',
            curr_code: '142',
            declare_measure_unit: '',
            ele_title: '',
            hs_code: '',
            insured_fee: '0',
            is_allow_dhs_virtual_less: '0',
            is_dhs_virual_stock: '3',
            is_store_serve_award: '',
            item_agreement_name: '',
            item_agreement_prompt: '',
            item_labels: '与他人方便',
            item_purchase_agreement: '3',
            i_e_flag: 'I',
            kuajing_type: '0',
            origin_area: '21',
            production_marketing_country: '156',
            product_record_no: '',
            security_code_jump: 'www.baidu.com',
            security_code_jump_word: '',
            shopping_date_end: '',
            shopping_date_hint: '',
            shopping_date_name: '',
            shopping_date_range: '0',
            shopping_date_start: '',
            shopping_day_quota: '',
            shopping_day_quota_type: '1',
            shopping_memo_hint: '',
            shopping_need_date: '2',
            shopping_need_memo: '0',
          },
          origin_area_info: {
            id: '21',
            name: '加拿大',
            en_code: 'CAN',
            country_code: '124',
            customs_code: '',
            logo_url: 'http://oss.aliyuncs.com/wifenxiao/16/79/6/2020-03/5e6853f09a48a.png',
            is_enable: '1',
            create_time: '1583895536',
          },
          pic_url: 'http://img.wifenxiao.com/16/79/6/2020-12/5fced524ecf0a.jpg@!',
          is_compress: 1,
          group: [null],
          itemPic: '',
          supplier: '0',
          link_item:
            'http://m.wfx.wxfenxiao.com/mb/item/item-detail?sid=6&pid=10472&detailId=4963827&supplier=0&page=1',
          sale_num: '151',
          is_act: true,
          current_price: '259.00',
          discount: '7',
          pre_commission: 38.85,
          up_discount_price: '',
          up_level_name: '',
        },
        {
          cost: null,
          cost_price: '0.00',
          directly_rate: '0.000',
          directly_money: '40.00',
          is_dh_commission: '0',
          is_staff_commission: '0',
          is_store_commission: '0',
          is_dl_commission: '0',
          is_fx_commission: '1',
          category_id: null,
          type: '1',
          item_id: '4963826',
          title: '白桃K',
          status: '1',
          num: 1503,
          original_price: '200.00',
          price: '42.00',
          hide_stock: '1',
          buy_method: '1',
          buy_url: '',
          join_level_discount: '1',
          sales_volume: '410',
          basic_sales: '0',
          is_show_sale: '0',
          buy_need_points: '0',
          is_time_purchase: false,
          new_supplier_id: '0',
          fenxiao_slogan: '',
          sold_out: '1000',
          is_self_support: 1,
          item_config: {
            bar_code: '',
            comm_barcode: '',
            curr_code: '142',
            declare_measure_unit: '',
            ele_title: '',
            hs_code: '',
            insured_fee: '0',
            is_allow_dhs_virtual_less: '0',
            is_dhs_virual_stock: '3',
            is_store_serve_award: '0',
            item_agreement_name: '',
            item_agreement_prompt: '',
            item_labels: '天下无贼',
            item_purchase_agreement: '3',
            i_e_flag: 'I',
            kuajing_type: '0',
            origin_area: '21',
            production_marketing_country: '156',
            product_record_no: '',
            security_code_jump: 'www.baidu.com',
            security_code_jump_word: '',
            shopping_date_end: '',
            shopping_date_hint: '',
            shopping_date_name: '',
            shopping_date_range: '0',
            shopping_date_start: '',
            shopping_day_quota: '',
            shopping_day_quota_type: '1',
            shopping_memo_hint: '',
            shopping_need_date: '2',
            shopping_need_memo: '0',
          },
          origin_area_info: {
            id: '21',
            name: '加拿大',
            en_code: 'CAN',
            country_code: '124',
            customs_code: '',
            logo_url: 'http://oss.aliyuncs.com/wifenxiao/16/79/6/2020-03/5e6853f09a48a.png',
            is_enable: '1',
            create_time: '1583895536',
          },
          pic_url: 'http://img.wifenxiao.com/16/79/6/2020-12/5fced524ecf0a.jpg@!',
          is_compress: 1,
          group: [null],
          itemPic: '',
          supplier: '0',
          link_item:
            'http://m.wfx.wxfenxiao.com/mb/item/item-detail?sid=6&pid=10472&detailId=4963826&supplier=0&page=1',
          sale_num: '410',
          is_act: true,
          current_price: '60.00',
          discount: '7',
          pre_commission: 0,
          up_discount_price: '',
          up_level_name: '',
        },
      ],
    })

    /**
     * 排序搜索
     */
    const sortSearchFn = (data: any) => {
      if (data.prop == 'listStyle') {
        state.listStyle = !state.listStyle
        return false
      }
      if (data.prop == 'price') {
        state.postData.order = data.sort == 'ascending' ? 'priceUp' : 'priceDown'
      } else if (data.prop == 'sales') {
        state.postData.order = data.sort == 'ascending' ? 'salesUp' : 'salesDown'
      } else if (data.prop == 'new') {
        state.postData.order = data.sort == 'ascending' ? 'newUp' : 'newDown'
      } else if (data.prop == 'default') {
        // TODO 增加默认判断 清空order
        state.postData.order = null
      }
      // TODO 排序搜索每次都重置为1
      state.postData.p = 1
      console.log(data, 'sortSearchFn')
      // getItemListPost()
    }

    const refData: any = toRefs(state)
    return {
      ...refData,
      sortSearchFn,
    }
  },
  components: {
    headSearch,
    sortSearch,
    itemWrapper,
  },
})

// import headSearch from './headSearch.vue'
// import sortSearch from './sortSearch.vue'
// import itemWrapper from './itemWrapper.vue'
// import { getItemList, getItemCats } from '@/api/item/item'
// import { Tab, Tabs } from 'vant'
// Vue.use(Tab)
// Vue.use(Tabs)
// export default {
//   name: 'index',
//   components: {
//     headSearch,
//     sortSearch,
//     itemWrapper,
//   },
//   data() {
//     return {
//       isShowNoData: false,
//       activeOne: 0,
//       activeTwo: 0,
//       activeThree: 0,
//       listHeaderH: 0,
//       postData: {
//         title: '',
//         p: 1,
//         order: undefined, // priceUp,priceDown,salesDown,salesUp,newUp,newDown
//         new: undefined,
//         ltime: undefined,
//         crowd: undefined,
//         class_id: undefined,
//         miao: undefined,
//         cycle: undefined,
//         supplier: undefined, // 供应商id
//         couponId: undefined, // 优惠券id
//         package: undefined,
//         auction: undefined,
//       },
//       itemList: [], // 商品列表
//       new_supplier_info: [],
//       cateListOne: [],
//       cateListTwo: [],
//       cateListThree: [],
//       top_class_id: '',
//       typeList: [
//         { label: '默认', active: true, type: 0, prop: 'default', sort: 'none' },
//         { label: '价格', active: false, type: 1, prop: 'price', sort: '' },
//         { label: '销量', active: false, type: 2, prop: 'sales', sort: '' },
//         { label: '新品', active: false, type: 3, prop: 'new', sort: '' },
//         { label: '', active: false, type: 5, prop: 'listStyle', sort: 'none' },
//       ],
//       listStyle: false,
//       otherInfo: {
//         earn_alias: '',
//         is_open_kuajing: '',
//         is_display_original_price: '',
//       },
//       vanList: {
//         loading: false,
//         error: false,
//         finished: false,
//       },
//       aftDetailedList: false, // 阿凡提清单定制
//       aftList: [
//         { label: '默认', active: true, type: 0, prop: 'default', sort: 'none' },
//         { label: '价格', active: false, type: 1, prop: 'price', sort: '' },
//         { label: '销量', active: false, type: 2, prop: 'sales', sort: '' },
//         { label: '新品', active: false, type: 3, prop: 'new', sort: '' },
//       ],
//     }
//   },
//   methods: {
//     openLink(link) {
//       this.$JumpLink(this, link)
//     },
//     /**
//      * 点击一级分类
//      */
//     handleClickCateOne(index) {
//       const cateListOne = this.cateListOne
//       if (cateListOne[index].child && cateListOne[index].child.length > 0) {
//         this.cateListTwo = cateListOne[index].child
//       } else {
//         this.cateListTwo = []
//         this.cateListThree = []
//       }
//       this.postData.class_id = cateListOne[index].class_id || ''
//       this.postData.p = 1
//       this.getItemListPost()
//     },
//     /**
//      * 点击二级分类
//      */
//     handleClickCateTwo(index) {
//       // console.log(index)
//       const cateListTwo = this.cateListTwo
//       if (cateListTwo[index].child && cateListTwo[index].child.length > 0) {
//         this.cateListThree = cateListTwo[index].child
//       } else {
//         this.cateListThree = []
//       }
//       this.itemList = []
//       this.postData.class_id = cateListTwo[index].class_id
//       this.postData.p = 1
//       this.getItemListPost()
//     },
//     /**
//      * 点击三级分类
//      */
//     handleClickCateThree(index) {
//       const cateListThree = this.cateListThree
//       this.postData.class_id = cateListThree[index].class_id
//       this.postData.p = 1
//       this.itemList = []
//       this.getItemListPost()
//     },
//     /**
//      * 获取商品分类
//      */
//     getItemCatsPost() {
//       getItemCats().then((res) => {
//         if (res.status === 1) {
//           const class_lists = res.data.class_lists
//           const obj = { class_name: '全部', class_id: 0 }
//           class_lists.unshift(obj)
//           this.cateListOne = class_lists
//           const classId = this.$route.query.class_id
//           console.log(classId)
//           this.cateListOne.forEach((item, index) => {
//             if (classId == item.class_id) {
//               this.activeOne = index
//               this.cateListTwo = item.child
//               return false
//             }
//             const oneIndex = index
//             if (item.child && item.child.length > 0) {
//               item.child.forEach((itemtwo, indextwo) => {
//                 if (classId == itemtwo.class_id) {
//                   this.activeOne = oneIndex
//                   this.activeTwo = indextwo
//                   this.cateListTwo = item.child
//                   this.cateListThree = itemtwo.child
//                   return false
//                 }
//                 const twoIndex = indextwo
//                 if (itemtwo.child && itemtwo.child.length > 0) {
//                   itemtwo.child.forEach((itemthree, indexthree) => {
//                     if (classId == itemthree.class_id) {
//                       this.activeOne = oneIndex
//                       this.activeTwo = twoIndex
//                       this.activeThree = indexthree
//                       this.cateListTwo = item.child
//                       this.cateListThree = itemtwo.child
//                     }
//                   })
//                 }
//               })
//             }
//           })
//         }
//       })
//     },
//     /**
//      * 获取商品列表
//      */
//     getItemListPost(type) {
//       this.$loadingWrap.show() // 打开loading
//       setTimeout(() => {
//         this.$loadingWrap.close() // 关闭loading
//       }, 5000)
//       if (this.postData.p == 1) {
//         this.vanList.finished = false
//         this.vanList.loading = false
//         this.vanList.error = false
//       }
//       const params = Object.assign({ sid: this.$route.query.sid }, this.postData, true)
//       // TODO 在mounted里面title已经赋值了query的title 不需要再获取了 不然会导致商品列表数据缺少
//       // params.title = this.postData.title ? this.postData.title : this.$route.query.title
//       // 定制-南昌阿凡提电子商务有限公司-搜索添加城市code
//       if (this.$_shop('$_aft_dz', this.$route.query.sid)) {
//         // this.$route.query.list == 1 常用清单类型商品列表
//         if (this.$route.query.list == 1) {
//           params.is_common_list = 1
//           this.aftDetailedList = true
//           document.title = '清单列表'
//         } else {
//           params.city_id = Store.fetchLocal('adcode') ? Store.fetchLocal('adcode') : 0
//           params.city_name = Store.fetchLocal('cityName')
//           console.log(Store.fetchLocal('cityName'))
//         }
//       }
//       getItemList(params).then((res) => {
//         this.$loadingWrap.close()
//         this.vanList.loading = false
//         if (res.status === 1) {
//           const resData = res.data.lists
//           if (resData.length <= 0) {
//             if (this.$refs.waterfalls) {
//               this.$refs.waterfalls.waterfallOver()
//             }
//             this.vanList.finished = true
//           }
//           resData.forEach((item) => {
//             if (item.is_compress == 1) {
//               item.src = `${item.pic_url}w640`
//             } else {
//               item.src = item.pic_url
//             }
//             /* if (item.pic_url.indexOf('@!') != -1) {
//                 item.src = `${item.pic_url}480x480`
//               } else {
//                 item.src = item.pic_url
//               } */
//           })

//           if (res.data) {
//             if (this.postData.p == 1) {
//               window.scrollTo(0, 0)
//               this.otherInfo.earn_alias = res.data.earn_alias
//               this.otherInfo.is_open_kuajing = res.data.is_open_kuajing
//               this.otherInfo.is_display_original_price = res.data.is_display_original_price
//               this.otherInfo.point_name = res.data.point_name || '积分'
//               this.itemList = resData
//               if (this.itemList.length == 0) {
//                 this.isShowNoData = true
//               } else {
//                 this.isShowNoData = false
//               }
//             } else {
//               this.itemList = this.itemList.concat(resData)
//             }
//             // 搜索显示供应商店铺
//             if (type == 'search') {
//               this.new_supplier_info = res.data.new_supplier_info || []
//             } else {
//               // this.new_supplier_info = []
//             }
//           }
//           /* if (type === 'search') {
//               this.itemList = resData
//             } else {
//               this.itemList = this.itemList.concat(resData)
//             } */
//         }
//         // Store.saveLocal('videoList', this.itemList)
//         // Store.saveLocal('videoPage', this.postData.p)
//       })
//     },
//     /**
//      * 顶部的搜索抛出
//      */
//     refreshFn() {
//       this.postData.p = 1
//       this.getItemListPost('search')
//     },
//     /**
//      * 排序搜索
//      */
//     sortSearchFn(data) {
//       if (data.prop == 'listStyle') {
//         this.listStyle = !this.listStyle
//         // console.log(9999)
//         return false
//       }
//       if (data.prop == 'price') {
//         this.postData.order = data.sort == 'ascending' ? 'priceUp' : 'priceDown'
//       } else if (data.prop == 'sales') {
//         this.postData.order = data.sort == 'ascending' ? 'salesUp' : 'salesDown'
//       } else if (data.prop == 'new') {
//         this.postData.order = data.sort == 'ascending' ? 'newUp' : 'newDown'
//       } else if (data.prop == 'default') {
//         // TODO 增加默认判断 清空order
//         this.postData.order = null
//       }
//       // TODO 排序搜索每次都重置为1
//       this.postData.p = 1
//       this.getItemListPost()
//     },
//     /**
//      * 滑到底部加载
//      */
//     getData() {
//       this.postData.p++
//       this.getItemListPost()
//     },
//     init() {
//       this.getItemCatsPost()
//       this.getItemListPost('search')
//     },
//     scrollFn() {
//       if (
//         window.scrollY >
//         this.listHeaderH - document.querySelector('.itemList-search').offsetHeight
//       ) {
//         document.querySelector('.itemList-sort').style.position = 'fixed'
//         document.querySelector('.itemList-sort').style.top =
//           document.querySelector('.itemList-search').offsetHeight + 'px'
//       } else {
//         document.querySelector('.itemList-sort').style.position = 'relative'
//         document.querySelector('.itemList-sort').style.top = 0
//       }
//     },
//   },
//   mounted() {
//     this.postData.new = this.$route.query.new
//     this.postData.ltime = this.$route.query.ltime
//     this.postData.crowd = this.$route.query.crowd
//     this.postData.class_id = this.$route.query.class_id
//     this.postData.miao = this.$route.query.miao
//     this.postData.cycle = this.$route.query.cycle
//     this.postData.supplier = this.$route.query.supplier
//     this.postData.couponId = this.$route.query.couponId
//     this.postData.package = this.$route.query.package
//     this.postData.auction = this.$route.query.auction
//     this.postData.title = this.$route.query.title
//     this.init()
//     // 监听滚动距离 设置分类顶部距离
//     this.$nextTick(() => {
//       window.addEventListener('scroll', this.scrollFn)
//     })
//   },
//   watch: {
//     itemList(val) {
//       // console.log(val)
//       if (val.length <= 0) {
//         $('body').addClass('bg_white')
//       } else {
//         $('body').removeClass('bg_white')
//       }
//     },
//   },
//   /* watch: {
//       cateListOne(val) {
//         if (val.length > 0) {
//           $('.list-header').css({
//             'height': '120px'
//           })
//           // this.listHeaderH = '220px'
//         }
//       },
//       cateListTwo(val) {
//         if (val.length > 0) {
//           // this.listHeaderH = '220px'
//         }
//         console.log(val)
//       }
//     }, */
//   updated() {
//     // 分开计算 避免切换类型时高度计算错误
//     const searchHeight = document.querySelector('.itemList-search')
//       ? document.querySelector('.itemList-search').offsetHeight
//       : 0
//     const shopHeight = document.querySelector('.searchShop')
//       ? document.querySelector('.searchShop').offsetHeight
//       : 0
//     const cateHeight = document.querySelector('.cate')
//       ? document.querySelector('.cate').offsetHeight
//       : 0
//     const sortHeight = document.querySelector('.itemList-sort')
//       ? document.querySelector('.itemList-sort').offsetHeight
//       : 0
//     this.listHeaderH = searchHeight + shopHeight + cateHeight + sortHeight
//   },
//   activated() {
//     window.addEventListener('scroll', this.scrollFn)
//   },
//   deactivated() {
//     window.removeEventListener('scroll', this.scrollFn) // 移除监听
//   },
//   beforeDestroy() {
//     window.removeEventListener('scroll', this.scrollFn) // 移除监听
//   },
// }
</script>

<style lang="scss">
.list-wrapper {
  .van-tabs--line .van-tabs__wrap {
    height: 72px;
  }
  .van-tab {
    padding: 0 30px;
    line-height: 72px;
    font-size: 26px;
    color: #333;
    &.van-tab--active {
      font-size: 28px;
      font-weight: bold;
    }
  }
  .van-tab__text--ellipsis {
    // white-space: nowrap;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .van-tabs__line {
    background: -webkit-linear-gradient(to right, rgba(242, 11, 34, 1), rgba(242, 11, 34, 0.1));
    background: linear-gradient(to right, rgba(242, 11, 34, 1), rgba(242, 11, 34, 0.1));
  }
  .van-hairline--top-bottom,
  .van-hairline-unset--top-bottom {
    &::after {
      border-width: 0;
    }
  }
}
</style>

<style scoped lang="scss">
@import 'src/assets/styles/mixin';
/* @import "src/styles/mixin";
  .list-wrapper{
    &-app{
      background: linear-gradient(to bottom, #fff, #fffeff 5%, #f5f5f5 50%, #f5f5f5);
      border-radius: 16px 16px 0 0;
    }
  } */
.list-wrapper {
  .header-fixed {
    z-index: 1003;
    width: 100%;
    // background:#fff;
    padding-top: 112px;
    .itemList-search {
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 101;
    }
  }
  .cate {
    max-width: 750px;
    margin: 0 auto;
  }
  .sort {
    width: 100%;
    padding: 10px 0;
    background: #fff;
    max-width: 750px;
    margin: 0 auto;
    z-index: 100;
  }
  //搜索结果店铺
  .searchShop {
    padding: 20px 30px;
    background: #fff;
    &-box {
      display: flex;
      overflow-x: scroll;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
    }
    .item {
      width: 320px;
      flex-basis: 320px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      margin-right: 20px;
      background: #f7f7f7;
      padding: 10px 12px;
      border-radius: 4px;
    }
    .shop-log {
      overflow: hidden;
      width: 120px;
      height: 120px;
      margin-right: 14px;
      border-radius: 6px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .shop-info {
      flex: 1;
      .shop-name {
        width: 166px;
        font-size: 24px;
        color: #333;
        font-weight: bold;
        margin-bottom: 14px;
        line-height: 32px;
        @include showEllipsis;
      }
      .shop-detail {
        font-size: 20px;
        // line-height:20px;
        color: #999;
        font-weight: 500;
        line-height: 28px;
        .all {
          margin-bottom: 8px;
        }
      }
    }
    .shop-to {
      .btn {
        height: 46px;
        padding: 0 22px;
        border-color: #e71f19;
        font-size: 24px;
        color: #f11227;
      }
    }
  }
}
</style>
