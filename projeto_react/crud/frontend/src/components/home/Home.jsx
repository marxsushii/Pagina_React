import React from 'react'
import Main from '../template/Main'



export default props =>
    <Main title="StockON"
        subtitle="O maior Webnário Financeiro da América Latina">
        
        <div>Inscreva-se para participar</div>
        <div>De 10/09 a 15/09, todos os dias das 12 as 22 horas</div>
        
        <div className="columns">
            <div className="know-more">Participe do maior Webnário Financeiro da América Latina, conheça grandes profissionais e amplie seu conhecimento gratuitamente. </div>
            <img src={require('../../assets/imgs/photo4.png')} alt="person with tax paper" class="small-image"/>
        </div>
        <div className="columns">
            <img src={require('../../assets/imgs/photo2.png')} alt="people laugthing in suits" class="small-image"/>
            <div className="know-more">Contamos com a parceria de diversos patrocinadores empenhados em espalhar conhecimento pelo mundo. Nossas palestras são certificadas pelos mais influentes profissionais da área financeira. Garantimos a entrega de certificado de participação em até 30 dias.</div>
        </div>

        
        
    </Main>