import "../styles/NewsItem.css";

interface NewsItemProps {
  tags: string[];
  date: string;
  title: string;
  recap: string;
}

export function NewsItem({ tags, date, title, recap }: NewsItemProps) {
  return (
    <div className="news-card">
      <div className="news-top">
        {tags.map((tag, idx) => (
          <span key={idx} className="tag">
            {tag}
          </span>
        ))}
        <span className="date">{date}</span>
      </div>
      <div className="news-bottom">
        <p className="news-title">{title}</p>
        <div className="news-right">
          <p className="news-recap">{recap}</p>
          <a href="#" className="read-story">
            Read Story
          </a>
        </div>
      </div>
    </div>
  );
}
