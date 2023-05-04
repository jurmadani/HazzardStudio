interface ServiciiProps {
    id: number;
    NumeServiciu: string;
    pret?: number;
    Icon: any;
}[]

export const Servicii: ServiciiProps[] = [
    {
        id: 1,
        NumeServiciu: "Tuns",
        pret: 80,
        Icon: require('../assets/images/TunsIcon.png')
    },
    {
        id: 2,
        NumeServiciu: "Tuns + barba",
        pret: 95,
        Icon: require('../assets/images/BarbaIcon.png')
    },
    {
        id: 3,
        NumeServiciu: "Vopsit",
        Icon: require('../assets/images/VopsitIcon.png')
    },
    {
        id: 4,
        NumeServiciu: "Mai mult",
        Icon: require('../assets/images/MoreIcon.png')
    }
]