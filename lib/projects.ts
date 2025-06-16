export type ProjectType = "frontend" | "game" | "backend" | "app";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  type: ProjectType | ProjectType[];
  image: string;
  images?: string[];
  period: string;
  technologies: string[];
  github?: string;
  demo?: string;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  // チーム情報
  teamSize?: number;
  teamMembers?: string[];
  myRole?: string;
  // ゲーム専用フィールド
  gameControls?: string[];
  gameGenre?: string;
  gameFeatures?: string[];
  pdf?: string;
}

export const projects: Project[] = [
  {
    id: "su-243-thievesofegypt",
    title: "ソリティアエジプトの盗賊",
    description: "クロンダイク系限界思考に挑戦！",
    longDescription:
      "2組のトランプを使用したソリティアゲーム「ソリティアエジプトの盗賊」登場。ルールに従いつつ「場札」、「山札」のカードを「組札」の位置へ同じマークのカードをA～Kの順番に置いていきましょう。山札でめくれるカードは2周まで。「場札」のカードで移動できるカードを見逃さないように全体を見つつ、カードをならべていきましょう。 ",
    type: "game",
    image: "/img/su_243_1.png",
    images: ["/img/su_243_2.png", "/img/su_243_1.png", "/img/su_243_3.png"],
    period: "2023.04 - 2023.05",
    technologies: [
      "JavaScript",
      "Pixi.js",
      "HTML5",
      "Tween.js (Animation)",
      "Web Audio API",
    ],
    teamSize: 3,
    demo: "https://h5games.success-corp.co.jp/game/play/su-243-thievesofegypt",
    myRole: "ゲーム開発者（個人開発）",
    gameGenre: "カードゲーム・ソリティア",
    gameControls: ["マウスクリックでカード操作", "ドラッグ&ドロップ"],
    gameFeatures: [
      "スムーズなカードアニメーション",
      "複数の難易度レベル",
      "スコアシステム",
      "ヒント機能",
      "戻る機能",
      "美しいエフェクト",
    ],
    challenges: [
      "カードゲームロジックの実装",
      "スムーズなアニメーション最適化",
      "戻る機能の実装",
    ],
    learnings: [
      "Pixi.jsライブラリの活用",
      "ゲーム開発パターン",
      "アニメーション最適化技法",
      "カードゲームアルゴリズム",
    ],
  },
  {
    id: "igo",
    title: "囲碁",
    description: "Gnugo思考エンジンと戦ってみよう!",
    longDescription:
      "アマチュアの有段者と互角に戦える思考エンジンを搭載。難易度は10段階から選べ、盤面は19路、13路、9路盤にも対応。",
    type: "game",
    image: "/img/su_igo_3.png",
    demo: "https://www.sugotoku.docomo.ne.jp/cs/cpsite.html?url=https://d.honkakuha.success-games.net/game/sugo-igo/GameMain.php",
    images: [
      "/img/su_igo.png",
      "/img/su_igo_2.png",
      "/img/su_igo_3.png",
      "/img/su_igo_4.png",
    ],
    period: "2023.06 - 2023.07",
    technologies: [
      "JavaScript",
      "Pixi.js",
      "HTML5",
      "GnuGo (AI)",
      "Tween.js (Animation)",
      "Web Audio API",
      "Ajax",
    ],
    teamSize: 3,
    myRole: "ゲーム開発者（個人開発）",
    gameGenre: "ボードゲーム・戦略",
    gameControls: ["マウスクリックで石を配置"],
    gameFeatures: [
      "伝統的な囲碁ルール",
      "AI対戦機能",
      "複数の難易度レベル",
      "ゲーム記録機能",
      "ヒント機能",
    ],
    challenges: ["GnuGOとの連動"],
    learnings: ["Gnugo", "Ajax利用方法"],
  },
  {
    id: "number4ever",
    title: "永遠の数字パズル",
    description: "数字を永遠にマージしていくパズル",
    longDescription:
      "数字のコマ同士を合体させ続ける「永遠の数字パズル」登場！数字のコマが盤面に一杯になる前に同じ数字のコマを4つ以上まとめて合体させよう。盤面をよく見つつ合体できるコマ同士を見つけ出してどんどんマージしよう！",
    type: "game",
    demo: "https://h5games.success-corp.co.jp/game/play/su-247-number4ever",
    image: "/img/su_247_3.png",
    images: [
      "/img/su_247.png",
      "/img/su_247_2.png",
      "/img/su_247_3.png",
      "/img/su_247_4.png",
    ],
    period: "2023.09 - 2023.10",
    technologies: [
      "JavaScript",
      "Pixi.js",
      "HTML5",
      "Tween.js (Animation)",
      "Web Audio API",
    ],
    teamSize: 3,
    myRole: "ゲーム開発者（個人開発）",
    gameGenre: "パズル・論理",
    gameControls: ["マウス操作"],
    gameFeatures: ["6個のランダムマップ", "ハイスコア"],
    challenges: [
      "BFS & DFS アルゴリズムを利用した最短距離",
      "ゲームロジック実装",
    ],
    learnings: ["ゲームロジック", "非同期"],
  },
  {
    id: "cupid-training",
    title: "キューピッド練習中",
    description: "愛の矢を放つアクションパズルゲーム",
    longDescription:
      "キューピッドとなって愛の矢を放ち、カップルを成立させるアクションパズルゲームです。物理エンジンを活用した矢の軌道計算と、創意工夫が必要なステージ設計で、プレイヤーに挑戦的で楽しい体験を提供します。",
    type: "game",
    demo: "https://h5games.success-corp.co.jp/game/play/su-259-cupidtraining",
    image: "/img/su_259_4.png",
    images: [
      "/img/su_259.png",
      "/img/su_259_2.png",
      "/img/su_259_3.png",
      "/img/su_259_4.png",
    ],
    period: "2023.12 - 2024.01",
    technologies: [
      "JavaScript",
      "Pixi.js",
      "Matter js",
      "HTML5",
      "Tween.js (Animation)",
      "Web Audio API",
    ],
    teamSize: 3,
    myRole: "ゲーム開発者（個人開発）",
    gameGenre: "アクションパズル",
    gameControls: ["マウスで矢の方向調整", "クリックで発射"],
    gameFeatures: ["ステージ1000個", "タイマー", "ハイスコア", "データ保存"],
    challenges: ["ステージ1000個自動生成", "当たり判定"],
    learnings: ["Matter.jsを利用した当たり判定", "レベルデザイン"],
  },
  {
    id: "siritori",
    title: "んがつくしりとり",
    description: "“ん”で終わらせるしりとりゲーム",
    longDescription:
      "最後に“ん”がつく3文字以上の言葉を入力してしりとりを終わらせるゲームです。1分間で6題出題されるのでサクッと集中的に遊べます。",
    type: "game",
    demo: "https://h5games.success-corp.co.jp/game/play/su-268-endshiritori",
    image: "/img/siritori/img1.png?height=400&width=600",
    images: [
      "/img/siritori/img1.png?height=400&width=600",
      "/img/siritori/img2.png?height=400&width=600",
      "/img/siritori/img3.png?height=400&width=600",
      "/img/siritori/img4.png?height=400&width=600",
    ],
    period: "2024.02 - 2024.03",
    technologies: [
      "JavaScript",
      "Pixi.js",
      "HTML5",
      "Tween.js (Animation)",
      "Web Audio API",
    ],
    myRole: "ゲーム開発者（個人開発）",
    gameGenre: "カジュアル",
    gameControls: ["マウスで操作", "キーボードで入力"],
    gameFeatures: ["ハイスコア"],
    challenges: ["辞書ファイルの読み込む", "モバイル対応"],
    learnings: ["辞書ファイルの読み込む方法"],
  },
  {
    id: "killer-nanple",
    title: "キラーナンプレ",
    description: "通常のナンプレと加算ナンプレの要素が合体！",
    longDescription:
      "通常のナンプレと囲まれた枠内の数字を加算してマスを埋める加算ナンプレの要素をあわせもつ「キラーナンプレ1000！」、2つの解法を使える楽しく刺激的な一味違ったおすすめパズルゲームです。",
    type: "game",
    demo: "https://h5games.success-corp.co.jp/game/play/su-268-endshiritori",
    image: "/img/killer/img1.png?height=400&width=600",
    images: [
      "/img/killer/img1.png?height=400&width=600",
      "/img/killer/img2.png?height=400&width=600",
      "/img/killer/img3.png?height=400&width=600",
      "/img/killer/img4.png?height=400&width=600",
    ],
    period: "2024.05 - 2024.06",
    technologies: [
      "JavaScript",
      "Pixi.js",
      "HTML5",
      "Tween.js (Animation)",
      "Web Audio API",
    ],
    myRole: "ゲーム開発者（個人開発）",
    gameGenre: "アクションパズル",
    gameControls: ["マウスで操作"],
    gameFeatures: [
      "ステージ1000個",
      "データ保存",
      "ハイスコア",
      "ヒント機能",
      "メモ機能",
    ],
    challenges: ["ステージ1000個自動生成", "ゲームロジック"],
    learnings: ["ゲームロジック", "レベルデザイン"],
  },
  {
    id: "sol-flower",
    title: "ソリティアフラワーガーデン",
    description: "通常のナンプレと加算ナンプレの要素が合体！",
    longDescription:
      "マークごとに場札を整理する必要がなく、必要なカードを取りだすためのカード移動の縛りが少ないソリティアです。春を思わせるタイトルどおり、自由度が高く軽やかにお楽しみいただけます。 ",
    type: "game",
    demo: "https://www.sugotoku.docomo.ne.jp/cs/cpsite.html?url=https://d.honkakuha.success-games.net/game/su-285-solitaireflowergarden/GameMain.php",
    image: "/img/flower/img1.png?height=400&width=600",
    images: [
      "/img/flower/img1.png?height=400&width=600",
      "/img/flower/img2.png?height=400&width=600",
      "/img/flower/img3.png?height=400&width=600",
    ],
    period: "2025.01 - 2025.02",
    technologies: [
      "JavaScript",
      "Pixi.js",
      "HTML5",
      "Tween.js (Animation)",
      "Web Audio API",
    ],
    myRole: "ゲーム開発者（個人開発）",
    gameGenre: "ボードゲーム",
    gameControls: ["マウスで操作"],
    gameFeatures: [
      "スムーズなカードアニメーション",
      "複数の難易度レベル",
      "スコアシステム",
      "ヒント機能",
      "戻る機能",
      "美しいエフェクト",
    ],
    challenges: [
      "カードゲームロジックの実装",
      "スムーズなアニメーション最適化",
      "戻る機能の実装",
    ],
    learnings: [
      "Pixi.jsライブラリの活用",
      "ゲーム開発パターン",
      "アニメーション最適化技法",
      "カードゲームアルゴリズム",
    ],
  },
  {
    id: "switch-korokoro",
    title: "スイッチコロコロ",
    description: "物理エンジンを活用してボールを目標地点まで動かすパズルゲーム",
    longDescription:
      "このゲームは、物理エンジンを活用してボールを目標地点まで動かすパズルゲームです。私はAPI (Laravel)の開発を担当しており、ステージの保存、削除、更新の機能を実装しました。また、自社のゲームポータルサイト「ゲームの窓」との会員連携機能やランキング連携機能も実装しています。さらに、Swaggerを使用してAPIドキュメントも提供しており、開発者がAPIの使い方を簡単に理解できるようにしています。これにより、ユーザーは自分の進捗やスコアを簡単に管理でき、他のプレイヤーと競い合うことができるようになっています。",
    type: "backend",
    demo: "https://h5games.success-corp.co.jp/game/play/su-266-switchkorokoro",
    image: "/img/su_266.png",
    images: [
      "/img/su_266.png",
      "/img/su_266_2.png",
      "/img/su_266_3.png",
      "/img/su_266_4.png",
    ],
    period: "2024.01 - 2024.03",
    technologies: ["Laravel", "MySQL", "Swagger", "JWT Auth"],
    teamSize: 3,
    features: [
      "ステージ　作成・削除・更新",
      "ゲーム窓とランキング連動",
      "ゲーム窓の会員連動機能",
    ],
    challenges: ["セッション", "ステージのソート機能"],
    learnings: ["Tokenを利用したログイン機能", "Swaggerの使用方法"],
  },
  {
    id: "ckmate",
    title: "チェックメイト",
    demo: "https://ckmate.jhpdev.xyz",
    github: "https://github.com/JHPDEVS/CheckMate-vue-laravel",
    description: "出席と出席管理をもっと便利に！",
    longDescription:
      "このプロジェクトは、授業中の出席確認の手間を軽減するために、Geofencing APIを利用した位置情報ベースの出席チェックシステムを開発しました。私はフロントエンドとインフラの担当をし、チームリーダーとしてプロジェクトを推進しました。また、レスポンシブウェブデザインを採用しており、モバイル環境でも問題なく利用できるようにしています。",
    type: ["frontend", "app"],
    image: "/img/ckmate/img1.png?height=200&width=300",
    images: [
      "/img/ckmate/img1.png?height=200&width=300",
      "/img/ckmate/img2.png?height=200&width=300",
      "/img/ckmate/img3.png?height=200&width=300",
      "/img/ckmate/img4.png?height=200&width=300",
      "/img/ckmate/img5.png?height=200&width=300",
    ],
    pdf: "/pdf/ckmate.pdf",
    period: "2021.06 - 2021.08",
    technologies: [
      "Vue.js",
      "Laravel",
      "Tailwind CSS",
      "MariaDB",
      "Chart.js",
      "Kakaomap",
      "Android",
    ],
    teamSize: 4,
    features: [
      "レスポンシブ対応",
      "Geofencing APIを利用した出席システム",
      "管理画面",
    ],
    challenges: ["インフラ", "レスポンシブ対応", "oAuth (Kakao)"],
  },
  {
    id: "manakai",
    title: "Mankai",
    github: "https://github.com/mankai-wdj",
    description:
      "チャットとビデオチャットで世界中の人と意思疎通できるコミュニケーションサービス",
    longDescription:
      "このプロジェクトは卒業プロジェクトであり、6人のチームを構成して取り組んでいます。私はチームリーダーとして、インフラ、フロントエンド、アプリの開発を担当しました。このプロジェクトの主要な機能は、ミディアサーバー（OpenVidu）を利用したリアルタイムビデオチャットであり、翻訳機能も備えています。",
    type: ["frontend", "app"],
    image: "/img/mankai/img1.png?height=200&width=300",
    pdf: "/pdf/mankai.pdf",
    period: "2022.02 - 2022.05",
    technologies: [
      "React.js",
      "Laravel",
      "Tailwind CSS",
      "Websocket",
      "MUI",
      "MySQL",
      "OpenVidu",
      "Redux",
      "aws",
      "Papapgo API",
      "Android",
      "FCM",
    ],
    teamSize: 6,
    features: [
      "レスポンシブ対応",
      "ビデオチャット",
      "チャット",
      "翻訳機能",
      "画面共有",
      "FCMを利用した通知機能",
    ],
    challenges: ["ビデオチャット", "リアルタイム翻訳"],
  },
  {
    id: "foodmap",
    title: "FoodMap",
    demo: "https://foodmap.jhpdev.xyz",
    github: "https://github.com/JHPDEVS/foodmap-web",
    description: "ダイエットのサポート!",
    longDescription:
      "このプロジェクトは、校内のウェブプログラミング大会に出品し、見事入賞を果たしました。韓国政府の公的データAPIを利用して食品情報を取得し、レシピサイトのデータはHTMLパーサーを使用して収集しています。フロントエンドにはVue.jsを、バックエンドにはLaravelを使用して開発しました。",
    type: ["frontend", "backend"],
    image: "/img/foodmap/img1.png?height=200&width=300",
    images: [
      "/img/foodmap/img1.png?height=200&width=300",
      "/img/foodmap/img2.png?height=200&width=300",
      "/img/foodmap/img3.png?height=200&width=300",
      "/img/foodmap/img4.png?height=200&width=300",
      "/img/foodmap/img5.png?height=200&width=300",
    ],
    pdf: "/pdf/foodmap.pdf",
    period: "2021.11 - 2021.12",
    technologies: [
      "Vue.js",
      "Laravel",
      "Tailwind CSS",
      "Html Parser",
      "SQLite",
      "Docker",
      "Node",
    ],
    features: ["レスポンシブ対応", "レシピ確認", "食べ物の栄養状態確認"],
    challenges: ["プロキシサーバー実装", "フルスタック", "Html パーシング"],
  },
  {
    id: "tvshow",
    title: "テレビグルメ",
    demo: "https://tvshow.jhpdev.xyz",
    github: "https://github.com/JHPDEVS/tvShow-food-map",
    description: "テレビで放送されたグルメを一気に見る!",
    longDescription:
      "このプロジェクトは、テレビで紹介された美味しいお店を簡単に探すことができるプラットフォームです。美味しいお店のデータや評価は、JSON-serverを使用して管理しています。また、レスポンシブデザインを採用しており、モバイルでもユーザーフレンドリーなUIを提供しています。さらに、地図APIにはKAKAO MAPを、動画検索にはKAKAO検索APIを利用しています。",
    type: ["frontend"],
    image: "/img/tvshow/img1.png?height=200&width=300",
    images: [
      "/img/tvshow/img1.png?height=200&width=300",
      "/img/tvshow/img2.png?height=200&width=300",
      "/img/tvshow/img3.png?height=200&width=300",
    ],
    period: "2022.08 - 2022.08",
    technologies: [
      "React.js",
      "JSON Server",
      "Tailwind CSS",
      "Kakao Map",
      "Kakao 検索 API",
    ],
    features: ["レスポンシブ対応", "評価機能", "グルメ検索"],
    challenges: ["JSON-SERVER"],
  },
  {
    id: "oekaki-editor",
    title: "お絵かきパズルエディター",
    description: "自社ゲーム「お絵かきパズル」のステージエディター",
    longDescription:
      "自社ゲーム「お絵かきパズル」の問題を管理するためのサイトです。フロントエンドにはReactを使用し、バックエンドにはLaravelを採用しています。このサイトでは、ゲームのステージや問題の管理を効率的に行うことができ、快適に操作できるインターフェースを提供しています。さらに、データの管理や更新がスムーズに行えるように設計されており、管理者にとって便利なツールとなっています。",
    type: ["frontend", "backend"],
    image: "/img/oekaki/img1.png?height=200&width=300",
    images: [
      "/img/oekaki/img1.png?height=400&width=600",
      "/img/oekaki/img2.png?height=400&width=600",
      "/img/oekaki/img3.png?height=400&width=600",
      "/img/oekaki/img4.png?height=400&width=600",
      "/img/oekaki/img5.png?height=400&width=600",
      "/img/oekaki/img6.png?height=400&width=600",
    ],
    period: "2023.06 - 2023.07",
    technologies: [
      "React.js",
      "Laravel",
      "Redux",
      "Tailwind CSS",
      "MySQL",
      "翻訳API",
    ],
    teamSize: 1,
    features: [
      "問題 作成・削除・更新",
      "問題データダウンロード機能 (CSV)",
      "問題タイトル翻訳機能",
    ],
    challenges: [
      "Canvas APIの勉強",
      "フルスタック挑戦",
      "問題タイトル翻訳機能",
      "問題データ CSV　ダウンロード機能",
    ],
  },
  {
    id: "qupid-editor",
    title: "キューピッド練習中ステージエディター",
    description: "自社ゲーム「キューピッド練習中」のステージエディター",
    longDescription:
      "自社ゲーム「キューピッド練習中」の問題を管理するためのサイトです。フロントエンドにはReactを使用し、バックエンドにはLaravelを採用しています。このサイトでは、ゲームのステージや問題の管理を効率的に行うことができ、快適に操作できるインターフェースを提供しています。さらに、データの管理や更新がスムーズに行えるように設計されており、管理者にとって便利なツールとなっています。",
    type: ["frontend", "backend"],
    image: "/img/qupid/img2.png?height=200&width=300",
    images: [
      "/img/qupid/img1.png?height=400&width=600",
      "/img/qupid/img2.png?height=400&width=600",
      "/img/qupid/img3.png?height=400&width=600",
    ],
    period: "2023.11 - 2023.12",
    technologies: [
      "React.js",
      "React-Pixi",
      "Laravel",
      "Redux",
      "Tailwind CSS",
      "MySQL",
      "JSON",
      "iFrame",
    ],
    teamSize: 1,
    features: [
      "ステージ 作成・削除・更新",
      "問題データダウンロード機能 (JSON)",
      "作成したステージテスト機能",
    ],
    challenges: [
      "pixi-reactの勉強",
      "フルスタック挑戦",
      "問題データ JSON　ダウンロード機能",
    ],
  },
  {
    id: "game-mado",
    title: "ゲームの窓 Android アプリ",
    description: "Kotlinで作成したWebViewベースのゲームプラットフォームアプリ",
    longDescription:
      "本アプリは、「ゲームの窓」サイトを基にしたWebView型のAndroidアプリケーションです。ユーザーは、豊富なゲームコンテンツに簡単にアクセスでき、直感的なインターフェースを通じて快適なプレイ体験を享受できます。スマートフォンで簡単に接続でき、外出先でも手軽にゲームを楽しむことができます。",
    type: "app",
    image: "/img/mado0.png",
    images: [
      "/img/mado0.png",
      "/img/mado1.png",
      "/img/mado2.png",
      "/img/mado3.png",
    ],
    period: "2023.10 - 2023.10",
    technologies: ["Kotlin", "Android WebView", "Android SDK"],
    demo: "https://play.google.com/store/apps/details?id=jp.co.successcorp.h5games&hl=ja&pli=1",
    teamSize: 1,
    myRole: "Androidアプリ開発者（個人開発）",
    features: [
      "WebViewベースのゲームプラットフォーム",
      "直感的なユーザーインターフェース",
      "豊富なゲームコンテンツへのアクセス",
      "スムーズなナビゲーション",
      "オフライン対応機能",
    ],
    challenges: [
      "Kotlinでの初回アプリ開発",
      "WebViewの最適化",
      "ユーザーエクスペリエンス向上",
      "パフォーマンス最適化",
    ],
    learnings: [
      "Kotlin言語習得",
      "Android WebView活用",
      "Androidアプリ開発ワークフロー",
      "Google Play Store公開プロセス",
    ],
  },
  {
    id: "school-app",
    title: "学校アプリ",
    description: "アレルギー対応給食情報とお知らせ機能を備えた学校公式アプリ",
    longDescription:
      "このアプリは、アレルギーのために学校の給食を食べられない友人を見て、彼らが安心して給食を楽しめるように作成されました。アプリ内では、アレルギーに関する情報を提供し、給食メニューを確認できる機能を追加しています。\n\nさらに、以下の機能も搭載しています：\nお知らせ機能: 学校からのお知らせや重要な情報をタイムリーに受け取ることができます。\n大会情報: 各種大会やイベントに関する情報を確認できます。\n時間割表示: 学校の時間割を簡単に確認できる機能も備えています。\n\nこのアプリはGoogle Playストアにアップロードされ、約400人のユーザーに利用されました。さらに、学校からは公式アプリとして認定され、多くの生徒たちに役立っています。このプロジェクトを通じて、友人たちがより安全に給食を楽しむ手助けができたことを嬉しく思っています。",
    type: "app",
    image: "/img/school_app_1.png",
    images: [
      "/img/school_app_1.png",
      "/img/school_app_2.png",
      "/img/school_app_3.png",
      "/img/school_app_4.png",
    ],
    period: "2016.11 - 2017.02",
    technologies: ["Java", "Android SDK", "RSS Parser"],
    github: "https://github.com/JHPDEVS/BanseokSchool",
    teamSize: 1,
    myRole: "Androidアプリ開発者（個人開発）",
    features: [
      "お知らせ機能（RSS連携）",
      "給食メニューの確認（アレルギー対応）",
      "大会情報表示",
      "時間割表示機能",
      "学校公式認定アプリ",
      "約400人のユーザー利用",
    ],
    challenges: [
      "初のAndroidネイティブアプリの開発",
      "給食APIの呼び出しと解析",
      "RSSパーサーの実装",
      "アレルギー情報の安全な表示",
      "学校システムとの連携",
    ],
    learnings: [
      "JavaによるAndroidアプリ開発ワークフロー",
      "Androidアプリのアーキテクチャ設計",
      "外部APIとの連携方法",
      "ユーザーニーズに基づく機能設計",
      "Google Play Storeへのデプロイプロセス",
      "実際のユーザーフィードバック対応",
    ],
  },
  {
    id: "nanple-editor",
    title: "ナンプレ 定番ゲーム",
    description:
      "自社ゲームアプリ「ナンプレ 定番ゲーム」のAPI及び利用契約サイト",
    longDescription:
      "自社ゲーム「ナンプレ 定番ゲーム」ゲーム内のプライバシーポリシー関連 API の設計・実装を担当しました。加えて、プライバシーポリシーの編集及び確認が可能な専用サイトの開発も行い、モバイルレスポンシブ対応に加え、React-i18next を用いた多言語対応を実現しました。API は Laravel で開発し、アプリのアップデート確認機能も含めたシステム全体の構築を行いました。",
    type: ["frontend", "backend"],
    image: "/img/nanple-api/img1.png?height=200&width=300",
    images: [
      "/img/nanple-api/img0.png?height=335&width=788",
      "/img/nanple-api/img2.png?height=200&width=300",
      "/img/nanple-api/img3.png?height=335&width=788",
      "/img/nanple-api/img4.png?height=335&width=788",
    ],
    period: "2023.08 - 2023.09",
    technologies: [
      "React.js",
      "Laravel",
      "Redux",
      "Tailwind CSS",
      "MySQL",
      "React-i18n",
    ],
    teamSize: 3,
    features: [
      "レスポンシブ対応",
      "利用契約とプライバシーポリシーの編集機能",
      "アプリのアップデート確認API",
    ],
    challenges: ["フルスタック挑戦", "HTML5 エディター", "アプリのAPI"],
  },
];

// IDでプロジェクトを取得
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

// タイプでプロジェクトを取得
export function getProjectsByType(type: ProjectType): Project[] {
  return projects.filter((project) => {
    if (Array.isArray(project.type)) {
      return project.type.includes(type);
    }
    return project.type === type;
  });
}

export function getProjectTypes(project: Project): ProjectType[] {
  return Array.isArray(project.type) ? project.type : [project.type];
}

export function hasProjectType(project: Project, type: ProjectType): boolean {
  return getProjectTypes(project).includes(type);
}
