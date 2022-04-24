export interface Item {
  _id: string;
  pk: string;
  uk: string;
  attrs: {
    category: string
  },
  createdAt: string,
  item: {
    productId: string
    vendorId: null
    link: string
    thumbnail: string
    name: string
    price: number
    reviewCounts: number
  },
}

export const items = (count: number) => {
  return Array.from(Array(count)).map<Item>((_, i) => ({
    _id: `${i}`,
    pk: '2022_04_21__coupang',
    uk: `${Math.floor(Math.random() * 20)}`,
    attrs: {
      category: '국내산 소고기'
    },
    createdAt: new Date().toLocaleDateString(),
    item: {
      productId: '1092579590',
      vendorId: null,
      link: '/vp/products/1092579590?itemId=2048979888&vendorItemId=70048321004&sourceType=CATEGORY&categoryId=464463',
      thumbnail: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/216147526303550-c5103ebe-fd49-4917-8b64-983aa2796cd7.jpg',
      name: '수원축산농협 한우 제비추리 1등급 구이용 (냉장), 300g, 1개',
      badge: '',
      price: Math.floor(Math.random() * 50000),
      reviewCounts: Math.floor(Math.random() * 10000)
    },
    updatedAt: new Date()
  }))
}
