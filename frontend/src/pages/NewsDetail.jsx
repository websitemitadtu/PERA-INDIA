import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: "2rem" }}>
      <h2>News Detail: ID {id}</h2>
      <p>Detailed content for news {id}.</p>
    </div>
  );
};
export default NewsDetail;
