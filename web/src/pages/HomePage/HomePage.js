import { Link, routes } from '@redwoodjs/router';

import BlogLayout from '../../layouts/BlogLayout';
import BlogPostsCell from 'src/components/BlogPostsCell/BlogPostsCell';

const HomePage = () => {
  return (
    <>
      <BlogLayout>
        <p>Taking Fullstack to the Jamstack</p>
        <BlogPostsCell />
      </BlogLayout>
    </>
  )
}

export default HomePage
