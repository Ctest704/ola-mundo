import Banner from "Componentes/Banner/Banner";
import styles from './Inicio.module.css'
import posts from 'Json/posts.json'
import Post from "Componentes/Post";

export default function Inicio() {
    return (
        <main>
            <Banner />

            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
            </ul>
        </main>
    )
 }