import Head from 'next/head'

export default () =>
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
        integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
        crossOrigin="anonymous"
      />
      <title>ChatOps Examples</title>
    </Head>

    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">ChatOps Examples</h1>
        <p>See what can be done with chat bots.</p>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Screencasts</h2>
          <p>
            Here is a screencast showing a bot built to download YouTube videos.
          </p>
        </div>
      </div>

      <hr />

      <footer>
        <p>&copy; Code Drop IO 2017</p>
      </footer>
    </div>
  </div>
