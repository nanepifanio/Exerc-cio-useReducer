import { usePeopleList } from "./hooks/reducers/peopleList/peopleList";
import { AddForm } from "./components/AddForm";
import { Person } from "./components/Person";

const App = () => {
  const [people, peopleDispatch] = usePeopleList();

  const handleAdd = (n: string) =>
    peopleDispatch({ type: "ADD", payload: { name: n } });

  const handleDel = (id: string) =>
    peopleDispatch({ type: "DEL", payload: { id: id } });

  const handleOrdenate = () => peopleDispatch({ type: "ORDER" });

  return (
    <main className="flex justify-center items-center flex-col p-5">
      <AddForm addBtnClick={handleAdd} />

      {!!people.length && (
        <>
          <button
            className="my-7 p-2 border-black bg-black text-white hover:opacity-25"
            onClick={handleOrdenate}
          >
            Organizar por Ordem Alfabética
          </button>

          <table className="table-fixed w-96 text-center">
            <thead>
              <tr>
                <th className="border-2 p-2 border-black">Nome</th>
                <th className="border-2 p-2 border-black">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person, index) => {
                return (
                  <Person key={index} data={person} delBtnClick={handleDel} />
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </main>
  );
};

//Uso do useReducer (com hook personalizado)

/* import { useContagem } from "./hooks/reducers/contagem";

const App = () => {
  const [contagem, contagemDispatch] = useContagem();

  return (
    <div>
      Contagem: {contagem.count}
      <div className="mt-5">
        <button
          onClick={() => contagemDispatch({ type: "ADD" })}
          className="mr-2 border-black bg-slate-400 p-3"
        >
          ADD
        </button>
        <button
          onClick={() => contagemDispatch({ type: "DEL" })}
          className="mr-2 border-black bg-slate-400 p-3"
        >
          DEL
        </button>
        <button
          onClick={() => contagemDispatch({ type: "RESET" })}
          className="mr-2 border-black bg-slate-400 p-3"
        >
          RESET
        </button>
      </div>
    </div>
  );
};
 */
export default App;
