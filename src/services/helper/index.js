export const aboutOrg = {
  name: "Alfraganus university",
  address: "Yunusobod",
  phone: "+998600010203",
  img: "https://avatars.mds.yandex.net/i?id=19481809253e78e96cc161906873a9b59b258ef8-5583420-images-thumbs&n=13",
  about:
    "Alfraganus universiteti 2022-yilda Toshkent shahrida tashkil etilgan. Uning Iqtisod, Filologiya, Pedagogika, Ijtimoiy fanlar, Raqamli texnologiyalar, Tibbiyot, Jismoniy tarbiya va sport, Turizm fakultetlari va ular tarkibida 37 ta yo'nalishlari mavjud. Universitetda magistratura bosqichi ham mavjud bo'lib, 10 ta yo'nalishlarda talabalarni qabul qiladi. Alfraganus universiteti o'zbek qomusiy olimi Ahmad Al-Farg'oniy nomiga Alfraganus deb nomlangan. Al-Farg'oniy Yevropada aynan shu nom bilan mashhur bo'lgan va oydagi kraterlarning biri ham olim sharafiga  shunday atalgan. Universitetning o'z klinikasi mavjud. Shuningdek, universitet xalqaro ilmiy jurnali va talabalar gazetasiga ega. Universitetda tajribali professor-o'qituvchilar dars beradi. Alfraganus universiteti dunyoning 20 ga yaqin rivojlangan davlatlari, xususan, oliy taʼlim muassasalari bilan hamkorlik aloqalarini yo'lga qo'ygan. Jumladan ayni kunlarda Amerika, Turkiya, Yaponiya, Xitoy, Koreya bilan hamkorlikda samarali faoliyat olib bormoqda. Universitetda bir martalik rektor stipendiyasi hamda ijodkor va ixtirochi talabalar uchun “Al-Farg'oniy” stipendiyasi, ko'krak nishoni taʼsis etilgan. Eng faol va tashabbuskor talabalarga grant ajratilgan bo'lib, bir yil namunali o'qigan talaba keyingi yil kontrakt to'lashdan ozod etiladi. ",
};

export const getCookie = (name) => {
  let elements = document.cookie.split("; ");
  let myItem = undefined

  elements.map(itm=>{
    let elem = itm.split("=")
    if(elem[0]===name) myItem = elem[1]
  })
  return myItem
};
