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
                "Olá, Mundo" ou "Hello, World" é uma frase que aparece na 
                tela do computador quando um programa é executado. 
                É um programa simples que serve para confirmar que o 
                programa está funcionando e para aprender a usar uma nova linguagem de programação. 
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt='circulo colorido'
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