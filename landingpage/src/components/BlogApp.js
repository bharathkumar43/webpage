import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Header from './Header';
import Footer from './Footer';

const BlogApp = () => {
  const [currentView, setCurrentView] = useState('blog');
  const [currentPostId, setCurrentPostId] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/blog/')) {
        const idStr = hash.split('/')[2];
        const postId = parseInt(idStr, 10);
        setCurrentPostId(Number.isNaN(postId) ? null : postId);
        setCurrentView('post');
      } else if (hash === '#/blog') {
        setCurrentView('blog');
        setCurrentPostId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="blog-app">
      <Header />
      {currentView === 'post' && currentPostId ? (
        <BlogPost postId={currentPostId} />
      ) : (
        <Blog />
      )}
      <Footer />
    </div>
  );
};

export default BlogApp;



