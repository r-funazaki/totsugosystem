# 払込取扱票 突合システム — Node.js モック

PDF × CSV の一連番号・取扱店突合チェックシステムのNode.jsラッパーです。  
PDF/CSV の解析はすべてブラウザ側（pdf.js / PapaParse）で完結します。

## ローカル起動

```bash
npm install
npm start
# → http://localhost:3000
```

## Render へのデプロイ手順

### 1. GitHubにリポジトリを作成・プッシュ

```bash
# リポジトリ初期化
git init
git add .
git commit -m "initial commit"

# GitHubにリポジトリを作成後(New repository)
git remote add origin https://github.com/<あなたのユーザー名>/<リポジトリ名>.git
git branch -M main
git push -u origin main
```

### 2. Render に Web Service を作成

1. https://render.com にサインアップ／ログイン
2. ダッシュボードから **New → Web Service**
3. **Connect a repository** → GitHubアカウントと連携 → 作成したリポジトリを選択
4. 以下の設定を入力：

| 項目 | 値 |
|------|-----|
| **Name** | 任意（例: furikomi-matching） |
| **Region** | Singapore（日本から近い） |
| **Branch** | main |
| **Runtime** | Node |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | Free |

5. **Create Web Service** ボタンをクリック
6. デプロイが完了すると `https://<サービス名>.onrender.com` のURLが発行されます

### 注意事項

- Renderの無料プランは**15分間アクセスがないとスリープ**します  
  （初回アクセス時に30〜60秒かかることがあります）
- PDFとCSVの処理はすべてブラウザ内で完結するため、サーバーへのデータ送信は発生しません
