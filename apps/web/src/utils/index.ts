/*
 * 商品的价格处理 整数位放大
 * @price: 价格
 * @classNum: 自定义class
 */
export function scaleGoodsPrice(price: any, className: any): string {
  if (!price) price = '0.00'
  const priceInt: any = parseInt(price)
  const priceFloat: any = parseFloat((price - priceInt).toString()).toFixed(2)
  const priceBack: any = priceFloat.slice(2)
  return `<div class='price-scale fontAliBaba ${
    className || ''
  }'><span class='unit'>￥</span><span class='num-font'>${priceInt}.</span><span class='num-back'>${priceBack}</span></div>`
}
