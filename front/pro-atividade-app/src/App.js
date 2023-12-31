import { useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';


function App() {


  let initialState = [{

    "id": 1,
    "prioridade": "1",
    "titulo": "Primeira",
    "descricao": "Primeira Atividade"
  },
  {

    "id": 2,
    "prioridade": "3",
    "titulo": "Segunda",
    "descricao": "Segunda Atividade"
  }


  ]

  const [atividades, setAtividades] = useState(initialState)

  const [atividade, setAtividade] = useState({id:0})



  function addAtividade(ativ) {

    const atividade = {
      id: Math.max.apply(
        Math,
        atividades.map((item) => item.id)
      ) + 1,
      descricao: document.getElementById('descricao').value,
      prioridade: document.getElementById('prioridade').value,
      titulo: document.getElementById('titulo').value,

    };




    setAtividades([...atividades, { ...atividade }])
  }


  function deletarAtividade(id) {

    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id)
    setAtividades([...atividadesFiltradas]);
  }


  function pegarAtividade(id) {

    const atividade = atividades.filter((atividade) => atividade.id === id)
    setAtividade(atividade[0]);
  }


  function cancelarAtividade (){

    setAtividade({id:0});
  }

  function atualizarAtividade(ativ) {
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
    setAtividade({ id: 0 })
  }

  return (
    <>
      <AtividadeForm

        addAtividade={addAtividade}
        atividades={atividades}
        ativSelecionada={atividade}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
      />

      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />


    </>
  );
}

export default App;
