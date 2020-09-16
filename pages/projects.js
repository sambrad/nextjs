import Head from 'next/head'
import style from '../styles/Home.module.css'
import Link from 'next/link'

export default function Projects() {
  return(
    <div className={style.projectContainer}>
      <Head>
        <title>Sam Bradley-Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="outer-menu">
        <input class="checkbox-toggle" type="checkbox" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <li><Link href="/"><a class="a">Home</a></Link></li>
                <li><Link href="/about"><a class="a">About Me</a></Link></li>
                <li><Link href="/contact"><a class="a">Contact Me</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={style.projectTitle}>
        <h1 className={style.title}>My Projects</h1>
        <p className={style.description}>
          Below are some projects I have worked on.
        </p>
      </div>

      <div className={style.projectList}>
        <div className={style.project}>
          <div className={style.one}>
            <div className={style.projectContent}>
              <h1>Blockchain@IU</h1>
              <a
                href="http://blockchainiu.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/blockchainatiu.png" />
              </a>
            </div>
          </div>
          <div className={style.two}>
            <div className={style.projectContent}>
              <h1>blockchainatiu</h1>
            </div>
          </div>
        </div>
        <div className={style.project}>
          <div className={style.one}>
            <div className={style.projectContent}>
              <a
                href="http://vanshomecenter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/vans.png" style={{height: "5rem"}} />
              </a>
            </div>
          </div>
          <div className={style.two}>
            <div className={style.projectContent}>
              <h1>blockchainatiu</h1>
            </div>
          </div>
        </div>
      </div>

      <footer className={style.footer}>
        <a
          href="https://github.com/sambrad"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me on: {' '}
          <img src="/github.png" alt="GitHub Logo" className={style.logo} />
        </a>
        <a
          href="https://www.linkedin.com/in/sam-bradley24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" alt="LinkedIn Logo" className={style.logo} />
        </a>
      </footer>
    </div>
  )
}
