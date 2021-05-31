-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Май 31 2021 г., 14:31
-- Версия сервера: 10.4.17-MariaDB
-- Версия PHP: 7.3.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `nekome`
--

-- --------------------------------------------------------

--
-- Структура таблицы `anime`
--

CREATE TABLE `anime` (
  `id` int(11) NOT NULL,
  `animename` varchar(30) DEFAULT NULL,
  `animedescription` text DEFAULT NULL,
  `animeseries` int(11) DEFAULT NULL,
  `authorid` int(11) DEFAULT NULL,
  `studioId` int(11) DEFAULT NULL,
  `genreId` int(11) DEFAULT NULL,
  `videoid` varchar(512) DEFAULT NULL,
  `img` varchar(512) NOT NULL,
  `comments` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `anime`
--

INSERT INTO `anime` (`id`, `animename`, `animedescription`, `animeseries`, `authorid`, `studioId`, `genreId`, `videoid`, `img`, `comments`) VALUES
(1, 'Jutsu Kaisen', 'The anime takes place in a world where people are not the last link in the food chain, and any unsuspecting layman with a certain amount of bad luck can be eaten by a demon. Although people for the most part do not know about the existence of demons, they already have a long history, one of the episodes of which is the deeds of the legendary demon Ryomen Sukuna, whom they managed to defeat with great difficulty. His body was divided into parts, which were scattered around the world. If there is a demon that absorbs all the fragments of his flesh, then he will gain the power that can destroy human civilization. This is the situation in the world, where a high school student Yuji Itadori lives in complete ignorance of the threat hanging over humanity. Yuji has completely different concerns. Every day he visits his grandfather in the hospital and kicks out of sports clubs, which dream of getting him because of his outstanding physical strength and endurance. Yuji chose to join the club of occult sciences, from which all troubles begin when an object falls into the hands of the club members, on which a curse is imposed. Without hesitation, the students break the sealing spell and unleash terrible powers. ..', 24, 2, 2, 3, 'https://gogo-play.net/load.php?id=MTQ1NjA0&amp;title=Jujutsu+Kaisen+%28TV%29+episode+1&amp;typesub=SUB', 'https://animego.org/upload/anime/images/5f7c1bb915a07033689374.jpg', 0),
(2, 'The Promised Neverland', 'Emma, Ray and other children successfully leave the territory of the “Grace House” orphanage. But getting over the wall that separates the boarding school from the outside world does not mean to be safe, because now they are wanted. In addition, there is a continuous forest around, concealing in itself many unknown, and sometimes frightening things. There is no turning back. The only chance of survival is to continue the journey in search of a mysterious well-wisher, William Minerva. However, this is only the beginning, the most difficult is ahead, because getting to the bottom of the truth is not an easy task. Will children be able to overcome all difficulties and find the very light of truth?', 11, 3, 3, 2, NULL, 'https://animego.org/upload/anime/images/5c390703e6b47898661392.jpg', 0),
(3, 'Cowboy Bebop', 'Jet Black, a former police officer, and Spike Spiegel, a man with a dark past, had absolutely no plans to increase the crew of the Bebop spacecraft, which is their home and vehicle. But the nets spread out to capture society\'s costly dregs brought them Faye Valentine, an adorable gambler with a colossal debt, Ed the lost computer clever, and Ein supposedly the smartest dog in the world. It is in this composition that the Bebop crew continues their business - headhunting. Their adventures are comical, philosophical, and sometimes tragic ...', 26, NULL, 4, 1, NULL, 'https://animego.org/upload/anime/images/5a6e62aa912c4.jpg', 0),
(4, 'Demon Slayer', 'Since ancient times, there have been rumors of man-eating demons hiding in the forests. Because of what, local residents are afraid to go out at night, so as not to fall victim to them. But legend has it that there is a demon slayer who also prowls under the night sky, exterminating bloodthirsty demons. For one boy, these rumors will soon become a harsh reality ...\r\n\r\nTanjiro Kamado is the eldest son in the family who lost his father and took care of his family. One day he leaves for a nearby town to sell charcoal. Returning in the morning, the guy discovers that all his relatives have been brutally killed, and the only survivor is Nezuko - the younger sister turned into a demon, but has not yet lost all humanity.\r\n\r\nFrom this moment, a long and dangerous journey begins for Tanjiro and Nezuko, in which the boy intends to find out a way to heal his sister and find the killer.', 26, 4, 1, 3, NULL, 'https://animego.org/upload/anime/images/5ca8e16ebd092601180598.jpg', 0),
(5, 'One Piece', 'Before his execution, the legendary pirate Captain Roger revealed to the whole world a secret place where he hid the stolen treasures.\r\n\r\nThere were a lot of people who wanted to solve the riddle of the Grand Line Island and hundreds of daredevils went to try their luck in this cursed place. But none of them even imagined so many dangers and evil creatures would meet them on this island lost in the ocean. Most of the enthusiasts stayed there, and those who were lucky enough to get out alive from the island no longer considered finding the treasure a feasible task. But greedy and bloodthirsty pirates are not those who are afraid to visit the Grand Line.\r\n\r\nThe protagonist of this story is the seventeen-year-old boy Monkey D. Luffy, who is obsessed with the dream of becoming the Pirate King, equal in power to the late Roger. Gathering a team of the same brave sailors like himself, Monkey sets out on a long voyage to get Roger\'s treasures that will help him fulfill his old dream. But will the young man have enough courage and ingenuity to overcome all the traps set by cunning Roger throughout the Grand Line, or will he and his team join the treasure seekers who have already died here?', 1050, 5, 9, 5, NULL, 'https://animego.org/upload/anime/images/5ab170d351312102639546.jpg', 0),
(6, 'Naruto Shippuuden', 'Two years passed unnoticed in Naruto\'s world. Former newcomers joined the ranks of experienced shinobi in the ranks of tunin and jonin. The main characters did not sit still - each became a student of one of the legendary Sannin - the three great ninja of Konoha. The guy in orange continued his studies with the wise but eccentric Jiraiya, gradually ascending to a new level of martial prowess. Sakura has been promoted to assistants and confidants of the healer Tsunade, the new leader of the Leaf Village. Well, Sasuke, whose pride led to the expulsion from Konoha, entered into a temporary alliance with the sinister Orochimaru, and each believes that only uses the other for the time being.\r\n\r\nThe brief respite was over, and events once again raced with hurricane speed. In Konoha, the seeds of old strife, sown by the first Hokage, are re-growing. The mysterious leader Akatsuki set in motion a plan for world domination. Restlessly in the Sand Village and neighboring countries, old secrets are emerging everywhere, and it is clear that someday you will have to pay the bills. The manga\'s long-awaited sequel has breathed new life into the series and new hope in the hearts of countless fans!', 500, 6, 7, 5, NULL, 'https://yummyanime.club/img/posters/1608747736.jpg', 0),
(7, 'Naruto', 'This is a story about a ninja boy. He dreams of becoming Hokage: the head of his village. But the Hokage is the wisest and strongest ninja in the village, so the guy will try to overcome a bunch of trials, defeat many opponents, earn respect, and grow mentally and physically.', 202, 6, 7, 5, NULL, 'https://yummyanime.club/img/posters/1568211460.jpg', 0),
(8, 'Dororo', 'Confusion reigns in the country, and one of the generals is eager at all costs to win the decisive battle, which promises him no less the throne of the whole country. To do this, he decides on a terrible sin and makes a deal with twelve demons: they help him win the battle, and for this he gives each of them one of the body parts of his newborn son. The boy, doomed to death, nevertheless survives thanks to the help of a doctor who created prosthetic weapons for him. Betrayed by his own father, the young man wants nothing more than to take revenge on his parent, but for this he first needs to kill each demon and return the severed body parts, one at a time. On his way to hunt and kill demons, the young man meets the orphan Dororo, who claims to be the greatest thief in Japan. Having united, they set off together on a difficult journey full of dangers and adventures.', 24, 7, 2, 6, NULL, 'https://animego.org/upload/anime/images/5ccc63a05fb23958389516.jpg', 0),
(9, 'Vinland Saga', 'The plot is based on Icelandic folklore, which tells about the history of the Scandinavian peoples. At that distant time, the Vikings were the rulers of the northern seas. You can judge for yourself how much historical authenticity there is in the anime, but the fact that it is of lively interest is indisputable! And this has already been confirmed by the success of film adaptations based on the books of Cressida Cowell. The author of \"Vinland Saga\" managed to transfer our imagination far into the past ten centuries ago, inspired by that time of the human era, when Honor was more precious than life, and the word of a man was indestructible.\r\n\r\nThe protagonist of the story, Thorfinn, is a little boy, the sea is in his blood, from childhood he grows up with dreams of military glory. Long harsh winters and internecine wars are increasingly reviving in the memory of old people the saga of Vinland - a warm and fertile land beyond the sea, where there is no slave trade and wars', 24, 8, 8, 7, NULL, 'https://yummyanime.club/img/posters/1609956569.jpg', 0),
(10, 'Owari no Seraph', 'The protagonists of the story are Yuichiro and Mikaela, orphans from the orphanage. As a photo-negative of each other, they are as different internally as externally. Michaela is a kind, sympathetic boy, ready for any sacrifices for the sake of orphan children, whom, according to the general rules of the institution, he calls “family”. Yuichiro is the opposite of Mikaela, an implacable, always caustic rebel.\r\n\r\nFate was not enough to take away everything from the children, people are dying around them one after another - a terrible virus of unknown origin destroys the adult population overnight. Vampire aristocrats in this situation came and took control of the survivors. Children for them are a constant source of fresh blood, which they have to donate without fail. So Mika and Yu were held hostage to the closed City of Vampires. In this upside down world, all that remains is to survive, not live, but the shelter friends dream of escaping from captivity ...\r\n\r\nFurther events in history take place 4 years after the escape.\r\n\r\nGood and evil, people and vampires, like white and black ... it\'s easy to draw a dividing line between them. But is this trait so obvious, and who can you really trust?\r\n\r\nTime will tell whether the main characters will be able to preserve their friendship in an irreconcilable war between races ...', 24, 1, 8, 7, NULL, 'https://yummyanime.club/img/posters/1568211615.jpg', 0),
(16, 'Jowwjo', NULL, 12, NULL, NULL, NULL, NULL, 'https://animego.org/upload/anime/images/5ca8e16ebd092601180598.jpg', 0),
(17, 'JjwU', 'ss', 0, NULL, NULL, NULL, '//kodik.info/seria/199099/9237319f1595c13352a3999460d9241c/720p', '11w12', 0),
(23, '11', '11', 11, NULL, NULL, NULL, NULL, '', 0),
(24, 'JoJo no Kimyou na Bouken', 'One of the family members is always a name that begins with this syllable. But this is not just a whim of a famous family. Such a nickname is a kind of sign of a hero-fighter against werewolves, undead and other evil spirits. The beginning of this good old tradition was laid by George Joestar in the days of Queen Victoria. It was then that he made the unfortunate mistake of accepting the wrong person into his family. Since then, his descendants have never been bored.\r\n\r\nJonathan Joster accidentally discovers the secret of his adopted brother. He certainly wants to stop his atrocities, restore the reputation of his kind and regain the lost heart affection. Everything went into play: from skillful fighting techniques to magic military spells, and sometimes just gangster showdowns in the Western manner. But South American masks were of course the most troublesome!', 26, NULL, NULL, NULL, 'https://video.sibnet.ru/shell.php?videoid=729274&share=1', 'https://yummyanime.club/img/posters/1595875343.jpg', 0),
(25, 'Dr. Stone: Stone Wars', 'Тысячи лет прошли с тех пор, как всё человечество мгновенно окаменело от загадочного явления. Проснувшись и не узнав сильно изменившийся свет, Сэнку Исигами — гений, обладающий сверхчеловеческим интеллектом — застал лишь жалкие окаменевшие останки, свидетельствующие о том, что некогда здесь существовала развитая цивилизация. Застигнутый врасплох, но не отчаявшийся, Сэнку решает вернуть прежний мир силой науки. Со временем к нему присоединяются новые друзья и вместе создают Научное королевство. Огонь, утюг, электричество, стекло, мобильный телефон... На развитие от каменного века до современной цивилизации человечеству потребовалось более двух миллионов лет, Исигами с друзьями же прошли эти этапы гораздо быстрее благодаря уже имеющимся знаниям, навыкам и усердию. Однако на всё так гладко, как хотелось бы. Бывший сильнейшим учеником старшей школы, Цукаса Сисио возглавляет Империю силы, противостоящую Научному королевству. Цель Цукасы — очистить человечество, и он сделает всё возможное, чтобы остановить развитие науки с помощью могущественной военной силы. Что же противопоставит своему сопернику вундеркинд Сэнку?', 24, NULL, NULL, NULL, NULL, '', 0),
(27, 'World Trigger 2', 'Ворота в другой мир внезапно открываются на Земле, город Микадо захватывают странные существа, известные как \"Соседи\". Злобные существа, которых не убить традиционным оружием. В ответ на их прибытие, создано агентство пограничной обороны для борьбы с соседней угрозой с помощью специального оружия, именуемого \"Триггеры\". По прошествии лет со времени когда ворота впервые открылись, \"Соседи\" так же являют угрозу, и члены пограничной службы остаются на страже обеспечивая безопасность планеты. Членам учебных групп, таким как Осаму Микумо, использовать триггеры за пределами центральных учреждений категорически запрещено. Увидев как нового, таинственного одноклассника хулиганы тащат в запретную зону, решает ринуться на помощь. Нападение \"Соседей\" именно в этот момент не оставляет выбора парню, и он готов применить оружие. Переводной одноклассник Юума Куга показал чудеса и моментально расправился с инопланетянами, раскрыв тем самым себя. Юума Куга: замаскированный гуманоидный \"Сосед\".', 13, NULL, NULL, NULL, '//kodik.info/seria/766348/c52330aa5685e34b049435f436df5a0f/720p', 'https://yummyanime.club/img/posters/1577609318.jpg', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `auth`
--

CREATE TABLE `auth` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `registered` datetime NOT NULL,
  `last_login` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `auth`
--

INSERT INTO `auth` (`id`, `username`, `password`, `registered`, `last_login`) VALUES
(4, 'luxy25', '$2a$10$tXi8LdOMR8mcBn6S5VqBDuDU2zJxEKuCC8FnAM18QmklC4ztixWd6', '2021-04-30 14:53:32', '0000-00-00 00:00:00'),
(25, 'luxor1', '$2a$10$J56ZbOBJ.3tMphm/Buy.yOViLuNrVPtUfEQjuzIhkAs0gEFhEasou', '2021-04-30 14:54:17', '0000-00-00 00:00:00'),
(999, 'lilGun', '$2a$10$tUareYuRd.bd5nX/OMOn5O17B5FJwO5Ji27zCHKSGquvYL.M5QbUq', '2021-04-30 15:46:55', '0000-00-00 00:00:00'),
(225157, 'Fifa21', '$2a$10$tfJqznYJFvt0Ez8zOhwpcO/4hADiT3zrEI8SL1pIIIhW0HhN7EIF.', '2021-04-29 23:24:09', '2021-04-29 23:25:22'),
(225158, 'Foxi12', '$2a$10$H5yhMr4RwgKVpmm8EbH98OhcjK9q7XKKf4ee112FA7HJ3K1G9b1Om', '2021-04-30 14:43:51', '2021-04-30 15:30:35'),
(225159, 'freak25', '$2a$10$JWLFcTf/ESRh0lxoSKrGfu46XGoRe1a39PQK3j3kBvDIVjIlmxfU6', '2021-04-30 14:55:42', '2021-04-30 15:30:35'),
(225160, 'bassaraq', '$2a$10$q8AJWyZVVnKq4BusEOjCQ.Lf3M4YbFGk8YtUmtFgldBw5NFZba6ha', '2021-04-30 14:57:34', '2021-04-30 15:30:35');

-- --------------------------------------------------------

--
-- Структура таблицы `author`
--

CREATE TABLE `author` (
  `id` int(11) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `dateofbirth` date DEFAULT NULL,
  `about` text DEFAULT NULL,
  `workedon` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `author`
--

INSERT INTO `author` (`id`, `firstname`, `lastname`, `dateofbirth`, `about`, `workedon`) VALUES
(1, 'Takaya', 'Kagami', '1979-05-22', 'Takaya Kagami is a Japanese light novel and manga writer. Some of his major works include The Legend of the Legendary Heroes, A Dark Rabbit Has Seven Lives and Seraph of the end, which have been adapted into anime shows', 0),
(2, 'Gege', 'Akutami', '1992-02-26', 'Japanese manga artist best known for creating Jujutsu Kaisen', 0),
(3, 'Kaiu', 'Shirai', NULL, 'Kaiu Shirai is the pen name of a Japanese manga artist and writer whose real name and date of birth are unknown', 0),
(4, '	Koyoharu', 'Gotouge', '1989-05-05', 'Koyoharu Gotouge is a Japanese manga artist, known for the manga series Demon Slayer: Kimetsu no Yaiba', 0),
(5, '	Eiichiro', 'Oda', '1975-01-01', 'Eiichiro Oda is a Japanese manga artist and the creator of the series One Piece. With more than 480 million tankōbon copies in circulation worldwide, One Piece is both the best-selling manga and the best-selling comic series of all time, in turn making Oda one of the best-selling fiction authors.', 0),
(6, 'Masashi', 'Kishimoto', '1974-11-08', 'Masashi Kishimoto is a Japanese manga artist. His best known work, Naruto, was in serialization from 1999 to 2014 and has sold over 250 million copies worldwide in 46 countries as of May 2019. The series has been adapted into two anime and multiple films, video games, and related media.', 0),
(7, 'Osamu', 'Tezuka', '1928-11-03', 'Osamu Tezuka was a Japanese manga artist, cartoonist, and animator. Born in Osaka Prefecture, his prolific output, pioneering techniques, and innovative redefinitions of genres earned him such titles as \"the Father of Manga\", \"the Godfather of Manga\" and \"the God of Manga\".', 0),
(8, 'Makoto', 'Yukimura', '1976-05-08', 'Makoto Yukimura is a Japanese manga artist. Yukimura made his debut with the hard science fiction manga Planetes, serialized in Weekly Morning magazine from 1999 to 2004 and adapted into a 26-episode anime series by Sunrise. Before that, he worked as an assistant for Shin Morimura.', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `text` text NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `animeid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `comment`
--

INSERT INTO `comment` (`id`, `text`, `username`, `animeid`) VALUES
(1, 'Amazing', 'Alien235', 0),
(2, 'JjwU', 'LILI', 0),
(3, 'enjoyed U^U', 'Patick', 0),
(4, 'enjoyed U^U', 'lovepami', 0),
(5, 'good', 'luke', 0),
(6, 'love it', 'Sara', 0),
(7, 'Love too\r\n', 'Bruh', 0),
(8, 'What do you think to watch Owari no seraph?', 'Luter', 0),
(9, 'Guess could be good', '', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `genrename` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `genre`
--

INSERT INTO `genre` (`id`, `genrename`) VALUES
(1, 'Detective'),
(2, 'Mystic'),
(3, 'Horror'),
(5, 'Comedy'),
(6, 'Adventures'),
(7, 'Drama');

-- --------------------------------------------------------

--
-- Структура таблицы `manga`
--

CREATE TABLE `manga` (
  `id` int(11) NOT NULL,
  `manganame` varchar(255) NOT NULL,
  `mangadescription` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `studio` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `manga`
--

INSERT INTO `manga` (`id`, `manganame`, `mangadescription`, `author`, `studio`, `genre`, `file`, `img`) VALUES
(1, 'KIMETSU NO YAIBA', 'Their initial confrontation with Kokushibo, the most powerful of Muzan’s demons, has left Tokito severely wounded and Genya cut in half—but still alive! Can his regenerative power heal even this fatal wound? The Hashira Himejima and Sanemi square off with Kokushibo and unleash all the skill they have against him. Himejima is blind, but if he can see into the Transparent World he might have a chance. Who will survive this whirlwind of flashing blades?', '0', 'Ufotable', 'Horror', 'https://manganelo.com/chapter/kimetsu_no_yaiba/chapter_1', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg/220px-Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg'),
(2, 'The Promised Neverland', 'Emma and Ray race to the queen’s chamber to stop Norman’s plan, but are they too late? What has propelled Norman to take such a brutal path, and is it something that will forever change his relationship with his closest friends?', '0', 'CloverWorks', 'Mystic', 'https://manganelo.com/chapter/yakusoku_no_neverland/chapter_1', 'https://i.pinimg.com/originals/dd/0f/30/dd0f306c2a64fa49ad0aa841886fffe1.png'),
(3, 'Seraph of the End', 'Seraph of the End is a Japanese dark fantasy manga series written by Takaya Kagami and illustrated by Yamato Yamamoto with storyboards by Daisuke Furuya. The series is set in a world that allegedly comes to an end at the hands of a \"human-made\" virus, ravaging the global populace and leaving only children under the age of thirteen untouched.', '0', 'Wit Studio', 'Drama', 'https://manganelo.com/chapter/read_seraph_of_the_end_manga_online2/chapter_1', 'https://animego.org/upload/anime/images/5a8183f0e4d85285344092.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Text` text NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `news`
--

INSERT INTO `news` (`id`, `Title`, `Text`, `img`) VALUES
(1, 'Second Season of \'Hanyou no Yashahime\' Announced', 'A second season for Hanyou no Yashahime: Sengoku Otogizoushi (Yashahime: Princess Half-Demon) was announced following the airing of its 24th and final episode on Saturday, subtitled Ni no Shou (The Second Act). The official website also revealed a teaser visual (pictured).\r\n\r\nSynopsis\r\nHalf-demon twins Towa and Setsuna were always together, living happily in Feudal Japan. But their joyous days come to an end when a forest fire separates them and Towa is thrown through a portal to modern-day Japan. There, she is found by Souta Higurashi, who raises her as his daughter after Towa finds herself unable to return to her time.\r\n\r\nTen years later, 14-year-old Towa is a relatively well-adjusted student, despite the fact that she often gets into fights. However, unexpected trouble arrives on her doorstep in the form of three visitors from Feudal Japan; Moroha, a bounty hunter; Setsuna, a demon slayer and Towa\'s long-lost twin sister; and Mistress Three-Eyes, a demon seeking a mystical object. Working together, the girls defeat their foe, but in the process, Towa discovers to her horror that Setsuna has no memory of her at all. Hanyou no Yashahime: Sengoku Otogizoushi follows the three girls as they endeavor to remedy Setsuna\'s memory loss, as well as discover the truth about their linked destinies. [Written by MAL Rewrite]\r\n\r\nHanyou no Yashahime serves as an anime sequel to Rumiko Takahashi\'s InuYasha franchise, which began airing in Fall 2020. VIZ Media licensed the anime in North and Latin American territories and streamed it on Crunchyroll, Funimation, and Hulu with subtitles. Funimation subsequently began streaming an English dub in November last year.\r\n\r\nTeruo Satou (InuYasha (TV) episode director) helmed the anime at Sunrise, and Katsuyuki Sumisawa (InuYasha: Kanketsu-hen) handled the series composition. Yoshihito Hishinuma (Tales of the Abyss) designed the characters, with original creator Rumiko Takahashi credited for the main character designs.\r\n\r\nWeekly Shounen Sunday serialized the original InuYasha manga from 1996 to 2008. Sunrise produced a 167-episode anime series that aired from Fall 2000–2004, followed by a 26-episode sequel in Fall 2009. The manga also inspired four anime films between 2000 and 2004.', 'https://cdn.myanimelist.net/s/common/uploaded_files/1616241249-1d3b8a0b6060797186411c6cc1bc8c8a.jpeg'),
(3, '\'Uramichi Oniisan\' TV Anime Reveals', 'The official website for the Uramichi Oniisan (Life Lessons with Uramichi Oniisan) television anime revealed six additional cast members on Friday. The anime is scheduled to premiere this July.\r\n\r\nCast\r\nYusao Furode: Shinichiro Miki (Gintama)\r\nTekito Derikida: Kenyuu Horiuchi (Dorohedoro)\r\nEddie Edei: Natsuki Hanae (Kakushigoto (TV))\r\nKayo Ennoshita: Minami Takahashi (Kobayashi-san Chi no Maid Dragon)\r\nIkuko Heame: Rina Satou (Toaru Kagaku no Railgun)\r\nFuritsuke Capellini: Kazuya Nakai (Kekkai Sensen)\r\n\r\nCharacter visuals for the cast introduced when the anime was announced in October 2019 were unveiled on the official website. The website confirmed that Mamoru Miyano and Nana Mizuki, who are playing Iketeru Daga and Utano Tadano, respectively, will perform the anime\'s opening theme. They were previously revealed to be singing songs for the anime that were featured in the manga.\r\n\r\nThe adaptation of Gaku Kuze\'s dark comedy web manga is being directed by Nobuyoshi Nagayama (Boku no Kanojo ga Majimesugiru Sho-bitch na Ken, Runway de Waratte) at Studio Blanc. Touko Machida (Lucky☆Star, Nagato Yuki-chan no Shoushitsu) is in charge of series composition and Kei Haneoka (Kono Oto Tomare!, Owarimonogatari) is composing the music', 'https://cdn.myanimelist.net/s/common/uploaded_files/1616192511-0da47bf005769746b9e30f4a7d66fd92.jpeg'),
(4, '\'100-man no Inochi no Ue ni Ore wa Tatteiru\'', 'The official website of the 100-man no Inochi no Ue ni Ore wa Tatteiru (I\'m Standing on a Million Lives) anime series revealed four supporting cast, ending theme performer, and a promotional video for the second season on Friday. The new season will begin airing in July 2021.\r\n\r\nCast\r\nKeita Torii: Toshiyuki Toyonaga (Gamers!)\r\nYana: Ayana Taketatsu (Kawaikereba Hentai demo Suki ni Natte Kuremasu ka?)\r\nAoyu: Aoi Yuuki (Boku no Kanojo ga Majimesugiru Sho-bitch na Ken)\r\nCantil: Shinichiro Miki (Trinity Seven)\r\n\r\nVirtual idol Kaede Higuchi is performing the opening theme \"Baddest.\" Kanako Takatsuki (Love Live! Sunshine!!) is returning from the first season to perform the ending theme \"Subversive.\"\r\n\r\nKumiko Habara (Angolmois: Genkou Kassenki assistant director) is returning to direct the second season at Maho Film. Takao Yoshioka (Shichisei no Subaru) is once again in charge of the series composition.\r\n\r\nKaho Deguchi (Kami-tachi ni Hirowareta Otoko) is joining the staff as a character designers alongside Eri Kojima (Carole & Tuesday animation director) and Toshihide Masudate (Isekai wa Smartphone to Tomo ni.).\r\n\r\nThe television anime adapts Naoki Yamakawa and Akinari Nao\'s fantasy action manga, which began in Bessatsu Shounen Magazine in June 2016. Kodansha shipped the 11th volume on December 9.\r\n\r\nThe first season aired in 12 episodes in Fall 2020, covering up to chapter 12 in the third volume. Crunchyroll simulcast the anime as it aired in Japan.', 'https://cdn.myanimelist.net/s/common/uploaded_files/1616137486-2cb3265f1299a22a3c55f612ef35fe35.jpeg'),
(5, 'TV Series About Fairy Girls', 'Caution! This article contains spoilers for the beginning of Mahou Shoujo Madoka Magica.\r\n\r\n \r\n\r\nJanuary 21, 2011. In the shadow of the witch\'s labyrinth, two girls, Madoka and Mami, have formed a strong bond between themselves. Mami is a sorceress girl. Strong but lonely. Madoka decided that here and now she would fight on Mami\'s side. But after, in the middle of the battle, the witch Charlotte turns into a huge worm and bites off Mami\'s head. Madoka\'s eyes widened in horror. Tea drips from a broken cup. As the black smoke clears, gothic rock from Kalafina begins to play, and the shimmering figure falls into oblivion. Just three episodes later, Mahou Shoujo Madoka Magica challenges you. The sediment from this scene remained even ten years later.\r\n\r\n \r\n\r\nMahou Shoujo Madoka Magica is special. But why? Not because this is \"the first dark story about fairy girls.\" Sailor Moon, the standard-bearer of modern girls magicians, became popular not because of attractive characters, but because the series could afford, for example, to quickly kill all the characters in the finale. Even series for younger audiences like Ojamajo Doremi touch on pet deaths or the consequences of divorce. Not to mention the infamous episode 46 of Magical Girl Minky Momo from 1983, in which the main character Momo is hit by a truck. Indeed, everything was invented before us.\r\n\r\n \r\n\r\nThe secret of Madoka\'s success is that it is not a series about fairy girls. This is a tense thriller cleverly disguised. He has many times more in common with Kamen Rider Ryuuki than with Sailor Moon. And it was written by Gen Urobuchi, an eroge screenwriter who was in the same circles with Kinoko Nasu and Hosidzora Meteo. Madoka is not going to slowly plunge you into the routine of its characters: weekly monsters, identical transformations, holidays and all sorts of special episodes. She only seems like this to dull your attention, and then (in beautiful attire from the Gekidan Inu Curry art team) grab you by the throat.', 'https://img1.ak.crunchyroll.com/i/spire4/65a32841505e4edae7c00ee6ba6aa4631616000010_large.png');

-- --------------------------------------------------------

--
-- Структура таблицы `studio`
--

CREATE TABLE `studio` (
  `id` int(11) NOT NULL,
  `studioname` varchar(20) DEFAULT NULL,
  `aboutstudio` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `studio`
--

INSERT INTO `studio` (`id`, `studioname`, `aboutstudio`) VALUES
(1, 'ufotable', ' is a Japanese animation studio founded in October 2000 by former staff of the TMS Entertainment subsidiary Telecom Animation Film and located in Nakano, Tokyo. A unique hallmark seen in many of their works (Ninja Nonsense, Futakoi Alternative, Coyote Ragtime Show, Gakuen Utopia Manabi Straight!, Tales of Symphonia, The Garden of Sinners) is a claymation sequence. Other notable works from the studio include Fate/Zero, Fate/stay night: Unlimited Blade Works and Demon Slayer: Kimetsu no Yaiba.'),
(2, 'MAPPA', ' is a Japanese animation studio. It was founded on June 14, 2011, by Masao Maruyama, a founder and former producer of Madhouse, and has produced anime works including Kids on the Slope, Terror in Resonance, Yuri!!! on Ice, and In This Corner of the World.\r\n\r\n\"MAPPA\" is an acronym for Maruyama Animation Produce Project Association. In April 2016, Maruyama resigned his position in the studio and founded a new studio, Studio M2.'),
(3, 'CloverWorks', ' is a Japanese animation studio that was rebranded from A-1 Pictures\' Kōenji Studio. It is a subsidiary of Sony Music Entertainment Japan\'s anime production firm Aniplex.'),
(4, 'Sunrise', 'is a Japanese animation studio founded in September 1972 and is based in Suginami, Tokyo. Its former name was Nippon Sunrise and, before that, Sunrise Studio.\r\n\r\nSunrise is renowned for critically praised and popular original anime series such as Gundam, Cowboy Bebop, Space Runaway Ideon, Armored Trooper Votoms, Yoroiden Samurai Troopers, Future GPX Cyber Formula, Crush Gear Turbo, The Vision of Escaflowne, Love Live!, Witch Hunter Robin, My-HiME, My-Otome, Code Geass: Lelouch of the Rebellion, Tiger & Bunny, Cross Ange: Rondo of Angel and Dragon, as well as its numerous adaptations of acclaimed light novels including Crest of the Stars, Dirty Pair, Horizon in the Middle of Nowhere and Accel World, and manga such as City Hunter, Inuyasha, Outlaw Star, Yakitate!! Japan, Planetes, Sgt. Frog, Gin Tama, and Kekkaishi. Many fans refer to the quality of their work as \"Sunrise Smooth\".'),
(7, 'Studio Pierrot', ' is a Japanese animation studio established in May 1979 by former employees of Tatsunoko Production and Mushi Production. Its headquarters are located in Mitaka, Tokyo.[1] Pierrot is renowned for several worldwide popular anime series, such as Naruto, Bleach, Yu Yu Hakusho, Black Clover, Boruto: Naruto Next Generations, Tokyo Ghoul, and Great Teacher Onizuka.\r\n\r\nThe company has a logo of the face of a clown. \"Piero\" is a Japanese loanword for clown, adopted from the classical character of Pierrot.\r\n\r\nYu Yu Hakusho and Saiyuki, two of the company\'s anime series, won the Animage Anime Grand Prix Award in 1994 and 1995, and 2000, respectively.'),
(8, 'WIT STUDIO', 'is a Japanese animation studio founded on June 1, 2012 by producers at Production I.G as a subsidiary of IG Port. It is headquartered in Musashino, Tokyo with Production I.G producer George Wada as president and Tetsuya Nakatake, also a producer at Production I.G., as a director of the studio. The studio gained notability for producing the first three seasons of Attack on Titan.'),
(9, 'Toei Animation', 'is a Japanese animation studio primarily controlled by its namesake Toei Company. It has produced numerous series, including Sally the Witch, Gegege no Kitaro, Mazinger Z, Galaxy Express 999. Dr. Slump, Dragon Ball, Saint Seiya, Sailor Moon, Slam Dunk, Digimon, One Piece, The Transformers (1984–1990, including several Japanese exclusive productions) and the Precure series.');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(32) DEFAULT NULL,
  `password` varchar(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cpassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `cpassword`) VALUES
(8, '11123', '$2b$10$/OjUtPIrUunzFOhrngMybuNYO', '1wweawsww11@mmail.com', ''),
(9, 'st60805', '$2b$10$nG/pMFJ4dRKfs2JqjByIpO4dJ', 'basssara.z77z@gmail.com', ''),
(10, '1wweawsww', '$2b$10$4HOJNly5ZaFhq7W70sUqu.V2B', '1fifalavwita@mail.com', ''),
(11, 'bassara', '$2b$10$OvHbyuVtEZsuIcVXKtOczeqvE', 'basara@mail.com', ''),
(13, 'bassaraq', '12345', 'basaraw@mail.com', '12345'),
(15, 'bassaraq', '12345', 'baswaraw@mail.com', '12345'),
(16, 'Admin', 'admin12345', 'admin@gmail.com', 'admin12345'),
(17, 'bassaraq', '12345', 'baswaraw@mail.com', '12345'),
(18, 'huiii', '123456', 'zomboy.z77z@gmail.com', '123456'),
(19, 'love it', 'fddb0db3d485fb759015dc83eff37943', 'Sara@gmail.com', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `anime`
--
ALTER TABLE `anime`
  ADD PRIMARY KEY (`id`),
  ADD KEY `studioId` (`studioId`),
  ADD KEY `anime_ibfk_3` (`genreId`),
  ADD KEY `id` (`id`),
  ADD KEY `authorid` (`authorid`),
  ADD KEY `comments` (`comments`);

--
-- Индексы таблицы `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`),
  ADD KEY `workedon` (`workedon`),
  ADD KEY `firstname` (`firstname`);

--
-- Индексы таблицы `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `animeid` (`animeid`),
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `id_2` (`id`);

--
-- Индексы таблицы `manga`
--
ALTER TABLE `manga`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `file` (`file`),
  ADD KEY `author` (`author`);

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `studio`
--
ALTER TABLE `studio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `anime`
--
ALTER TABLE `anime`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT для таблицы `auth`
--
ALTER TABLE `auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=225161;

--
-- AUTO_INCREMENT для таблицы `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `manga`
--
ALTER TABLE `manga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `studio`
--
ALTER TABLE `studio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `anime`
--
ALTER TABLE `anime`
  ADD CONSTRAINT `anime_ibfk_3` FOREIGN KEY (`genreId`) REFERENCES `genre` (`id`),
  ADD CONSTRAINT `anime_ibfk_4` FOREIGN KEY (`studioId`) REFERENCES `studio` (`id`),
  ADD CONSTRAINT `anime_ibfk_5` FOREIGN KEY (`authorid`) REFERENCES `author` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
