export const state = () => ({
  movies: [
    {
      id: 1,
      title: 'Поворот не туда: Наследие',
      img: 'https://img4.imgzona.video/images/film_240/1200/1200179.jpg',
      age: '2021',
      rating: [
        {
          id: 1,
          name: 5.5
        },
        {
          id: 2,
          name: 5.5
        },
        {
          id: 3,
          name: 5.4
        }
      ],
      genres: 'ужасы',
      country: 'США',
      producer: 'Майк П. Нельсон',
      scenario: 'Алан Б. Мак Элрой',
      actors: 'Шарлотта Вега, Адайн Брэдли, Билл Сейдж, Эмма Дюмон, Дилан МакТи, Дэйзи Хэд, Мэттью Модайн, Vardaan Arora, Adrian Favela, Тим ДеЗам',
      time: '1 час 51 минута',
      premiere: ['26 января 2021 в мире', '18 февраля 2021 в России'],
      description: 'Пожилой мужчина приезжает в городок Харперс-Ферри, откуда шесть недель назад его дочь в компании друзей отправилась в поход по Аппалачской тропе и с тех пор пропала. Несмотря на предупреждения местных, ребята свернули с туристического маршрута и вскоре столкнулись с сообществом людей, которые ещё до Гражданской войны основали тут поселение. И которые очень не любят чужаков.',
      favorites: false
    },
    {
      id: 2,
      title: 'Космические рейнджеры',
      img: 'https://img2.imgzona.video/images/film_240/1409/1409305.jpg',
      age: '2021',
      rating: [
        {  
          id: 1,
          name: 7.1
        },
        {
          id: 2,
          name: 6.9
        },
        {
          id: 2,
          name: 7.4
        }
      ],
      genres: 'фантастика',
      country: 'США',
      producer: 'Andrew Jaksch, Лукас Кендалл, Toby Rawal',
      scenario: 'Josh Guttman, Andrew Jaksch, Лукас Кендалл',
      actors: 'Деклан Картер, Philip Cristian Claassen, Tom Farrah, Jess Gabor, Трип Хоуп, Tyler Johnson, Даг Джонс, Mia Lardner, Кэтлин Мэйсон, Kyle Mason',
      time: '1 час 31 минута',
      premiere: ['12 января 2021 в мире'],
      description: '2420 год. Инопланетяне давно захватили Землю и поработили людей. Небольшая группа повстанцев захватывает космические корабли, чтобы отвоевать свою свободу обратно.',
      favorites: true
    },
    {
      id: 3,
      title: 'Джон Уик',
      img: 'https://img3.imgzona.video/images/film_240/762/762738.jpg',
      age: '2014',
      rating: [
        {
          id: 1,
          name: 2.6
        },
        {
          id: 2,
          name: 2.6
        }
      ],
      genres: 'боевик',
      country: 'США',
      producer: 'Чад Стахелски, Дэвид Литч',
      scenario: 'Дерек Колстад',
      actors: 'Киану Ривз, Микаэл Нюквист, Алфи Аллен, Уиллем Дефо, Дин Уинтерс, Эдрианн Палики, Омер Барнеа, Тоби Леонард Мур, Дэниэл Бернхард, Бриджет Мойнэхэн',
      time: '1 час 42 минуты',
      premiere: ['19 сентября 2014 в мире', '1 января 2015 в России'],
      description: 'Джон Уик на первый взгляд самый обычный среднестатистический американец, который ведет спокойную мирную жизнь. Однако мало кто знает, что в свое время он был наемным убийцей, причем одним из лучших профессионалов в своем деле. После того, как преступник угоняет его любимый «Мустанг», 1969 года выпуска, при этом убив его собаку Дейзи, которая была единственным напоминанием об умершей супруге, Джон вынужден вернуться к своему прошлому. Теперь Уик начинает охоту на человека, который имел неосторожность перейти ему дорогу, и он готов на все, чтобы отомстить ему…',
      favorites: true
    },
    {
      id: 4,
      title: 'Доктор Стрэндж',
      img: 'https://img1.imgzona.video/images/film_240/409/409600.jpg',
      age: '2016',
      rating: [
        {
          id: 1,
          name: 7.5
        },
        {
          id: 2,
          name: 7.4
        },
        {
          id: 3,
          name: 7.5
        }
      ],
      genres: 'фантастика',
      country: 'США',
      producer: 'Скотт Дерриксон',
      scenario: 'Джон Спэйтс, Скотт Дерриксон, С. Роберт Каргилл',
      actors: 'Бенедикт Камбербэтч, Тильда Суинтон, Мадс Миккельсен, Чиветель Эджиофор, Рэйчел МакАдамс, Бенедикт Вонг, Майкл Стулбарг, Бенджамин Брэтт, Скотт Эдкинс, Зара Питиан',
      time: '1 час 52 минуты',
      premiere: ['13 октября 2016 в мире', '31 октября 2016 в России'],
      description: 'Страшная автокатастрофа поставила крест на карьере успешного нейрохирурга Доктора Стрэнджа. Отчаявшись, он отправляется в путешествие в поисках исцеления и открывает в себе невероятные способности к трансформации пространства и времени. Теперь он - связующее звено между параллельными измерениями, а его миссия - защищать жителей Земли и противодействовать Злу, какое бы обличие оно ни принимало.',
      favorites: true
    },
    {
      id: 5,
      title: 'Форсаж: Хоббс и Шоу',
      img: 'https://img3.imgzona.video/images/film_240/1044/1044450.jpg',
      age: '2019',
      rating: [
        {
          id: 1,
          name: 6.3
        },
        {
          id: 2,
          name: 6.3
        },
        {
          id: 3,
          name: 6.4
        }
      ],
      genres: 'боевик',
      country: 'США',
      producer: 'Дэвид Литч',
      scenario: 'Крис Морган, Дрю Пирс, Гэри Скотт Томпсон',
      actors: 'Дуэйн Джонсон, Джейсон Стэйтем, Ванесса Кирби, Идрис Эльба, Эдди Марсан, Хелен Миррен, Райан Рейнольдс, Эйса Гонсалес, Клифф Кёртис, Eliana Sua',
      time: '2 часа 17 минут',
      premiere: ['13 июля 2019 в мире', '1 августа 2019 в России'],
      description: 'Люк Хоббс – американский элитный спецагент, он любит удобную спортивную одежду, большие пикапы и здоровое питание. Декард Шоу – британский пижон, бывший сотрудник разведки, предпочитает дорогие костюмы, спортивные авто и пабы. Эти двое терпеть друг друга не могут. Но если кто-то угрожает их семьям, они готовы пойти на всё. Даже на работу в команде.',
      favorites: true
    },
    {
      id: 6,
      title: 'Железный человек',
      img: 'https://img2.imgzona.video/images/film_240/61/61237.jpg',
      age: '2008',
      rating: [
        {
          id: 1,
          name: 7.9
        },
        {
          id: 2,
          name: 7.9
        },
        {
          id: 3,
          name: 7.9
        }
      ],
      genres: 'фантастика',
      country: 'США',
      producer: 'Джон Фавро',
      scenario: 'Марк Фергус, Хоук Остби, Артур Маркам',
      actors: 'Роберт Дауни мл., Джефф Бриджес, Гвинет Пэлтроу, Терренс Ховард, Лесли Бибб, Шон Тоуб, Фаран Таир, Кларк Грегг, Джон Фавро, Саид Бадрия',
      time: '2 часа 07 минут',
      premiere: ['14 апреля 2008 в мире', '1 мая 2008 в России'],
      description: 'Миллиардер-изобретатель Тони Старк попадает в плен к Афганским террористам, которые пытаются заставить его создать оружие массового поражения. В тайне от своих захватчиков Старк конструирует высокотехнологичную киберброню, которая помогает ему сбежать. Однако по возвращении в США он узнаёт, что в совете директоров его фирмы плетётся заговор, чреватый страшными последствиями. Используя своё последнее изобретение, Старк пытается решить проблемы своей компании радикально...',
      favorites: true
    },
    {
      id: 7,
      title: 'Охана: В поисках сокровища',
      img: 'https://img3.imgzona.video/images/film_240/1263/1263626.jpg',
      age: '2021',
      rating: [
        {
          id: 1,
          name: 6.1
        },
        {
          id: 2,
          name: 5.9
        },
        {
          id: 3,
          name: 6.1
        }
      ],
      genres: 'приключения',
      country: 'США',
      producer: 'Джуд Вэн',
      scenario: 'Christina Strain',
      actors: 'Alex Aiono, Kea PK, Lindsay Watson, Оуэн Ваккаро, Келли Ху, Брэнском Ричмонд, Brad Kalilimoku, Джонатан Ке Кван, Марк Ивэн Джексон, Крис Парнелл',
      time: '2 часа 04 минут',
      premiere: ['29 января 2021 в мире'],
      description: 'Лето в Оаху принимает захватывающий оборот для брата и сестры из Бруклина, когда они находят дневник, указывающий на давно потерянные сокровища.',
      favorites: true
    },
    {
      id: 8,
      title: 'Пираты Карибского моря: Сундук мертвеца',
      img: 'https://img4.imgzona.video/images/film_240/63/63991.jpg',
      age: '2006',
      rating: [
        {
          id: 1,
          name: 7.9
        },
        {
          id: 2,
          name: 8.1
        },
        {
          id: 3,
          name: 7.3
        }
      ],
      genres: 'фэнтези',
      country: 'США',
      producer: 'Гор Вербински',
      scenario: 'Тед Эллиот, Терри Россио, Стюарт Битти',
      actors: 'Джонни Депп, Орландо Блум, Кира Найтли, Джек Девенпорт, Билл Найи, Стеллан Скарсгард, Кевин МакНэлли, Ли Аренберг, Макензи Крук, Том Холландер',
      time: '2 часа 31 минут',
      premiere: ['24 июня 2006 в мире', '13 июля 2006 в России'],
      description: 'Вновь оказавшись в ирреальном мире, лихой капитан Джек Воробей неожиданно узнает, что является должником легендарного капитана «Летучего Голландца» Дэйви Джонса. Джек должен в кратчайшие сроки решить эту проблему, иначе ему грозит вечное проклятие и рабское существование после смерти. Вдобавок ко всему, срывается свадьба Уилла Тернера и Элизабет Суонн, которые вынуждены составить Джеку компанию в его злоключениях…',
      favorites: true
    },
    {
      id: 9,
      title: 'Хоббит: Нежданное путешествие',
      img: 'https://img3.imgzona.video/images/film_240/278/278522.jpg',
      age: '2012',
      rating: [
        {
          id: 1,
          name: 8.0
        },
        {
          id: 2,
          name: 8.1
        },
        {
          id: 3,
          name: 7.8
        }
      ],
      genres: 'приключения',
      country: 'Новая Зеландия',
      producer: 'Питер Джексон',
      scenario: 'Фрэнсис Уолш, Филиппа Бойенс, Питер Джексон',
      actors: 'Мартин Фриман, Иэн МакКеллен, Ричард Армитедж, Джеймс Несбитт, Кен Стотт, Грэм МакТавиш, Дин О’Горман, Эйдан Тернер, Стивен Хантер, Сильвестр МакКой',
      time: '2 часа 50 минут',
      premiere: ['28 ноября 2012 в мире', '19 декабря 2012 в России'],
      description: 'Хоббит Бильбо Бэггинс пускается в грандиозный поход, целью которого является отвоевание утраченного королевства гномов Эребор у дракона Смауга. Совершенно неожиданно с хоббитом налаживает контакт волшебник Гэндальф Серый. Так Бильбо находит себя и присоединяется к компании тринадцати гномов, возглавляемых легендарным воином Торином Дубощитом. Их путешествие пройдёт через Дикий Край, предательские земли, населенные гоблинами и орками, смертоносными варгами, гигантскими пауками, меняющим шкуры народом и волшебниками. И хотя их цель находится на Востоке, среди пустошей Одинокой Горы, сначала им придется выбраться из туннелей гоблинов, где Бильбо встретит существо, которое изменит его жизнь навсегда - Голлума.',
      favorites: true
    }
  ]
})

export const getters = {
  getMovies: state => state.movies
}