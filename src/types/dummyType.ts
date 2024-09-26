export interface eventDatasType {
  id: string;
  label: string;
}

export interface eventDatasResponseType {
  HttpStatus: string;
  code: number;
  message: string;
  data: eventDatasType[];
}
