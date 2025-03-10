import PostModelo from "Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Antônio Evaldo sorrindo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        O avestruz (Struthio camelus) é a maior e mais pesada ave do mundo,
        pertencente à família Struthionidae. Originário das savanas e desertos
        da África, esse animal não voador é conhecido por suas longas pernas e
        impressionante velocidade. Apesar de não possuir a habilidade de voar, o
        avestruz compensa essa limitação com sua capacidade de correr a até 70
        km/h, tornando-se um dos corredores mais rápidos do reino animal.
      </p>

      <p className={styles.paragrafo}>
        Fisicamente, o avestruz possui um corpo robusto e coberto por penas,
        sendo que os machos têm plumagem preta com pontas brancas nas asas e
        cauda, enquanto as fêmeas apresentam uma coloração mais discreta,
        variando entre tons de marrom e cinza. Suas asas, embora pequenas em
        comparação ao tamanho do corpo, são utilizadas para equilíbrio durante a
        corrida e também em exibições de cortejo. Sua cabeça e pescoço são
        longos e desprovidos de penas, o que contribui para uma melhor regulação
        térmica.
      </p>

      <p className={styles.paragrafo}>
        Uma característica marcante do avestruz são seus grandes olhos, os
        maiores entre os animais terrestres, o que lhe proporciona uma visão
        aguçada para detectar predadores à distância. Além disso, seu bico é
        curto e achatado, adequado para sua alimentação onívora, que inclui
        sementes, folhas, insetos e pequenos vertebrados. Outro traço distintivo
        é a sua perna longa e musculosa, equipada com apenas dois dedos, um dos
        quais possui uma garra afiada capaz de infligir sérios ferimentos em
        ameaças.
      </p>

      <p className={styles.paragrafo}>
        O comportamento do avestruz é bastante social, podendo formar grupos de
        até 50 indivíduos, principalmente em períodos de seca. Essas aves
        possuem rituais de acasalamento complexos, nos quais o macho realiza
        danças elaboradas para atrair as fêmeas. Após a cópula, os ovos são
        depositados em um ninho comunitário, sendo que a fêmea dominante e o
        macho principal se revezam na incubação. Os filhotes nascem após cerca
        de 42 dias e crescem rapidamente, tornando-se independentes em poucos
        meses.
      </p>

      <p className={styles.paragrafo}>
        No aspecto ecológico, o avestruz desempenha um papel fundamental em seu
        habitat, ajudando na dispersão de sementes e no controle populacional de
        insetos e pequenos animais. Seu comportamento de pastagem contribui para
        a manutenção do equilíbrio ambiental, influenciando a vegetação e a
        biodiversidade local. Além disso, sua presença é importante para a
        cadeia alimentar, servindo como presa para grandes predadores, como
        leões, leopardos e hienas.
      </p>

      <p className={styles.paragrafo}>
        Por fim, o avestruz também tem importância econômica e cultural. Sua
        carne magra e rica em proteínas é consumida em várias partes do mundo,
        enquanto suas penas e couro são utilizados na fabricação de vestuário e
        acessórios. Além disso, essa ave é frequentemente criada em fazendas
        especializadas e figura em mitos e lendas de diversas culturas, sendo
        símbolo de velocidade, resistência e adaptação.
      </p>
    </PostModelo>
  );
}
