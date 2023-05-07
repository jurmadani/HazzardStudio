interface PaymentProps {
    id: number;
    NumePayment: string;
    Icon: any;
}[]

export const PaymentMethods: PaymentProps[] = [
    {
        id: 1,
        NumePayment: "Card",
        Icon: require('../assets/images/CardIcon.png')
    },
    {
        id: 2,
        NumePayment: "Cash",
        Icon: require('../assets/images/CashIcon.png')
    },

]