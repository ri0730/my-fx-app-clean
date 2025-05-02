'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './report.module.css';

export default function ReportPage() {
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'assistant', text: 'こんにちは！1日の戦略について相談しますか？' },
    { sender: 'user', text: 'はい、今日のUSD/JPYは買いですか？' },
    { sender: 'assistant', text: 'テクニカル的に押し目買いが有効です。112.50付近が注目です。' }
  ]);

  const router = useRouter();

  const toggleNotifications = () => setNotificationsOn(!notificationsOn);

  const handleSend = () => {
    if (!chatInput.trim()) return;
    setChatMessages([...chatMessages, { sender: 'user', text: chatInput }]);
    setChatInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const demoCards = Array.from({ length: 5 }, (_, i) => (
    <div key={i} className={styles.reportCard}>
      <h3>{`2024/04/${27 - i} の日報`}</h3>
      <p><strong>振り返り：</strong>押し目買い成功。</p>
      <p><strong>成績：</strong>+50pips（+5000円）</p>
      <p><strong>今日の市場状況：</strong>ドル円上昇、リスクオン</p>
      <p><strong>本日の戦略：</strong>112.50付近押し目買い</p>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.title}>My FX</h1>
          <div className={styles.buttons}>
            <button
              onClick={toggleNotifications}
              style={{ backgroundColor: notificationsOn ? '#4caf50' : '#888' }}
            >
              通知{notificationsOn ? 'ON' : 'OFF'}
            </button>
            <button style={{ backgroundColor: '#2196f3' }} onClick={() => router.push('/history')}>
              トレード履歴
            </button>
          </div>
        </header>

        <div className={styles.cards}>{demoCards}</div>

        <button style={{ backgroundColor: '#4caf50', padding: '10px', color: 'white', fontWeight: 'bold', borderRadius: '6px', marginTop: 'auto' }}>
          自動レポート
        </button>
      </div>

      <section className={styles.chatBox}>
        <h2>AIアシスタント</h2>
        <div className={styles.chatArea}>
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={msg.sender === 'user' ? styles.userBubble : styles.assistantBubble}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            className={styles.chatInput}
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="メッセージを入力"
          />
          <button onClick={handleSend}>送信</button>
        </div>
      </section>
    </div>
  );
}
