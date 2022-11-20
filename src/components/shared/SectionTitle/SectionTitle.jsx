export const SectionTitle = ({ subTitle, title, body }) => {
  return (
    <div className='trending-top'>
      <span className='saint-text'>{subTitle}</span>
      <h2 className="title_trending">{title}</h2>
      <p className="body_trending">{body}</p>
    </div>
  );
};
