'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Report() {
  const router = useRouter();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>My FX</h1>
        <div className={styles.headerButtons}>
          <button className={styles.green}>通知ON</button>
          <button className={styles.blue} onClick={() => router.push('/history')}>
            トレード履歴
          </button>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.reportCard}>
          <h2>2024/04/27の日報</h2>
          <p><strong>振り返り</strong><br />押し目買い成功。</p>
          <p><strong>成績</strong><br />+50pips（+5000円）</p>
          <p><strong>市場状況</strong><br />ドル円上昇、リスクオン</p>
          <p><strong>本日の戦略</strong><br />112.50付近押し目買いエントリー成功。</p>
        </div>

        <div className={styles.chat}>
          <h3>ChatGPTアシスタント</h3>
          <input type="text" placeholder="メッセージを入力" />
        </div>
      </div>

      <div className={styles.generateButtonArea}>
        <button className={styles.green}>日報を生成する</button>
      </div>
    </main>
  );
}
