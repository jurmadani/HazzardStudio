interface SlideInterface {
  id: number;
  title: string;
  description: string;
  animation: any;
  image: any;
}

const OnBoardingScreenSlides: SlideInterface[] = [
  {
    id: 1,
    title: "Noua aplicatie Hazzard",
    description:
      "Descoperă noua aplicație, design modern și interfață simplă, perfect pentru clienții noștri!",
    animation: null,
    image: null,
  },
  {
    id: 2,
    title: "Functionalitati noi",
    description:
      "Acum poți plăti rapid și ușor cu cardul direct din aplicația Hazzard!",
    animation: require("../assets/animations/ApplePayAnimation.json"),
    image: null,
  },
  {
    id: 3,
    title: "Hai sa incepem",
    description:
      "Ai posibilitatea să-ți creezi un cont sau să te autentifici cu Apple sau Google si sa poți vedea istoricul tunsorilor tale!",
    animation: require("../assets/animations/LoginAnimation.json"),
    image: null,
  },
];

export default OnBoardingScreenSlides;
