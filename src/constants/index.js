import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  //game,
  //game_controller,
  //game_controller_gif,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import game from "../assets/game.png";
import game_controller_gif from "../assets/game_controller_gif.gif";
import smartPhone from "../assets/smartphone.gif";
import domain from "../assets/domain.gif";
import web_developer from "../assets/web-developer.gif";
import java from "../assets/tech/java.png";
import c_sharp from "../assets/tech/c-sharp.png";
import python from "../assets/tech/python.png";
import sql from "../assets/tech/sql-server.png";
import kotlin from "../assets/tech/kotlin-original.svg";
import unity from "../assets/tech/unity.png";
import android from "../assets/tech/android.png";
import froggerImage from "../assets/img/frogger.jpg";
import memoryGameImage from "../assets/img/memory-game.jpg";
import snakeImage from "../assets/img/snake.jpg";
import spaceInvaderImage from "../assets/img/space-invader.jpg";
import whackAMoleImage from "../assets/img/whack-a-mole.jpg";
import fishGameImage from "../assets/img/fish-game.jpg";
import populationChartImage from "../assets/img/population-chart.jpg";
import textAnimationImage from "../assets/img/text-animation.jpg";
import pdfReaderImage from "../assets/img/pdf-app.jpg";
import calTrackerImage from "../assets/img/cal_time_tracker.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import connectFourImage from "../assets/img/connect-four2.png";

export const navLinks = [
  {
    id: "about",
    title: "自己PR",
  },
  {
    id: "work",
    title: "経験",
  },
  {
    id: "contact",
    title: "連絡",
  },
];

const services = [
  {
    title: "ネイティブモバイルアプリエンジニア",
    icon: mobile,
  },
  {
    title: "React Native／Flutter アプリエンジニア",
    icon: mobile,
  },
  {
    title: "バックエンドエンジニア",
    icon: backend,
  },
  {
    title: "Web 開発者",
    icon: web,
  },
  /* {
    title: "Content Creator",
    icon: creator,
  }, */
];

const technologies = [
  {
    name: "android",
    icon: android,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "c_sharp",
    icon: c_sharp,
  },
  /* 
  {
    name: "c_sharp",
    icon: c_sharp,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "sql",
    icon: sql,
  }, */
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  /* {
    name: "Redux Toolkit",
    icon: redux,
  }, */
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  /* {
    name: "MongoDB",
    icon: mongodb,
  }, */
  {
    name: "Three JS",
    icon: threejs,
  },
  /* {
    name: "git",
    icon: git,
  }, */
  {
    name: "figma",
    icon: figma,
  },
  /* {
    name: "docker",
    icon: docker,
  }, */
];

const experiences = [
  {
    title: "WEBアプリエンジニア",
    company_name: "フリーランス",
    icon: web_developer,
    iconBg: "white",
    date: "2018年7月 - 2018年12月",
    points: [
      {
        title: "レストランのホームページ開発",
        elements: [
          "新規開店するレストランのホームページを開発しました。このプロジェクトでは、モダンでユーザーフレンドリーなデザインを採用し、レストランのメニュー、予約システム、ギャラリー、所在地情報などを提供するウェブサイトを構築しました。Reactをメインのフレームワークとして使用し、パフォーマンスの最適化とユーザーエクスペリエンスの向上を図りました。",
        ],
      },
    ],
  },
  {
    title: "WEBアプリエンジニア",
    company_name: "フリーランス",
    icon: web_developer,
    iconBg: "white",
    date: "2019年7月 - 2019年6月",
    points: [
      {
        title: "株売買WEBアプリ開発",
        elements: [
          "株式売買をオンラインで行えるWEBアプリケーションの開発。個人投資家向けに、リアルタイムの株価情報、取引履歴の管理、買い注文・売り注文の機能などを提供。高いセキュリティ基準を満たし、ユーザーフレンドリーなインターフェースを目指ましたした。",
        ],
      },
    ],
  },
  {
    title: "モバイルアプリエンジニア",
    company_name: "フリーランス",
    icon: smartPhone,
    iconBg: "white",
    date: "2019年8月 - 2019年12月",
    points: [
      {
        title: "android e-readerアプリの開発",
        elements: [
          "Androidプラットフォーム向けの電子書籍リーダーアプリの開発。ユーザーが様々なフォーマットの電子書籍を読める機能を提供し、ブックマークや注釈の追加、ナイトモード、カスタマイズ可能なフォントやテーマなど、多機能かつ直感的なユーザー体験を実現しました。",
        ],
      },
    ],
  },
  {
    title: "モバイルアプリエンジニア",
    company_name: "フリーランス",
    icon: smartPhone,
    iconBg: "white",
    date: "2020年1月 - 2020年3月",
    points: [
      {
        title: "android TV cloud storage management アプリの開発",
        elements: [
          "TV向けのクラウドストレージ管理アプリの開発。ユーザーがテレビ画面を通じてクラウドストレージ（Google Drive）にアクセスし、ファイルのアップロード、ダウンロード、閲覧、削除などの操作を簡単に行えるようにして、大画面での直感的な操作を可能にするためのユーザーフレンドリーなインターフェースを提供しました。",
        ],
      },
    ],
  },
  {
    title: "モバイルアプリエンジニア",
    company_name: "フリーランス",
    icon: smartPhone,
    iconBg: "white",
    date: "2020年4月 - 2020年7月",
    points: [
      {
        title:
          "Android オーディオブックストリーミングサービスアプリの開発プロジェクト",
        elements: [
          "Androidプラットフォーム向けのオーディオブックストリーミングサービスアプリの開発。ユーザーが幅広いオーディオブックのライブラリにアクセスし、ストリーミング再生やダウンロード機能を利用できるアプリケーションを提供。直感的なユーザーインターフェース、カスタマイズ可能な再生設定、ブックマーク機能、ナレーション速度の調整など、ユーザー体験を向上させる多機能なアプリを目指しました。",
        ],
      },
    ],
  },
  /* {
    title: "モバイル・WEBアプリエンジニア",
    company_name: "フリーランス",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2019年7月 - 2019年6月",
    points: [
      {
        title: "レストランのホームページを開発",
        elements: [
          "新規開店するレストランのホームページを開発しました。このプロジェクトでは、モダンでユーザーフレンドリーなデザインを採用し、レストランのメニュー、予約システム、ギャラリー、所在地情報などを提供するウェブサイトを構築しました。Reactをメインのフレームワークとして使用し、パフォーマンスの最適化とユーザーエクスペリエンスの向上を図りました。",
        ],
      },
      {
        title: "株売買WEBアプリの開発",
        elements: [
          "新規開店するレストランのホームページを開発しました。このプロジェクトでは、モダンでユーザーフレンドリーなデザインを採用し、レストランのメニュー、予約システム、ギャラリー、所在地情報などを提供株式売買をオンラインで行えるWEBアプリケーションの開発。個人投資家向けに、リアルタイムの株価情報、取引履歴の管理、買い注文・売り注文の機能などを提供。高いセキュリティ基準を満たし、ユーザーフレンドリーなインターフェースを目指した。するウェブサイトを構築しました。Reactをメインのフレームワークとして使用し、パフォーマンスの最適化とユーザーエクスペリエンスの向上を図りました。",
        ],
      },
      {
        title: "android e-readerアプリの開発",
        elements: [
          "Androidプラットフォーム向けの電子書籍リーダーアプリの開発。ユーザーが様々なフォーマットの電子書籍を読める機能を提供し、ブックマークや注釈の追加、ナイトモード、カスタマイズ可能なフォントやテーマなど、多機能かつ直感的なユーザー体験を目指した。",
        ],
      },
      {
        title: "android TV cloud storage management アプリの開発",
        elements: [
          "TV向けのクラウドストレージ管理アプリの開発。ユーザーがテレビ画面を通じてクラウドストレージ（Google Drive）にアクセスし、ファイルのアップロード、ダウンロード、閲覧、削除などの操作を簡単に行えるようにする。大画面での直感的な操作を可能にするためのユーザーフレンドリーなインターフェースを提供。",
        ],
      },
      {
        title:
          "Android オーディオブックストリーミングサービスアプリの開発プロジェクト",
        elements: [
          "Androidプラットフォーム向けのオーディオブックストリーミングサービスアプリの開発。ユーザーが幅広いオーディオブックのライブラリにアクセスし、ストリーミング再生やダウンロード機能を利用できるアプリケーションを提供。直感的なユーザーインターフェース、カスタマイズ可能な再生設定、ブックマーク機能、ナレーション速度の調整など、ユーザー体験を向上させる多機能なアプリを目指す。",
        ],
      },
    ],
  }, */
  {
    title: "ゲームデベロッパー",
    company_name: "ディーオー",
    icon: game_controller_gif,
    iconBg: "white",
    date: "2020年8月 - 2021年8月",
    points: [
      {
        title: "ゲーミングプロジェクトの開発",
        elements: [
          "女性向けに特化したアドベンチャーゲームの開発。プレイヤーが物語を進めながらキャラクターと交流し、選択肢によってストーリーが分岐するインタラクティブなゲーム体験を提供。魅力的なビジュアル、深いキャラクターデザイン、エモーショナルなストーリー展開を重視し、ユーザーの感情に訴えるゲームを目指しました。",
        ],
      },
    ],
  },
  {
    title: "WEBアプリエンジニア",
    company_name: "アスパーク",
    icon: web_developer,
    iconBg: "white",
    date: "2021年10月 - 2022年3月",
    points: [
      {
        title: "通信販売・サービスweb application",
        elements: [
          "大手通信販売会社のためのサービスWEBアプリの開発を担当しました。このアプリは、ユーザーが商品を検索、閲覧、購入できるほか、レビューや評価機能を提供し、顧客体験を向上させることを目的としています。バックエンドは高度なデータベースと連携し、迅速で信頼性の高いサービスを提供しています。また、レスポンシブデザインを採用し、モバイルデバイスからも快適に利用できるように設計されています。",
        ],
      },
    ],
  },
  {
    title: "モバイルアプリエンジニア",
    company_name: "アスパーク",
    icon: smartPhone,
    iconBg: "white",
    date: "2022年4月 - 2022年9月",
    points: [
      {
        title: "カーナービOSシステム開発",
        elements: [
          "大手自動車メーカーのための車載ナビゲーションOSシステムの開発プロジェクトに参加しました。このシステムは、運転中のドライバーに対してリアルタイムのナビゲーション情報、交通情報、マルチメディア機能を提供し、安全かつ快適なドライブ体験を実現することを目的としています。音声認識機能やハンズフリー通話機能も搭載し、ユーザーフレンドリーなインターフェースを提供しました。",
        ],
      },
    ],
  },
  {
    title: "モバイルアプリエンジニア",
    company_name: "アスパーク",
    icon: smartPhone,
    iconBg: "white",
    date: "2022年10月 - 2022年12月",
    points: [
      {
        title: "車の鍵アプリ用SDK開発",
        elements: [
          "自動車メーカー向けのスマートフォンアプリにおける車の鍵機能を実装するためのSDK（ソフトウェア開発キット）を開発するプロジェクトです。このSDKは、車のドアロックやアンロック、エンジン始動などの機能をスマートフォンからリモートで操作できるようにするためのものであり、主にBluetooth技術を活用しています。",
        ],
      },
    ],
  },
  {
    title: "モバイルアプリエンジニア",
    company_name: "アスパーク",
    icon: smartPhone,
    iconBg: "white",
    date: "2023年1月 - 2023年12月",
    points: [
      {
        title: "動画を配信・受信・編集・保存アプリ",
        elements: [
          "SNS、RTMP（Real-Time Messaging Protocol）から動画と音声を受信し、それをSNSやRTMPへ配信するアプリケーションを開発しました。このアプリケーションは、受信した動画や音声データを保存・編集し、リアルタイムでの配信を可能にすることを目的としています。また、課金機能を搭載し、ユーザーが利用する機能に応じた料金を自動的に計算・処理する仕組みも実装しました。",
        ],
      },
    ],
  },
  {
    title: "モバイルアプリエンジニア",
    company_name: "アスパーク",
    icon: smartPhone,
    iconBg: "white",
    date: "2024年1月 - 2024年4月",
    points: [
      {
        title: "スポーツ試合・番組ストリーミングサービスアプリの開発",
        elements: [
          "大手スポーツ放送局向けのスポーツ試合およびプログラムのストリーミングサービスの開発を担当しました。このプロジェクトでは、ライブストリーミングやオンデマンド配信機能を提供し、ユーザーが多様なスポーツコンテンツをいつでもどこでも視聴できるようにすることを目指しました。ユーザー体験を向上させるために、インタラクティブな機能や高画質なストリーミング技術を実装しました。",
        ],
      },
    ],
  },

  /* {
    title: "アプリエンジニア",
    company_name: "アスパーク",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021年10月 - 2024年5月",
    points: [
      {
        title: "通信販売・サービスweb application",
        elements: [
          "大手通信販売会社のためのサービスWEBアプリの開発を担当しました。このアプリは、ユーザーが商品を検索、閲覧、購入できるほか、レビューや評価機能を提供し、顧客体験を向上させることを目的としています。バックエンドは高度なデータベースと連携し、迅速で信頼性の高いサービスを提供しています。また、レスポンシブデザインを採用し、モバイルデバイスからも快適に利用できるように設計されています。",
        ],
      },
      {
        title: "車ナービOSシステム開発",
        elements: [
          "大手自動車メーカーのための車載ナビゲーションOSシステムの開発プロジェクトに参加しました。このシステムは、運転中のドライバーに対してリアルタイムのナビゲーション情報、交通情報、マルチメディア機能を提供し、安全かつ快適なドライブ体験を実現することを目的としています。音声認識機能やハンズフリー通話機能も搭載し、ユーザーフレンドリーなインターフェースを提供しました。",
        ],
      },
      {
        title: "車の鍵アプリ用SDK開発",
        elements: [
          "自動車メーカー向けのスマートフォンアプリにおける車の鍵機能を実装するためのSDK（ソフトウェア開発キット）を開発するプロジェクトです。このSDKは、車のドアロックやアンロック、エンジン始動などの機能をスマートフォンからリモートで操作できるようにするためのものであり、主にBluetooth技術を活用しています。",
        ],
      },
      {
        title: "動画を配信・受信・編集・保存アプリ",
        elements: [
          "SNS、RTMP（Real-Time Messaging Protocol）から動画と音声を受信し、それをSNSやRTMPへ配信するアプリケーションを開発しました。このアプリケーションは、受信した動画や音声データを保存・編集し、リアルタイムでの配信を可能にすることを目的としています。また、課金機能を搭載し、ユーザーが利用する機能に応じた料金を自動的に計算・処理する仕組みも実装しました。",
        ],
      },
      {
        title: "スポーツ試合・番組ストリーミングサービスアプリの開発",
        elements: [
          "大手スポーツ放送局向けのスポーツ試合およびプログラムのストリーミングサービスの開発を担当しました。このプロジェクトでは、ライブストリーミングやオンデマンド配信機能を提供し、ユーザーが多様なスポーツコンテンツをいつでもどこでも視聴できるようにすることを目指しました。ユーザー体験を向上させるために、インタラクティブな機能や高画質なストリーミング技術を実装しました。",
        ],
      },
    ],
  }, */
  /*  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }, */
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Android E-Reader",
    description:
      "Android E-Reader・Noteアプリは、電子書籍の読書とノート作成を一体化した便利なアプリケーションです。ユーザーは電子書籍を快適に読みながら、重要な部分にメモを取ったり、マーカーを付けたりすることができます。直感的なUIと多機能なツールにより、読書体験を向上させるだけでなく、学習や情報整理にも役立ちます。フォントのサイズや背景色のカスタマイズ、ノートの整理機能など、多様な機能を備えたこのアプリは、読書愛好家や学生にとって理想的なツールです。",
    tags: [
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "jetpack compose",
        color: "blue-text-gradient",
      },
      {
        name: "kotlin",
        color: "pink-text-gradient",
      },
      {
        name: "java",
        color: "yellow-text-gradient",
      },
    ],
    image: pdfReaderImage,
    source_code_link: "https://github.com/vanquisher2000/pdf-reader-memorize",
    play_link: "https://youtu.be/1myMFi2w_uU",
  },
  {
    name: "time tracker calender integration",
    description:
      "Time Trackerカレンダー統合Flutterアプリは、時間管理とスケジュール管理をシームレスに統合したアプリケーションです。このアプリを使用すると、ユーザーは日々の活動を追跡し、カレンダーと連携して予定を効率的に管理することができます。直感的なUIと使いやすい機能により、ユーザーはタスクの追加、編集、削除、そして進捗状況の確認が簡単に行えます。時間管理をより効果的にするための便利なツールとして、多忙なプロフェッショナルや学生に最適です。",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: calTrackerImage,
    source_code_link: "https://github.com/vanquisher2000/cal-time-tracker",
    play_link: "https://youtube.com/shorts/6IHXT_BmNLU?feature=share",
  },

  {
    name: "don't get caught",
    description: "黄色い魚を避けながら泡を潰そう: 行きたい方向をタップして操作",

    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fishGameImage,
    source_code_link: "https://github.com/vanquisher2000/vanilla-ja-2d-game",
    play_link: "/games/fish-game/index.html",
  },
  {
    name: "四目並べ",
    description:
      "四目並べは、2人で対戦するクラシックなボードゲームです。プレイヤーは交互に自分の色のディスクを縦、横、または斜めに4つ連続で並べることを目指します。ゲームは7列×6行のグリッドで行われ、各ターンごとにプレイヤーはディスクを1つずつ任意の列に落とします。最初に4つのディスクを連続して並べたプレイヤーが勝利となります。シンプルながらも戦略性が高く、子供から大人まで楽しめるゲームです。",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: connectFourImage,
    source_code_link:
      "https://github.com/vanquisher2000/vanilla-js/tree/8f77d5710ef3f1b579feff944ebc9b342acf41a6/grid%20based%20games/connect-four",
    play_link: "/_connect-four/",
  },
  {
    name: "もぐらたたきゲーム",
    description:
      "もぐらたたきゲームは、プレイヤーが穴から出てくるもぐらをハンマーで叩くシンプルで楽しいアーケードゲームです。制限時間内にできるだけ多くのもぐらを叩いてスコアを稼ぐことが目標です。反射神経と素早い手の動きを要求するこのゲームは、子供から大人まで幅広い年齢層に楽しまれています",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: whackAMoleImage,
    source_code_link:
      "https://github.com/vanquisher2000/vanilla-js/tree/8f77d5710ef3f1b579feff944ebc9b342acf41a6/grid%20based%20games/whach-a-mole",
    play_link: "_whach-a-mole/index.html",
  },
  {
    name: "日本人口",
    description: "D3.js,reactを使って日本人口のデータの可視化",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "D3.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: populationChartImage,
    source_code_link: "https://github.com/vanquisher2000/portofolio",
    play_link: "/population-chart/index.html",
  },
  {
    name: "Dフロッガー",
    description:
      "Dフロッガーは、クラシックなゲーム「フロッガー」にインスパイアされたアーケードスタイルのビデオゲームです。プレイヤーはカエルを操作して、忙しい道路や川を渡り、障害物を避けて安全地帯に到達します。このゲームは、素早い反射神経と戦略的な計画が求められ、カエルを目的地まで導く楽しさと挑戦を提供します。鮮やかなグラフィックスと魅力的なゲームプレイで、幅広い年齢層のプレイヤーに楽しんでいただけるゲームです。",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: froggerImage,
    source_code_link:
      "https://github.com/vanquisher2000/vanilla-js/tree/8f77d5710ef3f1b579feff944ebc9b342acf41a6/grid%20based%20games/frogger",
    play_link: "_frogger/index.html",
  },
  {
    name: "snake",
    description:
      "スネークゲームは、シンプルで中毒性のあるクラシックなアーケードゲームです。プレイヤーは画面上の蛇を操作し、食べ物を集めて蛇を長く成長させます。食べ物を食べるたびに蛇の体が長くなり、ゲームの難易度が上がります。蛇の頭が自分の体や画面の壁にぶつからないように注意しながら、できるだけ長く生き残ることを目指します。直感的な操作とエキサイティングなゲームプレイで、スネークゲームは多くのプレイヤーに愛され続けています。",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: snakeImage,
    source_code_link:
      "https://github.com/vanquisher2000/vanilla-js/tree/8f77d5710ef3f1b579feff944ebc9b342acf41a6/grid%20based%20games/snake",
    play_link: "_snake/index.html",
  },
  {
    name: "スペースインベーダー",
    description:
      "スペースインベーダーは、1978年に登場したクラシックなアーケードシューティングゲームです。プレイヤーは画面下部に位置するキャノンを操作し、上から降りてくるエイリアンの隊列を撃ち落とします。エイリアンは徐々にスピードを上げて接近し、プレイヤーは全てのエイリアンを倒して次のレベルに進むことを目指します。シンプルな操作性とエキサイティングなゲームプレイにより、スペースインベーダーはビデオゲーム史上の象徴的な作品となり、幅広い世代にわたって愛され続けています。",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: spaceInvaderImage,
    source_code_link:
      "https://github.com/vanquisher2000/vanilla-js/tree/8f77d5710ef3f1b579feff944ebc9b342acf41a6/grid%20based%20games/space-invader",
    play_link: "_space-invader/index.html",
  },
  {
    name: "テキストアニメーション",
    description: "マウスを動かすとテキストが粒子化！",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: textAnimationImage,
    source_code_link:
      "https://github.com/vanquisher2000/vanilla-js-text-animation",
    play_link: "/interactive-text-tool/index.html",
  },
];

export { services, technologies, experiences, testimonials, projects };
