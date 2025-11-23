# 開発者向けドキュメント

## 📋 開発ガイド

このドキュメントは、javis-test-repo プロジェクトの開発者向けガイドです。

## 🛠️ 開発環境のセットアップ

### 必要な環境
- Node.js 18.0以上
- npm 8.0以上
- Git 2.30以上
- VS Code（推奨）

### 推奨拡張機能
- ESLint
- Prettier
- GitLens
- JavaScript/TypeScript 関連

## 📁 ディレクトリ構造

```
javis-test-repo/
├── src/                 # ソースコード
│   ├── components/      # 再利用可能コンポーネント
│   ├── utils/          # ユーティリティ関数
│   └── index.js        # エントリポイント
├── tests/              # テストファイル
│   ├── unit/           # ユニットテスト
│   └── integration/    # 統合テスト
├── docs/               # ドキュメント
├── scripts/            # ビルドスクリプト
└── package.json        # プロジェクト設定
```

## 🧪 テスト戦略

### テストレベル
1. **ユニットテスト** - 個別関数・コンポーネント
2. **統合テスト** - モジュール間の連携
3. **E2Eテスト** - エンドツーエンドの動作

### テスト実行
```bash
# 全テスト実行
npm test

# ウォッチモード
npm run test:watch

# カバレッジレポート
npm run test:coverage
```

## 🚀 デプロイメント

### 開発環境
```bash
npm run dev
```

### ステージング環境
```bash
npm run build:staging
npm run deploy:staging
```

### 本番環境
```bash
npm run build:production
npm run deploy:production
```

## 📊 コード品質

### ESLint設定
```json
{
  "extends": ["eslint:recommended"],
  "rules": {
    "no-unused-vars": "error",
    "no-console": "warn"
  }
}
```

### Prettier設定
```json
{
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true
}
```

## 🔄 CI/CD

GitHub Actionsを使用して自動化：

1. **プルリクエスト時**
   - ESLint チェック
   - テスト実行
   - ビルド確認

2. **マージ時**
   - 本番ビルド
   - 自動デプロイ

## 🤝 コントリビューション

### ブランチ戦略
- `main` - 本番用安定版
- `develop` - 開発用統合ブランチ
- `feature/*` - 新機能開発
- `bugfix/*` - バグ修正
- `hotfix/*` - 緊急修正

### コミットメッセージ
```
type(scope): subject

body

footer
```

### 例
```
feat(auth): add user login functionality

- Implement JWT authentication
- Add login form validation
- Update user state management

Closes #123
```

---

*Javis AI Assistant によって生成されたドキュメント*
