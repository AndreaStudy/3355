export interface commonResType<T> {
  HttpStatus: string;
  isSuccess: boolean;
  code: number;
  message: string;
  data?: T;
  result: T;
}

export interface infiniteResultType<T> {
  content: T;
  nextCursor: number | null;
  hasNext: boolean;
  pageSize: number;
  page: number;
}

// user
export interface userDataType {
  accessToken: string;
  name: string;
  uuid: string;
  userId: string;
  registered?: boolean;
  email?: string;
}

// 이용 약관에 관한 정보 타입
export interface signUpIntroDataType {
  id: string;
  label: string;
}

// 주문/배송에 관한 정보 타입
export interface orderDeliveryDataType {
  id: string;
  value: number;
}

// 쿠폰에 관한 정보 타입
export interface couponDataType {
  couponId: string;
  discount: number;
  available: boolean;
  couponTitle: string;
  startDate: string;
  endDate: string;
  condition: string;
}

// 배송지에 관한 정보 타입
export interface deliveryDataType {
  deliveryId: string;
  nickname: string | null;
  receiver: string;
  postNumber: string;
  address: string;
  detailAddress: string;
  phone1: string;
  phone2: string | null;
  message: string | null;
  baseAddress: boolean;
}

// 내 주문내역 정보 타입
export interface myOrderDataType {
  id: number;
  address: string;
  detailAddress: string;
  userName: string;
  productQuantity: number;
  totalAmount: number;
  orderStatus: string;
  phone1: string;
}

// 내 리뷰에 관한 정보 타입
export interface myReviewDataType {
  content: string;
  reviewUuid: string;
  reviewScore: number;
  productUuid: string;
  authorName: string;
  regDate: string;
  modDate: string;
}

// 내 리뷰에 관한 Res 타입
export interface myReviewResType {
  HttpStatus: string;
  code: number;
  message: string;
  data: myReviewDataType;
}

// 상품 기본 정보 타입
export interface productBasicDataType {
  productName: string;
  productDescription: string[];
  productInfo: string;
}

export interface productBasicDataResType {
  productName: string;
  productDescription: string;
  productInfo: string;
}

// 상품UUID로 상품 가격 정보 타입
export interface productPriceDataType {
  price: number;
}

// 상품UUID로 할인율 정보 타입
export interface productDiscountDataType {
  discountType: string;
  discountValue: number;
}

// 상품 UUID에 대한 전체 리뷰 Score, Count:
export interface productReviewSummaryDataType {
  reviewscoreAvg: number;
  reviewcount: number;
}

// UUID로 이미지 정보 타입
export interface imageDataType {
  s3url: string;
  imageName: string;
  thumbnailPath: string | null;
  imageUuid: string;
  otherUuid: string | null;
}

// 카테고리 데이터 타입
export interface topCategoryDataType {
  id: number;
  topCategoryName: string;
}

export interface middleCategoryDataType {
  id: number;
  middleCategoryName: string;
}

export interface bottomCategoryDataType {
  id: number;
  bottomCategoryName: string;
}

// 상품 uuid만
export interface productUuidDataType {
  productUuid: string;
}

// 상품 요약 정보 (상세 페이지 진입 전 미리 보여주는 데이터)
export interface productInfoDataType {
  productUuid: string;
  productName: string;
  productDescription: string[];
  productInfo: string;
  price: number;
  discountType?: string;
  discountValue?: number;
  reviewscoreAvg: number;
  reviewcount: number;
  image: imageDataType;
}

export interface reviewDataType {
  content: string;
  reviewUuid: string;
  reviewScore: number;
  productUuid: string;
  authorName: string;
  regDate: string;
  modDate: string;
  images?: imageDataType[];
}

export interface reviewItemDataType {
  content: string;
  reviewScore: number;
  authorName: string;
  regDate: string;
  modDate: string;
}

export interface productReviewUuidDataType {
  reviewUuid: string;
  productUuid: string;
}

// 찜하기 관련
export interface wishListDataType {
  id: number;
  uuid: string;
  productUuid: string;
  liked: boolean;
}

export interface likedTFDataType {
  liked: boolean;
}

// 이벤트 (기획전) 관련
export interface eventUuidDataType {
  promotionUuid: string;
}

export interface eventNameDataType {
  promotionName: string;
}

export interface eventItemDataType {
  eventName: string;
  image: imageDataType;
}

export interface findIdDataType {
  userId: string;
  message: string;
}

export interface trendTagDataType {
  tagName: string;
}

export interface findPwDataType {
  accessToken: string;
  nickname: string;
  user: boolean;
}

export interface totalPriceAndDiscountDataType {
  totalDiscount: number;
  totalPrice: number;
}

export interface shippingProductDataType {
  basicInfo: productBasicDataType;
  price: productPriceDataType;
  image: imageDataType;
}

export interface OrderDataType {
  aid: string;
  tid: string;
  cid: string;
  partner_order_id: string;
  partner_user_id: string;
  payment_method_type: string;
  amount: {
    total: number;
    taxFree: number;
    tax: number;
    point: number;
    discount: number;
    greenDeposit: number;
  };
  tax_free_amount: null;
  item_name: string;
  quantity: number;
  created_at: string;
  approved_at: string;
  payload: null;
}
