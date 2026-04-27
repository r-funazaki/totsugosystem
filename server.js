const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// ── 静的ファイル配信 ──────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' }));

// ── ルート ───────────────────────────────────────

// メイン画面
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── モック API (将来サーバー側処理に移行する場合用) ──

// ヘルスチェック
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: '払込取扱票 突合システム - サーバー稼働中',
    timestamp: new Date().toISOString(),
  });
});

// PDF解析モックエンドポイント（将来サーバー側で pdf.js 処理に移行する場合）
app.post('/api/parse-pdf', (req, res) => {
  // 現在はフロントエンドで pdf.js を使って処理するため、
  // このエンドポイントはサーバー側実装のプレースホルダーです
  res.status(501).json({
    error: 'Not Implemented',
    message: 'PDF解析は現在クライアントサイド(pdf.js)で処理しています',
  });
});

// CSV解析モックエンドポイント
app.post('/api/parse-csv', (req, res) => {
  res.status(501).json({
    error: 'Not Implemented',
    message: 'CSV解析は現在クライアントサイド(PapaParse)で処理しています',
  });
});

// ── 起動 ──────────────────────────────────────────
app.listen(PORT, () => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  払込取扱票 突合システム - Node.js モック');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`  URL: http://localhost:${PORT}`);
  console.log(`  ENV: ${process.env.NODE_ENV || 'development'}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
});
