export interface ParkingFeeRequest {
    id: string;
    initialValidityDate: string;
    finalValidityDate: string;
    fullHourPrice: number;
    aditionalHourPrice: number;
}
