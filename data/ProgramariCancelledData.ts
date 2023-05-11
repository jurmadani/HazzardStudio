export interface ProgramariCancelledProps {
    id: number;
    NumeBarber: string;
    Data: string;
    Ora: string;
    Serviciu: string;
    ImagineBarber: any;
}

export const ProgramariCancelledData: ProgramariCancelledProps[] = [
    {
        id: 1,
        NumeBarber: "Gratian Petrut",
        Data: "2 Mai, 2022",
        Ora: "12:45",
        Serviciu: "Tuns",
        ImagineBarber: require('../assets/images/GratianPetrut.png')
    },
    {
        id: 2,
        NumeBarber: "Gratian Petrut",
        Data: "12 Aprilie, 2022",
        Ora: "12:45",
        Serviciu: "Tuns",
        ImagineBarber: require('../assets/images/GratianPetrut.png')
    },

]