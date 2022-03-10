import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Working with Bulma</title>
        <meta name="description" content="Playground to play with css framework Bulma" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <section className="section is-small">
          <div className="box">
            <h1 className="title has-text-centered">
              Welcome to <a href="https://bulma.io">Bulma CSS!</a>
            </h1>
          </div>
        </section>

        <section className="section is-medium">
          <h1 className="title">Other Section with medium size</h1>
          <h3 className="subtitle">More information</h3>
          <div className="content">
            <p className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan dui eget aliquam efficitur. Suspendisse eget pretium sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eu ipsum eget ex posuere finibus eu ut elit. Quisque eu felis blandit risus suscipit lacinia. Nunc faucibus vestibulum elementum. Praesent ante nisl, consectetur ac ligula sollicitudin, pretium viverra eros. Nunc lorem ligula, rhoncus non auctor quis, sollicitudin id dui. Cras pellentesque mauris maximus dapibus gravida. Aenean quis lacus ac eros sagittis commodo. Sed non arcu non diam vestibulum tristique. Fusce varius diam ut dui aliquam lacinia. Aliquam ut efficitur massa. Ut augue risus, feugiat sed dui in, congue semper odio. Suspendisse augue felis, venenatis vitae commodo ut, convallis eu tellus.
            </p>
            <p className="block">
              Suspendisse dignissim viverra lacus, eget tempor enim congue vel. Quisque egestas nunc sit amet ante faucibus, ac commodo erat tincidunt. Nulla velit dolor, sodales in dolor in, bibendum consequat mi. Integer fermentum diam condimentum augue rhoncus maximus. Etiam congue, odio ac rhoncus faucibus, erat massa mattis justo, quis tempor ligula tellus quis lacus. Nunc tristique metus sed aliquet molestie. Donec at tortor commodo, malesuada augue mollis, lobortis eros. Nullam quis lacinia orci, ut lobortis metus. Maecenas in luctus mauris. Ut feugiat mollis eros. Maecenas varius felis ut aliquet ullamcorper. Ut nisi est, lobortis at finibus ut, scelerisque nec libero. Morbi at maximus elit. Nulla vitae turpis quis velit iaculis ullamcorper eget vel elit. Sed a dolor sit amet nulla rhoncus dictum id non neque.
            </p>
          </div>
        </section>

        <section className="section is-large">
          <h1 className="title">Section with large size</h1>
          <h3 className="subtitle">Working with Tiles layout element</h3>

          <div className="content">

            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                      <p className="title">Vertical...</p>
                      <p className="subtitle">Top tile</p>
                    </article>
                    <article className="tile is-child notification is-warning">
                      <p className="title">...tiles</p>
                      <p className="subtitle">Bottom tile</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                      <p className="title">Middle tile</p>
                      <p className="subtitle">With an image</p>
                      <figure className="image is-640x480">
                        <Image src="https://bulma.io/images/placeholders/640x480.png" alt="" width={640} height={480} />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title">Wide tile</p>
                    <p className="subtitle">Aligned with the right tile</p>
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan dui eget aliquam efficitur. Suspendisse eget pretium sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eu ipsum eget ex posuere finibus eu ut elit. Quisque eu felis blandit risus suscipit lacinia. Nunc faucibus vestibulum elementum. Praesent ante nisl, consectetur ac ligula sollicitudin, pretium viverra eros. Nunc lorem ligula, rhoncus non auctor quis, sollicitudin id dui. Cras pellentesque mauris maximus dapibus gravida. Aenean quis lacus ac eros sagittis commodo. Sed non arcu non diam vestibulum tristique. Fusce varius diam ut dui aliquam lacinia. Aliquam ut efficitur massa. Ut augue risus, feugiat sed dui in, congue semper odio. Suspendisse augue felis, venenatis vitae commodo ut, convallis eu tellus.
                      Suspendisse dignissim viverra lacus, eget tempor enim congue vel. Quisque egestas nunc sit amet ante faucibus, ac commodo erat tincidunt. Nulla velit dolor, sodales in dolor in, bibendum consequat mi. Integer fermentum diam condimentum augue rhoncus maximus. Etiam congue, odio ac rhoncus faucibus, erat massa mattis justo, quis tempor ligula tellus quis lacus. Nunc tristique metus sed aliquet molestie. Donec at tortor commodo, malesuada augue mollis, lobortis eros. Nullam quis lacinia orci, ut lobortis metus. Maecenas in luctus mauris. Ut feugiat mollis eros. Maecenas varius felis ut aliquet ullamcorper. Ut nisi est, lobortis at finibus ut, scelerisque nec libero. Morbi at maximus elit. Nulla vitae turpis quis velit iaculis ullamcorper eget vel elit. Sed a dolor sit amet nulla rhoncus dictum id non neque.
                      Vestibulum in commodo purus, a imperdiet risus. Curabitur eu venenatis nulla. Sed at libero ut purus dignissim rutrum eget vel massa. Quisque porttitor mi et commodo finibus. Integer commodo turpis eget rutrum vehicula. Mauris tempus ullamcorper orci id hendrerit. Sed egestas elementum justo, quis vestibulum risus auctor et. Aenean tristique ligula et enim gravida consequat. In id felis rutrum odio pellentesque vestibulum nec et risus. Etiam massa nibh, sodales nec tristique quis, pretium vel dui.
                      Maecenas commodo facilisis semper. Aenean finibus vulputate ligula, at facilisis felis rutrum consequat. Aliquam vel urna magna. Praesent ac faucibus ex. Etiam ac lobortis sapien. Sed rhoncus imperdiet nunc in ullamcorper. Aenean posuere metus pharetra mauris tincidunt, sit amet placerat justo vehicula. Nunc euismod mattis tempus. Sed efficitur tellus in tellus laoreet, eu molestie nisl sollicitudin. Aliquam feugiat congue tellus. Proin vel leo in ipsum tristique condimentum.
                      Nam suscipit, ex sed auctor pulvinar, quam orci pellentesque sapien, at consectetur arcu arcu et libero. Nam nec facilisis sem, et pharetra tortor. Duis sed neque ut dolor interdum blandit. Sed fringilla, enim at viverra vestibulum, neque erat mattis massa, ac ultrices ipsum enim non odio. Nunc aliquam malesuada dolor, eget condimentum est elementum vel. Etiam sit amet pulvinar magna, dictum convallis metus. Duis ornare ligula ut semper fringilla. Nunc imperdiet tincidunt venenatis.
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                  <div className="content">
                    <p className="title">Tall tile</p>
                    <p className="subtitle">With even more content</p>
                    <div className="content">
                      Nam suscipit, ex sed auctor pulvinar, quam orci pellentesque sapien, at consectetur arcu arcu et libero. Nam nec facilisis sem, et pharetra tortor. Duis sed neque ut dolor interdum blandit. Sed fringilla, enim at viverra vestibulum, neque erat mattis massa, ac ultrices ipsum enim non odio. Nunc aliquam malesuada dolor, eget condimentum est elementum vel. Etiam sit amet pulvinar magna, dictum convallis metus. Duis ornare ligula ut semper fringilla. Nunc imperdiet tincidunt venenatis.
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
