export interface productByEventType {
  eventId: number;
  eventName: string;
  productList: productInfoType[];
}

export interface productInfoType {
  productId: number;
  productName: string;
  productPrice: number;
  productThumbnailImage: string;
  reviewScore: number;
  reviewCount: number;
}
