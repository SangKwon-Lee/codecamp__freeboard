export interface PaymentModalProps {
  handleIsPoint: () => void;
  isPoint: boolean;
  handlePoint: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  point: number;
  pointText: string;
  isPointBtn: boolean
  onClickPayment: () => void;
  handleIsPaymentClose: () => void;
}
