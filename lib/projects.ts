export type ProjectType = "game" | "frontend" | "backend" | "app";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  type: ProjectType;
  image: string;
  images: string[];
  period: string;
  technologies: string[];
  github?: string;
  demo?: string; // オプション
  features: string[];
  challenges: string[];
  learnings: string[];
  // ゲーム専用フィールド
  gameControls?: string[];
  gameGenre?: string;
  gameFeatures?: string[];
}

export const projects: Project[] = [
  {
    id: "su-243-thievesofegypt",
    title: "ソリティアエジプトの盗賊",
    description: "Pixi.jsを使用して開発したインタラクティブなカードゲーム",
    longDescription:
      "クラシックなアーケードスタイルの2D宇宙船シューティングゲームです。HTML5 Canvas APIを活用してスムーズなアニメーションと衝突検知システムを実装しました。様々な敵パターン、パワーアップシステム、スコアシステムなどゲームの核心要素を全て含んでいます。",
    type: "game",
    image: "/img/su_243_1.png?height=200&width=300",
    images: [
      "/img/su_243_2.png?height=400&width=600",
      "/img/su_243_1.png?height=400&width=600",
      "/img/su_243_3.png?height=400&width=600",
    ],
    period: "2023.04 - 2023.05",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Web Audio API"],
    demo: "https://h5games.success-corp.co.jp/game/play/su-243-thievesofegypt",
    gameGenre: "アーケードシューティング",
    gameControls: ["矢印キーで移動", "スペースキーで発射", "Pキーで一時停止"],
    gameFeatures: [
      "滑らかな60FPSゲームプレイ",
      "様々な敵パターンとAI",
      "パワーアップと武器アップグレード",
      "ボス戦闘システム",
      "ハイスコア保存",
      "サウンドエフェクトとBGM",
    ],
    features: [
      "HTML5 Canvasベースレンダリング",
      "衝突検知システム",
      "パーティクルエフェクト",
      "ゲーム状態管理",
      "ローカルストレージスコア保存",
      "レスポンシブゲーム画面",
    ],
    challenges: [
      "60FPS維持のためのパフォーマンス最適化",
      "正確な衝突検知アルゴリズム実装",
      "ゲームループと状態管理",
      "クロスブラウザ互換性",
    ],
    learnings: [
      "Canvas API深化活用",
      "ゲーム開発パターンとアーキテクチャ",
      "パフォーマンス最適化技法",
      "ゲーム物理学基礎",
    ],
  },
  {
    id: "igo",
    title: "囲碁",
    description: "Unityで開発した3Dパズルアドベンチャーゲーム",
    longDescription:
      "Unityエンジンを使用して開発した3Dパズルアドベンチャーゲームです。プレイヤーは様々なパズルを解きながらストーリーを進めます。C#スクリプティングとUnityの物理エンジンを活用して現実的なインタラクションを実装しました。",
    type: "game",
    image: "/img/su_igo_3.png?height=200&width=300",
    images: [
      "/img/su_igo.png?height=400&width=600",
      "/img/su_igo_2.png?height=400&width=600",
      "/img/su_igo_3.png?height=400&width=600",
      "/img/su_igo_4.png?height=400&width=600",
    ],
    period: "2023.06 - 2023.07",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    gameGenre: "パズルアドベンチャー",
    gameControls: ["マウスで視点操作"],
    gameFeatures: [
      "30個以上の独創的なパズル",
      "没入感のある3D環境",
      "物理ベースインタラクション",
      "進行度保存システム",
      "多言語サポート",
    ],
    features: [
      "Unity 3Dエンジン活用",
      "C#スクリプティング",
      "物理ベースパズルメカニズム",
      "セーブ/ロードシステム",
      "UI/UXデザイン",
    ],
    challenges: [
      "複雑なパズルロジック実装",
      "3Dモデリングとアニメーション",
      "パフォーマンス最適化",
      "クロスプラットフォーム互換性",
    ],
    learnings: [
      "Unityエンジン熟練度向上",
      "3Dゲーム開発ワークフロー",
      "ゲームデザイン原則",
      "ユーザーテストとフィードバック反映",
    ],
  },
  {
    id: "number",
    title: "永遠の数字パズル",
    description: "Unityで開発した3Dパズルアドベンチャーゲーム",
    longDescription:
      "Unityエンジンを使用して開発した3Dパズルアドベンチャーゲームです。プレイヤーは様々なパズルを解きながらストーリーを進めます。C#スクリプティングとUnityの物理エンジンを活用して現実的なインタラクションを実装しました。",
    type: "game",
    demo: "https://h5games.success-corp.co.jp/game/play/su-247-number4ever",
    image: "/img/su_247_3.png?height=800&width=640",
    images: [
      "/img/su_247.png?height=800&width=640",
      "/img/su_247_2.png?height=800&width=640",
      "/img/su_247_3.png?height=800&width=640",
      "/img/su_247_4.png?height=800&width=640",
    ],
    period: "2023.9 - 2023.10",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    gameGenre: "パズルアドベンチャー",
    gameControls: ["マウスで視点操作"],
    gameFeatures: [
      "30個以上の独創的なパズル",
      "没入感のある3D環境",
      "物理ベースインタラクション",
      "進行度保存システム",
      "多言語サポート",
    ],
    features: [
      "Unity 3Dエンジン活用",
      "C#スクリプティング",
      "物理ベースパズルメカニズム",
      "セーブ/ロードシステム",
      "UI/UXデザイン",
    ],
    challenges: [
      "複雑なパズルロジック実装",
      "3Dモデリングとアニメーション",
      "パフォーマンス最適化",
      "クロスプラットフォーム互換性",
    ],
    learnings: [
      "Unityエンジン熟練度向上",
      "3Dゲーム開発ワークフロー",
      "ゲームデザイン原則",
      "ユーザーテストとフィードバック反映",
    ],
  },
  {
    id: "qupid",
    title: "キューピッド練習中",
    description: "Unityで開発した3Dパズルアドベンチャーゲーム",
    longDescription:
      "Unityエンジンを使用して開発した3Dパズルアドベンチャーゲームです。プレイヤーは様々なパズルを解きながらストーリーを進めます。C#スクリプティングとUnityの物理エンジンを活用して現実的なインタラクションを実装しました。",
    type: "game",
    demo: "https://h5games.success-corp.co.jp/game/play/su-259-cupidtraining",
    image: "/img/su_259_4.png?height=800&width=640",
    images: [
      "/img/su_259.png?height=800&width=640",
      "/img/su_259_2.png?height=800&width=640",
      "/img/su_259_3.png?height=800&width=640",
      "/img/su_259_4.png?height=800&width=640",
    ],
    period: "2023.12 - 2024.01",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    gameGenre: "パズルアドベンチャー",
    gameControls: ["マウスで視点操作"],
    gameFeatures: [
      "30個以上の独創的なパズル",
      "没入感のある3D環境",
      "物理ベースインタラクション",
      "進行度保存システム",
      "多言語サポート",
    ],
    features: [
      "Unity 3Dエンジン活用",
      "C#スクリプティング",
      "物理ベースパズルメカニズム",
      "セーブ/ロードシステム",
      "UI/UXデザイン",
    ],
    challenges: [
      "複雑なパズルロジック実装",
      "3Dモデリングとアニメーション",
      "パフォーマンス最適化",
      "クロスプラットフォーム互換性",
    ],
    learnings: [
      "Unityエンジン熟練度向上",
      "3Dゲーム開発ワークフロー",
      "ゲームデザイン原則",
      "ユーザーテストとフィードバック反映",
    ],
  },
  {
    id: "qupid",
    title: "キューピッド練習中",
    description: "Unityで開発した3Dパズルアドベンチャーゲーム",
    longDescription:
      "Unityエンジンを使用して開発した3Dパズルアドベンチャーゲームです。プレイヤーは様々なパズルを解きながらストーリーを進めます。C#スクリプティングとUnityの物理エンジンを活用して現実的なインタラクションを実装しました。",
    type: "game",
    demo: "https://h5games.success-corp.co.jp/game/play/su-259-cupidtraining",
    image: "/img/su_259_4.png?height=800&width=640",
    images: [
      "/img/su_259.png?height=800&width=640",
      "/img/su_259_2.png?height=800&width=640",
      "/img/su_259_3.png?height=800&width=640",
      "/img/su_259_4.png?height=800&width=640",
    ],
    period: "2024.02 - 2024.03",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    gameGenre: "パズルアドベンチャー",
    gameControls: ["マウスで視点操作"],
    gameFeatures: [
      "30個以上の独創的なパズル",
      "没入感のある3D環境",
      "物理ベースインタラクション",
      "進行度保存システム",
      "多言語サポート",
    ],
    features: [
      "Unity 3Dエンジン活用",
      "C#スクリプティング",
      "物理ベースパズルメカニズム",
      "セーブ/ロードシステム",
      "UI/UXデザイン",
    ],
    challenges: [
      "複雑なパズルロジック実装",
      "3Dモデリングとアニメーション",
      "パフォーマンス最適化",
      "クロスプラットフォーム互換性",
    ],
    learnings: [
      "Unityエンジン熟練度向上",
      "3Dゲーム開発ワークフロー",
      "ゲームデザイン原則",
      "ユーザーテストとフィードバック反映",
    ],
  },
  {
    id: "killer-nanple",
    title: "スイッチコロコロ",
    description: "Unityで開発した3Dパズルアドベンチャーゲーム",
    longDescription:
      "Unityエンジンを使用して開発した3Dパズルアドベンチャーゲームです。プレイヤーは様々なパズルを解きながらストーリーを進めます。C#スクリプティングとUnityの物理エンジンを活用して現実的なインタラクションを実装しました。",
    type: "game",
    demo: "https://h5games.success-corp.co.jp/game/play/su-266-switchkorokoro",
    image: "/img/su_266.png?height=200&width=300",
    images: [
      "/img/su_266.png?height=400&width=600",
      "/img/su_266_2.png?height=400&width=600",
      "/img/su_266_3.png?height=400&width=600",
      "/img/su_266_4.png?height=400&width=600",
    ],
    period: "2024.01 - 2024.02",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    gameGenre: "パズルアドベンチャー",
    gameControls: ["マウスで視点操作"],
    gameFeatures: [
      "30個以上の独創的なパズル",
      "没入感のある3D環境",
      "物理ベースインタラクション",
      "進行度保存システム",
      "多言語サポート",
    ],
    features: [
      "Unity 3Dエンジン活用",
      "C#スクリプティング",
      "物理ベースパズルメカニズム",
      "セーブ/ロードシステム",
      "UI/UXデザイン",
    ],
    challenges: [
      "複雑なパズルロジック実装",
      "3Dモデリングとアニメーション",
      "パフォーマンス最適化",
      "クロスプラットフォーム互換性",
    ],
    learnings: [
      "Unityエンジン熟練度向上",
      "3Dゲーム開発ワークフロー",
      "ゲームデザイン原則",
      "ユーザーテストとフィードバック反映",
    ],
  },
  {
    id: "switchkorokro",
    title: "スイッチコロコロ",
    description: "Unityで開発した3Dパズルアドベンチャーゲーム",
    longDescription:
      "Unityエンジンを使用して開発した3Dパズルアドベンチャーゲームです。プレイヤーは様々なパズルを解きながらストーリーを進めます。C#スクリプティングとUnityの物理エンジンを活用して現実的なインタラクションを実装しました。",
    type: "game",
    demo: "https://h5games.success-corp.co.jp/game/play/su-266-switchkorokoro",
    image: "/img/su_266.png?height=200&width=300",
    images: [
      "/img/su_266.png?height=400&width=600",
      "/img/su_266_2.png?height=400&width=600",
      "/img/su_266_3.png?height=400&width=600",
      "/img/su_266_4.png?height=400&width=600",
    ],
    period: "2024.01 - 2024.03",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    gameGenre: "パズルアドベンチャー",
    gameControls: ["マウスで視点操作"],
    gameFeatures: [
      "30個以上の独創的なパズル",
      "没入感のある3D環境",
      "物理ベースインタラクション",
      "進行度保存システム",
      "多言語サポート",
    ],
    features: [
      "Unity 3Dエンジン活用",
      "C#スクリプティング",
      "物理ベースパズルメカニズム",
      "セーブ/ロードシステム",
      "UI/UXデザイン",
    ],
    challenges: [
      "複雑なパズルロジック実装",
      "3Dモデリングとアニメーション",
      "パフォーマンス最適化",
      "クロスプラットフォーム互換性",
    ],
    learnings: [
      "Unityエンジン熟練度向上",
      "3Dゲーム開発ワークフロー",
      "ゲームデザイン原則",
      "ユーザーテストとフィードバック反映",
    ],
  },
  {
    id: "portfolio-website",
    title: "ポートフォリオウェブサイト",
    description:
      "Next.jsとFramer Motionを活用したインタラクティブポートフォリオ",
    longDescription:
      "Next.js 13のApp RouterとFramer Motionを活用して制作した個人ポートフォリオウェブサイトです。現代的なデザインと滑らかなアニメーションでユーザーエクスペリエンスを最大化し、レスポンシブデザインで全てのデバイスで完璧に動作します。",
    type: "frontend",
    image: "/placeholder.svg?height=200&width=300",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    period: "2024.08 - 2024.09",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio-demo.vercel.app",
    features: [
      "レスポンシブデザイン",
      "滑らかなページ遷移アニメーション",
      "ダーク/ライトテーマサポート",
      "プロジェクトフィルタリングシステム",
      "お問い合わせフォーム",
      "SEO最適化",
    ],
    challenges: [
      "複雑なアニメーション実装",
      "パフォーマンス最適化",
      "アクセシビリティ改善",
      "SEO最適化",
    ],
    learnings: [
      "Next.js 13 App Router",
      "Framer Motionアニメーション",
      "パフォーマンス最適化技法",
      "ウェブアクセシビリティ標準",
    ],
  },
  {
    id: "api-server",
    title: "RESTful APIサーバー",
    description: "Node.jsとExpressを使用した拡張可能なバックエンドAPIサーバー",
    longDescription:
      "マイクロサービスアーキテクチャを基盤とした拡張可能なRESTful APIサーバーです。JWT認証、データベース最適化、キャッシング、ロギングなどプロダクションレベルのバックエンド機能を実装しました。Dockerを活用したコンテナ化とCI/CDパイプラインも構築しました。",
    type: "backend",
    image: "/placeholder.svg?height=200&width=300",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    period: "2024.01 - 2024.02",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
      "JWT",
      "Swagger",
    ],
    github: "https://github.com/username/api-server",
    features: [
      "RESTful API設計",
      "JWTベース認証システム",
      "データベース最適化",
      "Redisキャッシングシステム",
      "APIドキュメント化（Swagger）",
      "エラーハンドリングとロギング",
      "Dockerコンテナ化",
    ],
    challenges: [
      "API呼び出し最適化とキャッシング",
      "データベースクエリ最適化",
      "拡張可能なアーキテクチャ設計",
      "セキュリティ脆弱性対応",
    ],
    learnings: [
      "バックエンドアーキテクチャ設計",
      "データベース最適化技法",
      "キャッシング戦略と実装",
      "DevOpsとデプロイ自動化",
    ],
  },
  {
    id: "chat-server",
    title: "リアルタイムチャットサーバー",
    description: "Socket.ioを活用したリアルタイムチャットシステム",
    longDescription:
      "Socket.ioとNode.jsを活用して開発したリアルタイムチャットシステムです。マルチチャットルーム、ファイル転送、オンラインユーザー表示などの機能を実装し、Redisを活用したセッション管理とメッセージキャッシングでパフォーマンスを最適化しました。",
    type: "backend",
    image: "/placeholder.svg?height=200&width=300",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    period: "2024.05 - 2024.06",
    technologies: [
      "Node.js",
      "Socket.io",
      "Express",
      "MongoDB",
      "Redis",
      "JWT",
    ],
    github: "https://github.com/username/chat-server",
    features: [
      "リアルタイムメッセージ送信",
      "マルチチャットルームサポート",
      "ファイルと画像転送",
      "オンラインユーザー表示",
      "メッセージ履歴",
      "ユーザー認証と権限管理",
    ],
    challenges: [
      "リアルタイム通信最適化",
      "大容量同時接続処理",
      "メッセージ順序保証",
      "接続安定性確保",
    ],
    learnings: [
      "WebSocket通信原理",
      "リアルタイムシステムアーキテクチャ",
      "同時性処理",
      "システム拡張性設計",
    ],
  },
  {
    id: "todo-mobile-app",
    title: "ToDoモバイルアプリ",
    description: "React Nativeで開発したクロスプラットフォームToDo管理アプリ",
    longDescription:
      "React Nativeを使用して開発したクロスプラットフォームToDo管理アプリケーションです。iOSとAndroidの両方でネイティブレベルのパフォーマンスとユーザーエクスペリエンスを提供し、オフライン同期、プッシュ通知、ウィジェットなどのモバイル特化機能を実装しました。",
    type: "app",
    image: "/placeholder.svg?height=200&width=300",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    period: "2024.02 - 2024.04",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "SQLite",
      "Firebase",
      "Expo",
    ],
    github: "https://github.com/username/todo-mobile-app",
    features: [
      "クロスプラットフォームサポート（iOS/Android）",
      "オフライン同期",
      "プッシュ通知",
      "ウィジェットサポート",
      "ダーク/ライトテーマ",
      "カテゴリ別ToDo管理",
      "統計と分析",
    ],
    challenges: [
      "ネイティブモジュール統合",
      "オフラインデータ同期",
      "プラットフォーム別UI/UX最適化",
      "パフォーマンス最適化",
    ],
    learnings: [
      "React Native開発ワークフロー",
      "モバイルアプリアーキテクチャ",
      "ネイティブ機能活用",
      "アプリストアデプロイプロセス",
    ],
  },
  {
    id: "fitness-tracker-app",
    title: "フィットネストラッカーアプリ",
    description: "Flutterで開発した運動記録と健康管理アプリ",
    longDescription:
      "Flutterを使用して開発した総合フィットネストラッカーアプリケーションです。運動記録、カロリー追跡、目標設定、進捗分析などの機能を提供し、ウェアラブルデバイスとの連動を通じてリアルタイム健康データを収集します。",
    type: "app",
    image: "/placeholder.svg?height=200&width=300",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    period: "2024.06 - 2024.08",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "SQLite",
      "Health Connect API",
    ],
    github: "https://github.com/username/fitness-tracker-app",
    features: [
      "運動記録と追跡",
      "カロリー計算機",
      "目標設定と達成度分析",
      "ウェアラブルデバイス連動",
      "ソーシャル機能（友達と競争）",
      "運動計画推薦",
      "進捗可視化",
    ],
    challenges: [
      "ウェアラブルデバイスAPI連動",
      "リアルタイムデータ処理",
      "複雑なデータ可視化",
      "バッテリー最適化",
    ],
    learnings: [
      "Flutterフレームワーク",
      "モバイルヘルスケアAPI",
      "データ可視化",
      "ユーザーエクスペリエンスデザイン",
    ],
  },
];

// IDでプロジェクトを取得
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

// タイプでプロジェクトを取得
export function getProjectsByType(type: ProjectType): Project[] {
  return projects.filter((project) => project.type === type);
}
