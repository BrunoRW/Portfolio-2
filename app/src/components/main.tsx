export default function Main(){
    return(
        <section id="main">
            <div id="story-out">
                <div className="content">
                    <h1 className="title">Hello 👋 i’m a <span className="span">Student</span>!</h1>
                    <p className="txt">
                        My name is <span className="span">Bruno Ricardo Wotzke</span>, i’am 16 and i started studying over 2 years ago.
                    </p>
                    <p className="txt">
                        I’m very interested in the technology and my dream is to be a <span className="span">tech guy</span>.
                    </p>
                    <button className="view">View more →</button>
                </div>

                <div className="content">
                    <h1 className="title">Portfólios</h1>
                    <a href="https://docs.google.com/presentation/d/10eZn1R8vte-svfH6I4wCu4SBLFzt1R0KyDf2raQeMKA/edit#slide=id.geb1309a365_0_120" target="_blank" className="linkport">2021</a>
                    <a href="https://docs.google.com/presentation/d/1hgjNYI0wAIvQ14oVCXKOR20ytbL6PHDDLQEU0huD-2U/edit#slide=id.p" target="_blank" className="linkport">2022</a>
                    
                </div>

                <div className="content">
                    <h1 className="title">Cronograma</h1>
                    <table>
                        <tr>
                            <th>Horário</th>
                            <th>Atividade</th>
                        </tr>
                        <tr>
                            <td>6 00</td>
                            <td>Acordar e se preparar para o dia</td>
                        </tr>
                        <tr>
                            <td>7 00</td>
                            <td>Revisão rápida do conteúdo das aulas anteriores</td>
                        </tr>
                        <tr>
                            <td>8 00</td>
                            <td>Aulas</td>
                        </tr>
                        <tr>
                            <td>9 00</td>
                            <td>Aulas</td>
                        </tr>
                        <tr>
                            <td>10 00</td>
                            <td>Intervalo</td>
                        </tr>
                        <tr>
                            <td>11 00</td>
                            <td>Aulas</td>
                        </tr>
                        <tr>
                            <td>12 00</td>
                            <td>Aulas</td>
                        </tr>
                        <tr>
                            <td>13 00</td>
                            <td>Fim das aulas e almoço</td>
                        </tr>
                        <tr>
                            <td>14 00</td>
                            <td>Estudo individual/atividades</td>
                        </tr>
                        <tr>
                            <td>15 00</td>
                            <td>Estudo individual/atividades</td>
                        </tr>
                        <tr>
                            <td>16 00</td>
                            <td>Pausa para lanche</td>
                        </tr>
                        <tr>
                            <td>17 00</td>
                            <td>Estudo individual/atividades</td>
                        </tr>
                        <tr>
                            <td>18 00</td>
                            <td>Atividades físicas ou lazer</td>
                        </tr>
                        <tr>
                            <td>19 00</td>
                            <td>Jantar</td>
                        </tr>
                        <tr>
                            <td>20 00</td>
                            <td>Revisão do conteúdo visto no dia e preparação para o dia seguinte</td>
                        </tr>
                        <tr>
                            <td>21 00</td>
                            <td>Tempo livre para atividades pessoais</td>
                        </tr>
                        <tr>
                            <td>22 00</td>
                            <td>Preparação para dormir</td>
                        </tr>
                        <tr>
                            <td>23 00</td>
                            <td>Dormir</td>
                        </tr>
                        </table>
                </div>
                
            </div>
            <div id="infos"></div>
        </section>
    )
}