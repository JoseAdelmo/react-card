import posterImg from "../../assets/tx.jpg"
import styles from "./styles.module.css"

export default function Card() {
    return (
        <div className={styles.container}>
            <img src={posterImg}></img>
            <div>
                <h2>Poster do jogo Uncharted 4</h2>
                <p>Uncharted 4: A Thief's End é um jogo eletrônico de ação-aventura desenvolvido pela Naughty Dog e publicado pela Sony Computer Entertainment. </p>
                <button>Comprar agora</button>
            </div>
        </div>
    )
}