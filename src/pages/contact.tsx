import Layout from '../components/common/layout';
import Meta from '../components/common/layout/meta';

export default function Contact() {
  return (
    <Layout>
      <Meta
        title="Ed in the Clouds"
        description="Cloud and Automation engineering blog. Brought to you from Manchester, UK"
        canonical={'https://edintheclouds.io'}
      />

      <article className="p-12 mx-auto prose dark:prose-dark">
        <h2>Email</h2>
        <p>
          If you want to get in touch you are best off emailing me. You can contact me via email at
          ed@edintheclouds.io
        </p>
        <h2>Twitter</h2>
        <p>
          I do have twitter, but I am not an active user on it (Trying to reduce my social media
          footprint!). My handle is <a href="https://twitter.com/ed1nthecloud">@ed1nthecloud</a>
        </p>
        <h2>LinkedIn</h2>
        <p>
          Similar to twitter I do not use LinkedIn a great deal, however I check it more regularly
          than twitter! My profile can be found{' '}
          <a href="https://www.linkedin.com/in/edwardsmith92/">here</a>
        </p>
      </article>
    </Layout>
  );
}
