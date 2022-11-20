import Head from 'next/head'

const Meta = ({ keywords, description, title }: any) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'WatchMe',
  keywords: 'movie app, free movies, popular movies',
  description: 'watch movies for free',
}

export default Meta
