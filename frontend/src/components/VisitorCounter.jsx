import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  
    if (!sessionStorage.getItem('visitorCounted')) {
      let visitCount = parseInt(localStorage.getItem('visitorCount') || '0', 10);
      visitCount += 1;
      localStorage.setItem('visitorCount', visitCount);
      sessionStorage.setItem('visitorCounted', 'true');
      setCount(visitCount);
    } else {
      const existingCount = parseInt(localStorage.getItem('visitorCount') || '0', 10);
      setCount(existingCount);
    }
  }, []);

  return (
    <div>
      Our Visitors {count} {count !== 1}
    </div>
  );
};

export default VisitorCounter;
