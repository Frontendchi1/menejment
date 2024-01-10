// App.jsx
import React, { useState } from 'react';
import Question from './Question';

const questionsAndAnswers = [
  { question: ' Boshqariruvchi – bu?', answer: '= boshqarish ob’ekti   ' },
  { question: 'Menejment ~ bu:  ', answer: '= boshqaruv hokimiyati va san’atidir  ' },
  { question: 'Menejment fani – bu boshqaruvchiga?  ', answer: '= hammasi to‘g‘ri.  ' },
  { question: 'Menejment ob’ekti bo‘lib?  ', answer: '= boshqariluvchi tizim hisoblanadi  ' },
  { question: 'Menejment sub’ekti bo‘lib?  ', answer: '= boshqaruv organlari hisoblanadi  ' },
  { question: 'Quyida qayd qilingan fanlarning qaysi biri menejment fani bilan uzviy bog‘langan?  ', answer: '=hammasi to‘g‘ri  ' },
  { question: 'Kimlar ilmiy menejmentning (1885~1920 y.y.) namoyondalari bo‘lgan?  ', answer: '= Teylor F, Emerson G, Gilbertlar va boshqalar  ' },
  { question: 'Kimlar mumtoz yoki ma’muriy menejmentning (1920~1950 y.y.) namoyondalari bo‘lgan?  ', answer: '= Fayol A, Veber M va boshqalar  ' },
  { question: 'Kimlar «Inson munosabatlari» maktabi (1950 yildan xozirgachning namoyandalari bo‘lgan?    ', answer: '= Meyo E, Laykert R va boshqalar  ' },
  { question: 'F.Teylorning diqqat markazida, eng avalo?  ', answer: '= yollanma ishchilar mehnatining unumdorligini oshirishda g‘oyatda samarador va maqbul   ' },
  { question: 'G.Emersonning diqqat markazida, eng avvalo?  ', answer: '= ikki prinsip, ya’ni aniq qo‘yilgan maqsad va g‘oyalar, shuningdek oqil va sog‘lom fikr turadi  ' },
  { question: 'A.Fayolning diqqat markazida, eng avvalo?  ', answer: '= 14 tadan iborat boshqarish prinsiplari turadi  ' },
  { question: 'X (iks va U (igrek) nazariyasining namoyondasi kim?  ', answer: '= amerikalik olim D. Mak~Gregor;  ' },
  { question: 'X (iks nazariyasiga ko‘ra yollanma hodim?    ', answer: '= tabiatan yalqov bo‘ladi  ' },
  { question: 'U (igrek) nazariyasiga ko‘ra yollanma xodim?  ', answer: '= tabiatan faol, uddaburon, tashabbuskor bo‘ladi  ' },
  { question: 'X (iks nazariyasi sharoitida menejer?    ', answer: '= xodimlarni doimo majburlash, nazorat qilib turishi zarur  ' },
  { question: 'U (igrek) nazariyasi sharoitida menejer?  ', answer: '= xodimlarni rag‘batlantirib tursa kifoya  ' },
  { question: 'Sohibqiron Amir Temur davlat va jamiyatni boshqarishda nechta ijtimoiy siyosiy guruhga tayangan?  ', answer: '12ta' },
  { question: 'Menejer – bu:  ', answer: '= maxsus tayyorgarlik ko‘rgan, boshqarishning sir asrorlarini, qonun qoidalarini puxta egallagan malakali mutaxassisdir  ' },
  { question: 'Menejment fanining predmeti?   ', answer: '= boshqaruvning barcha darajalarida boshqaruv munosabatlarini, uslublarini va qonuniyatlarini o‘rgatadi   ' },
  { question: 'Boshqarishning sir~asrorlarini ilmiy asosda o‘rganishda menejment fani quyidagi usullarning qaysi birini qo‘llaydi?  ', answer: '= ko‘zatish usuli   ' },
  { question: 'Boshqariluvchi ob’ekt boshqa ob’ktlar bilan o‘zaro bog‘lanishda va aloqadorlikda o‘rganilmoqchi bo‘lsa, u holda qaysi usuldan foydalanadi?  ', answer: '= kompleksli yondoshuv usulini qo‘llaydi  ' },
  { question: 'Boshqaruv jarayonida maqbul qarorlar qabul qilish maqsadida menejment fani quyidagi usullarning qaysi birini qo‘llaydi?  ', answer: '= iqtisodiy matematik yondoshuv usuli  ' },
  { question: 'Kimlar miqdoriy tizimli yoki zamonaviy menejmentning namoyondalari bo‘lgan?  ', answer: '= E. Deyl, G. Saymon, P. Druker va boshqalar  ' },
  { question: 'Insoniy munosabatlar maktabi?  ', answer: '= ishchi~bu fikrsiz robot emas, degan g‘oyani ilgari surgan maktabdir  ' },
  { question: 'Tizimli yoki zamonaviy menejmentning mohiyati nimada?  ', answer: '= hammasi to‘g‘ri   ' },
  { question: 'Zamonaviy menejmentning yondoshuvlari qaysilar?  ', answer: '= tizimli, vaziyatli, funksional, miqdoriy yondoshuv  ' },
  { question: 'Quyidagilardan qaysi biri menejmentning tamoyillari hisoblanadi?  ', answer: '= iyerarxiya tamoyili  ' },
  { question: 'Bozor iqtisodiyoti sharoitida O‘zbekistonda davlat quyidagi qaysi tamoyillarga asoslanib boshqariladi?  ', answer: '= barcha javoblar to‘g‘ri  ' },
  { question: 'Iqtisodiy munosabatlarni demokratiyalash tamoyili deganda:  ', answer: '= monopollashgan iqtisoddan erkin iqtisodga o‘tish tushuniladi  ' },
  { question: 'Milliy xavfsizlikni ta’minlash tamoyili deganda:  ', answer: '= respublikani dunyo hamjamiyatiga kirish sur’atlarini tezlashtirish  ' },
  { question: 'Demokratiya tamoyili deganda:  ', answer: '= insonnni o‘z xohish irodasini erkin bildirishi hamda uni amalga oshirish  ' },
  { question: 'Yuksak ma’naviyat tamoyili:  ', answer: '= o‘zini va o‘z xalqining vatanini qadru qimmati, or~nomusini anglab, uni ximoya qilish   ' },
  { question: 'Maqsad – bu  ', answer: '= noto‘g‘ri javob yo‘q.   ' },
  { question: 'Boshqarish pog‘ona (daraja)lariga qarab maqsadlar qanday turlarga bo‘linadi?  ', answer: '= tuman maqsadlari   ' },
  { question: 'Umumjamiyat miqyosidagi munosabatlarni aks ettirishga qarab maqsadlar qanday guruxlarga bo‘linadi?  ', answer: '= sotsial maqsadlar   ' },
  { question: 'Uzluksiz maqsadlar deganda:  ', answer: '= har kuni qabul qilinadigan va amalga oshiriladigan odatiy maqsadlar tushuniladi  ' },
  { question: 'Innovatsion maqsadlar deganda:  ', answer: '= yangi mahsulotni ishlab chiqarish, yangi texnologiyani joriy qilish bo‘yicha qo‘yiladigan maqsadlar tushuniladi  ' },
  { question: '“Maqsadlar shajarasi” deganda:   ', answer: '= maqsadlar bilan ularga erishish vositalari o‘rtasidagi aloqanig grafik tasviri tushuniladi.  ' },
  { question: 'Maqsadli boshqaruv usulining birinchi pog‘onasida:   ', answer: '= korxonaning uzoq muddatli va strategik maqsadlari aniqlanadi  ' },
  { question: 'Boshqaruv funksiyasi deganda:   ', answer: '= U yoki bu ob’ektni boshqarishga oid aniq vazifalarni hal etishga qaratilgan faoliyat tushuniladi  ' },
  { question: 'Quyida qayd qilinganlarning qaysi biri boshqarishning asosiy funksiyalari hisoblanadi?  ', answer: '= noto‘g‘ri javob yo‘q.  ' },
  { question: 'Boshqarish faoliyati turlariga qarab boshqarish funksiyalari:   ', answer: '= noto‘g‘ri javob yo‘q. ' },
  { question: 'Quyida qayd qilingan funksiyalarning qaysi biri boshqarishning iqtisodiy funksiyasiga kiradi?  ', answer: '= mablag‘larning doiraviy aylanishini amalga oshirish  ' },
  { question: 'Quyida qayd qilingan funksiyalarning qaysi biri boshqarishning iqtisodiy funksiyasiga kiradi?  ', answer: '= marketing xizmatini uyushtirish  ' },
  { question: 'Quyida qayd qilingan funksiyalarning qaysi biri boshqarishning ijtimoiy funksiyasiga kiradi?  ', answer: '= xodimlarning uy~joyga ehtiyojini, ijtimoiy madaniy~ma’naviy ehtiyojlarini qondirish  ' },
  { question: 'Quyida qayd qilingan funksiyalarning qaysi biri boshqarishning ijtimoiy funksiyasiga kiradi?  ', answer: '= mehnat sharoitini yaxshilash  ' },
  { question: 'Quyida qayd qilingan funksiyalarning qaysi biri boshqarishning ma’naviy~ma’rifiy funksiyasiga kiradi?  ', answer: '= xodimlarga halollikni, adolat tuyg‘usini tarbiyalashga xizmat qilish.  ' },
  { question: 'Quyida qayd qilingan funksiyalarning qaysi biri boshqarishning ma’naviy~ma’rifiy funksiyasiga kiradi?  ', answer: '= xodimlarni insoniylik, yaxshilik, mehr~shavqatli bo‘lish ruhida tarbiyalash   ' },
  { question: 'Boshqarish strukturasi deganda?  ', answer: '= boshqarish maqsadlarini amalga oshiruvchi va funksiyalarini bajaruvchi bir~biri bilan bog‘langan turli boshqaruv organlari va bo‘g‘inlarining majmuasi tushuniladi  ' },
  { question: 'Boshqaruv funksiyalari qo‘llanish va foydalanish miqyosiga qarab qanday turlarga bo‘linadi?  ', answer: '= aniq funksiyalar  ' },
  { question: 'Boshqaruv funksiyalari mehnat taqsimotiga qarab qanday turlarga bo‘linadi?  ', answer: '= ijrochilar funksiyalari   ' },
  { question: 'Boshqaruv funksiyalari mehnat taqsimotiga qarab qanday turlarga bo‘linadi?  ', answer: '= rahbar funksiyalariga   ' },
  { question: 'Boshqaruv funksiyalari qo‘llanish va foydalanish miqyosiga qarab qanday turlarga bo‘linadi?  ', answer: '= asosiy funksiyalar  ' },
  { question: 'Tashkiliy strukturalarni hosil qiladigan boshqarish organlari?  ', answer: '= boshqaruv bo‘g‘inlari va bosqichlari shaklida bo‘ladi  ' },
  { question: 'Agar boshqarishning hamma funksiyalari korxona rahbari qo‘lida to‘planib barcha quyi rahbarlar va ishlab chiqarish yacheykalari unga bo‘ysinsa, u holda boshqarishning bunday tashkiliy strukturasi:  ', answer: '= chiziqli(pog‘onali) struktura ko‘rinishida bo‘ladi  ' },
  { question: 'Chiziqli shtabli struktura:  ', answer: '= har bir chiziqli rahbar qoshida ixtisoslashgan xizmatlar, maslahatchilar kengashi, ya’ni shtablar tuzish orqali tashkil etiladi  ' },
  { question: 'Funksional struktura:  ', answer: '= har bir boshqaruv bo‘g‘iniga muayyan funksiyalarni biriktirib qo‘yish orqali tashkil etiladi  ' },
  { question: 'Tashkiliy struktura o‘rtasidagi aloqa necha xil bo‘ladi?  ', answer: '= 2 xil  ' },
  { question: 'Avtokratik rahbarlar bo‘ysinuvchilarning?  ', answer: '= tashabbuskorligiga yo‘l qo‘ymaydi  ' },
  { question: 'Liberal rahbarlar kadrlarni tanlashda?  ', answer: '= beparvolarcha yondoshadilar  ' },
  { question: 'Demokratik rahbarlar bilimga bo‘lgan munosabatda?  ', answer: '= mutassil o‘qiydilar va qo‘l ostidagi bo‘ysinuvchilardan ham shuni talab qiladilar  ' },
  { question: 'Menejment fanining taxlil usullari?  ', answer: '= sistemali, kompleks, kuzatish, integratsion, eksperiment  ' },
  { question: 'Demokratik rahbarlar muomalada?  ', answer: '= ijobiy, maloqotda kirishimli va faol bo‘ladilar  ' },
  { question: 'Liberal rahbarlar rag‘batlantirishga kelganda?  ', answer: '= aniq mo‘ljallari bo‘lmaydi  ' },
  { question: 'Avtokratik rahbarlar mas’uliyatni taqsimlashda?  ', answer: '= to‘la~to‘kis o‘zining vakolatiga binoan taqsimlaydi  ' },
  { question: 'O‘zini jamoadan uzoq tutish, jamoa a’zolarini bevosita muloqotda bo‘lishni chegaralab qo‘yish?  ', answer: '= avtokratik rahbarlar uchun xos  ' },
  { question: 'O‘z zimmasiga mas’uliyat olishni yoqtirmaslik?  ', answer: '= liberal rahbarlar uchun xos  ' },
  { question: 'Sangviniklar:  ', answer: '= xushchaqchaq, nutqi tez, harakatlari shiddatli kishilardir  ' },
  { question: 'Flegmatiklar:  ', answer: '= tez toliqadigan va o‘ziga ishonmaydigan bo‘ladilar  ' },
  { question: 'Melanxoliklar:  ', answer: '= nutqi tez, harakatlari shiddatli bo‘ladi  ' },
  { question: 'Quyida qayd qilingan hislatlarning qaysi biri rahbarda mujassamlangan bo‘lishi kerak?  ', answer: '= dovyuraklik, sabrlilik  ' },
  { question: 'Quyida qayd qilingan hislatlarning qaysi biri rahbarni el nazaridan qolishiga olib keladi?  ', answer: '= mahalliychilik  ' },
  { question: 'Quyida qayd qilinganlarning qaysi biri rahbarlarga xos harakter bo‘lishi mumkin?  ', answer: '= kurashchan  ' },
  { question: 'Quyida qayd qilinganlarning qaysi biri rahbar aytishi mumkin bo‘lmagan javoblardir?  ', answer: '= mening ish tajribam shu  ' },
  { question: 'Quyida qayd qilinganlarning qaysi biri rahbar aytishi mumkin bo‘lgan javoblardir?  ', answer: '= asrlab yashaysanu, asrlar o‘rganar ekansan  ' },
  { question: 'Qaror – bu  ', answer: '= bajarilishi mumkin bo‘lgan ishning aniq bir yo‘lini tanlab olishdir  ' },
  { question: 'Qaror qabul qilish – bu?   ', answer: '= noto‘g‘ri javob yo‘q.  ' },
  { question: 'Ishlab chiqarishni boshqarish deganda?  ', answer: '= noto‘g‘ri javob yo‘q.  ' },
  { question: 'Korxona doirasida amalga oshiriladigan rahbarlik, tashkilotchilik va ma’muriy harakterdagi alohida faoliyatini?  ', answer: '= ishlab chiqarishni boshqarish deb yuritiladi  ' },
  { question: 'Motivlashtirish – bu:  ', answer: '= noto‘g‘ri javob yo‘q.  ' },
  { question: 'Quyida qayd qilingan ehtiyojlarning qaysi biri birlamchi ehtiyojlarga kiradi?  ', answer: '= fiziologik ehtiyojlar  ' },
  { question: 'Amerikalik ruhshunos Abraham Maslouning motivatsiya nazariyasi?  ', answer: '= ehtiyojlar ustunligi nazariyasi deb yuritiladi  ' },
  { question: 'Frederik Gersbergning motivatsiya nazariyasi?  ', answer: '= boisiy tozalanish nazariyasi deb yuritiladi  ' },
  { question: '(X) nazariyasi bo‘yicha?  ', answer: '= barcha javoblar to‘g‘ri  ' },
  { question: 'Yakkahokimlik bilan qaror qabul qilish, ma’muriyatchilik, qo‘l ostidagi ishga doimo aralashib turish, hukmronlikni saqlab turish kabi xususiyatlar qaysi rahbarlik uslubiga xos?  ', answer: '= avtokratik  ' },
  { question: 'Vakolat – bu:  ', answer: '= biror shaxs, muassasa, tashkilot, davlat va shu kabilar nomidan ish qilish uchun berilgan huquqi  ' },
  { question: 'Axborot – bu  ', answer: '= to‘g‘ri javob yo‘q  ' },
  { question: 'Mazmuniga qarab axborotlar qanday turlarga bo‘linadi?  ', answer: '= iqtisodiy axborotlar  ' },
  { question: 'Axborot tizimi necha xil bo‘ladi?  ', answer: '2 xil' },
  { question: 'Kommunikatsiya – bu:  ', answer: '= kishilar o‘rtasida o‘zaro axborot almashinuvidir  ' },
  { question: 'Ishlab chiqarish omillaridan foydalanish samaradorligi~bu:  ', answer: '= yangi texnika va texnologiyani joriy qilish darajasi  ' },
  { question: 'Vazifa~bu:  ', answer: '= barcha javoblar to‘g‘ri  ' },
  { question: 'Qo‘llanish va foydalanish miqyosiga qarab boshqarish funksiyalari.  ', answer: '= umumiy va aniq funksiyalar  ' },
  { question: 'Boshqaruv maqsadlariga qo‘yilgan talablar nechta?  ', answer: '= 6 ta   ' },
  { question: 'Boshqarishning tashkiliy tuzilmalari bozorning qanday talablariga javob berishi kerak?  ', answer: '= tashkiliy qurilma bo‘g‘in va bosqichlardan iborat bo‘lishi kerak  ' },
  { question: 'Quyida qayd qilingan metodlarning qaysi biri boshqarish metodi bo‘lib hisoblanadi?  ', answer: '= barcha javoblar to‘g‘ri  ' },
  { question: 'Boshqarishning iqtisodiy metodlari?  ', answer: '= iqtisodiy manfaatlardan foydalanishiga asoslanadi  ' },
  { question: 'Boshqarishning tashkiliy~ma’muriy metodlari?  ', answer: '= har biri boshqaruv bo‘g‘inining funksiyalarini belgilashga asoslanadi  ' },
  { question: 'Boshqarishning tashkiliy~ma’muriy usuli o‘z navbatida nechaga bo‘linadi?  ', answer: '= 2 ga   ' },
  { question: 'Boshqaruvning tashkiliy ta’sir etish shakli nechaga bo‘linadi?  ', answer: '= 4 ta   ' },
  { question: 'Menejmentda kommunikatsiya roli qanday?  ', answer: '= bu~axborot almashish jarayoni  ' },
  { question: 'Boshqaruv axborotlariga qo‘yilgan talablar nechta?  ', answer: '= 5 ta   ' },
  { question: 'Boshqarish texnikasiga nimalar kiradi?  ', answer: '= menejment aqliy mehnatni, axborotni qayta ishlovchi texnikalar  ' },
  { question: 'Quyidagi axborot turlarini qaysi biri axborot mazmunini aks ettiradi.  ', answer: '= iqtisodiy axborot  ' },
  { question: 'Quyidagi axborotlar turlarini qaysi biri axborotlarni barqarorlik tavsifini o‘zida aks ettiradi?  ', answer: '= shartli doimiy axborot   ' },
  { question: '108.Quyidagilarni qaysi biri axborotlarni davriyligini aks ettiradi?  ', answer: '= sutkali axborot   ' },
  { question: 'Quyidagi axborotlarni qaysi biri foydalanish uchun tayyorligini o‘zida aks ettiradi?  ', answer: '= yakuniy axborot  ' },
  { question: 'Quyidagi axborotlarni qaysi biri boshqaruv jarayonidagi vazifani aks ettiradi?  ', answer: '= direktiv axborotlar  ' },
  { question: 'Kommunikatsion jarayon:  ', answer: '= axborot almashish jarayoni  ' },
  { question: 'Boshqaruv uslubi~bu:  ', answer: '= boshqaruv jarayonida kelib chiqadigan muammolarni xal qilish usullari yo‘llari  ' },
  { question: 'Boshqaruv jarayonida u yoki bu masalalarni hal qilishda rahbarning o‘ziga xos yondoshishi menejmentda?  ', answer: '= boshqaruv usuli deb yuritiladi  ' },
  { question: 'Qaror qabul qilishda yakkabosh, jamoa fikri bilan hisoblashmaydigan rahbarlarni?  ', answer: '= avtokratik rahbarlar deyiladi   ' },
  { question: 'Qaror~bu:  ', answer: '= bajarilishi mumkin bo‘lgan ishning aniq bir yo‘lini tanlab olishdir  ' },
  { question: 'Qaror qabul qilish~bu:  ', answer: '= maqsadga erishish uchun rahbarning o‘z vakolat doirasida muqobil alternativni tanlash jarayoni  ' },
  { question: 'Boshqaruv qarorlari unsurini aniqlang?  ', answer: '= barcha javoblar to‘g‘ri  ' },
  { question: 'Amal qilish davriga ko‘ra qarorlarning qanday turlari bor?  ', answer: '= taktik qarorlar  ' },
  { question: 'Mazmuni va amal qilish harakteriga ko‘ra qarorlarning qanday turlari bor:  ', answer: '= sotsial~iqtisodiy  ' },
  { question: 'Amal qilish harakteriga ko‘ra qarorlarning qanday turlari bor:  ', answer: '= vaqtinchalik qarorlar  ' },
  { question: 'Strategik qaror:  ', answer: '= yuqori boshqaruv organlari tomonidan istiqbolli dasturlarni ishlab chiqish maqsadida qabul qilinadi  ' },
  { question: 'Takrorlanish va yangilik darajasiga qarab qarorlar:  ', answer: '= an’anaviy va tavsiyali qarorlarga bo‘linadi  ' },
  { question: 'Streotip qarorlar~bu:  ', answer: '= rahbar faoliyati qat’iy yo‘riqnomalar, me’yoriy hujjatlar doirasida amalga oshirilishi ~ lozim bo‘lgan xollarda qabul qilinadigan qarorlardir  ' },
  { question: 'Konsensus tamoyili:  ', answer: '= bu qarorlarni ishlab chiqarish jarayonida barcha baxsli masalalar va turli tuman fikrlar yuzasidan bir bitmga kelish yoki kelishishdir  ' },
  { question: 'Quyida qayd qilingan bosqichlarning qaysi biri qarorni ishlab chiqish jarayoni tarkibiga kiradi?  ', answer: '= barcha javoblar to‘g‘ri  ' },
  { question: 'Kollegial tamoyili:  ', answer: '= turli uyushma va birlashmalar ro‘y~rost ma’lum bo‘lib turgan vaziyatlarda har xil fikrlar raqobat qiladigan xollarda amal qiladi  ' },
  { question: 'Qaror qabul qilishda «ringi» usuli bosqichlari nechta bosqichdan iborat bo‘ladi?  ', answer: '= 5  ' },
  { question: 'Boshqaruv qarorlariga qo‘yiladigan talablar nechta?  ', answer: '= 8 ta   ' },
  { question: 'Quyidagilarni qaysi biri qarorlarni modellash bosqichiga kiradi?  ', answer: '= barcha javoblar to‘g‘ri  ' },
  { question: 'Boshqaruv qarorlariga qo‘yiladigan talablar?  ', answer: '= barcha javoblar to‘g‘ri  ' },
  { question: 'Menejer mehnati qanday masalalarni hal etishga qaratilgan?  ', answer: '= hamma javob to‘g‘ri  ' },
  { question: 'Menejerni kim attestatsiyadan o‘tkazadi?  ', answer: '= attestatsion komissiya  ' },
  { question: 'Kommunikatsiya jarayoni samarali bo‘lishi uchun nechta bosqichdan o‘tishi kerak?   ', answer: '= 6 ta  ' },
  { question: 'Kommunikatsiya jarayonining bosqichlari to‘g‘ri ko‘rsatilgan qatorni toping?   ', answer: '= aloqa kanali, dekodlashtirish   ' },
  { question: 'Tashkil qilish funksiyasining asosiy maqsadi —bu:  ', answer: '= boshqaruv ob’ekti doirasida boshqariluvchi va boshqaruvchi jarayonlarni uyushqoqligini ta’minlash  ' },
  { question: 'Menejmentning uchta darajasi farqlanadi:   ', answer: '= oliy, o‘rta, quyi   ' },
  { question: 'Korxonaning boshqaruv modeli deganda nimani tushunasiz?   ', answer: '= barcha javoblar to‘g‘ri  ' },
  { question: 'Kommunikatsiya jarayonining asosiy elementlar nechta?  ', answer: '= 4 ta   ' },
  { question: 'Amal qilish harakteriga qarab boshqaruv qarorlari quyidagi turlarga bo‘linadi:  ', answer: '= vaqtinchalik qarorlar  ' },
  { question: 'Boshqaruv samaradorligi deganda:   ', answer: '= erishilgan samaraning sarflangan harajatga bo‘lgan nisbati tushuniladi   ' },
  { question: 'Boshqaruv usullari:  ', answer: '= kishilarga ta’sir etishning umumiy vositalari va yo‘llari  ' },
  { question: 'Tashqi kommunikatsiya deganda:   ', answer: '= tashkilot bilan tashqi muxit o‘rtasidagi axborot almashinuvi tushuniladi   ' },
  { question: 'Ichki kommunikatsiya deganda:   ', answer: '= korxona ichidagi bo‘limlar o‘rtasidagi axborot almashuvi, rahbar va bo‘ysunuvchi raxbar atrofidagi shov — shuvlar tushuniladi  ' },
  { question: 'Mahsulot sifatini boshkarish tushunchasi  ', answer: '= iste’molchilar didiga butunlay moslashtirish   ' },
  { question: 'Axborot almashinuvining samaradorligiga ta’sir qiladigan muxim omil.  ', answer: '= Teskari aloqaning mavjudligi  ' },
  { question: 'Boshqaruv darajasiga ko‘ra menejerlar toifasi  ', answer: '= Yukori pog‘ona, o‘rta pog‘ona va kuyi pog‘onadagi menejerlar  ' },
  { question: 'Axborot almashinish usullari  ', answer: '= Bir tomonlama, ikki tomonlama, oddiy va murakkab  ' },



 

];

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredQuestions = questionsAndAnswers.filter(
    (qa) => qa.question.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4 sm:px-8">
      <input
        type="text"
        placeholder="Type a question"
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredQuestions.map((qa, index) => (
          <Question key={index} question={qa.question} answer={qa.answer} />
        ))}
      </div>
    </div>
  );
};

export default App;
