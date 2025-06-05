const SwamiVivekanandAwardReasercher = () => {
  return (
    <div className="award-detail">
      <h2>Swami Vivekanand PERA Teacher Award</h2>
      <p><strong>Three Awards:</strong> Pandit / Dhrishta / Guru</p>
      <h4>Eligibility Criteria:</h4>
      <ul>
        <li>Must be a full-time teacher at senior college, higher education institute or university.</li>
        <li>Minimum 5 years of teaching experience.</li>
      </ul>
      <div className="comment-section">
        <h4>Leave a Reply</h4>
        <form>
          <textarea placeholder="Comment *" required></textarea>
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="url" placeholder="Website" />
          <label><input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.</label>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default SwamiVivekanandAwardReasercher;