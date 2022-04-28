import { useState, ChangeEvent } from "react";

type Props = {
  addBtnClick: (s: string) => void;
};

export const AddForm = ({ addBtnClick }: Props) => {
  const [name, setName] = useState<string>("");

  const handleName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.value) {
      setName(target.value);
    }
  };

  const handleAddClick = () => {
    addBtnClick(name);
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome"
        className="border-2 p-2 border-black w-96"
        value={name}
        onChange={handleName}
      />
      <button
        className="p-2 border-2 bg-black border-black text-white hover:opacity-50"
        onClick={handleAddClick}
      >
        Adicionar
      </button>
    </div>
  );
};
