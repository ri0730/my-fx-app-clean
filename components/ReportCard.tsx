// components/ReportCard.tsx
type Props = {
    date: string;
    strategy: string;
    market: string;
    performance: string;
    review: string;
  };
  
  export default function ReportCard({ date, strategy, market, performance, review }: Props) {
    return (
      <div style={{
        background: "#fff",
        borderRadius: "1rem",
        padding: "1rem",
        marginBottom: "1rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}>
        <h2>{date}</h2>
        <p><strong>戦略：</strong>{strategy}</p>
        <p><strong>市況：</strong>{market}</p>
        <p><strong>損益：</strong>{performance}</p>
        <p><strong>振り返り：</strong>{review}</p>
      </div>
    );
  }
  