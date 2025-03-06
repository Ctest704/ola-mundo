import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                substantivo masculino
                    1.
                    conjunto das palavras escritas, em livro, folheto, documento etc. (p.opos. a comentários, aditamentos, sumário etc.); redação original de qualquer obra escrita.
                    "um t. manuscrito"
                    2.
                    trecho ou fragmento de obra de um autor.
                    "o t. de Graciliano Ramos"
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto'
                />
            </div>
        </div>
    )
}