export interface ProgramariCompletedProps {
    id: number;
    NumeBarber: string;
    Data: string;
    Ora: string;
    Serviciu: string;
    ImagineBarber: any;
}

export const ProgramariCompletedData: ProgramariCompletedProps[] = [
    {
        id: 1,
        NumeBarber: "Gratian Petrut",
        Data: "8 Mai, 2023",
        Ora: "12:45",
        Serviciu: "Tuns",
        ImagineBarber: require('../assets/images/GratianPetrut.png')
    },
    {
        id: 2,
        NumeBarber: "Gratian Petrut",
        Data: "12 Aprilie, 2023",
        Ora: "12:45",
        Serviciu: "Tuns",
        ImagineBarber: require('../assets/images/GratianPetrut.png')
    },
    {
        id: 3,
        NumeBarber: "Ovidiu Virlan",
        Data: "23 Februarie, 2023",
        Ora: "15:45",
        Serviciu: "Tuns + barba",
        ImagineBarber: require('../assets/images/OvidiuVirlan.png')
    },
    {
        id: 4,
        NumeBarber: "Dani Gaidos",
        Data: "19 Decembrie, 2022",
        Ora: "10:00",
        Serviciu: "Tuns + barba",
        ImagineBarber: require('../assets/images/DaniGaidos.png')
    },
    {
        id: 5,
        NumeBarber: "Ovidiu Virlan",
        Data: "2 Decembrie, 2022",
        Ora: "13:45",
        Serviciu: "Tuns",
        ImagineBarber: require('../assets/images/OvidiuVirlan.png')
    },

]