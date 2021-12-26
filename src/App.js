import styles from './styles/app.module.css'
import profile from './Images/profile.jpg'
export default function App() {
  return (
    <div className="App">
      <div className={styles.container}>
        <div className={styles.inner__container}>
          <img className={styles.photo} src={profile}></img>
          <div className={styles.text}>
            <p>
              My name is <strong>Yuri Razumny</strong>
            </p>
            <p>I am a junior frontend developer</p>
            <p>
              <b>My contacts:</b>
            </p>
            <p>razumny11@gmail.com</p>
            <p>+7(981)101-87-41</p>

            <p>
              <b>Have development experience in:</b>
            </p>
            <ul className={styles.ul}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>NextJs</li>
            </ul>
          </div>
          <div className={styles.text}>
            <p>
              <b>Education:</b>
            </p>
            <ul className={styles.ul}>
              <li>ITMO University (2015-2019)</li>
              <li>RSSchool JS/Frontend course (2020)</li>
              <li>Tinkoff Frontend development (2021)</li>
              <li>SoloLearn</li>
              <li>Codewars</li>
              <li>HTML Academy</li>
              <li>freeCodeCamp</li>
              <li>Stepik</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
