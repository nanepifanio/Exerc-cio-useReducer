import { MouseEvent } from "react";
import { reducerState } from "../../hooks/reducers/peopleList/types";

type Props = {
  data: reducerState;
  delBtnClick: (id: string) => void;
};

export const Person = ({ data, delBtnClick }: Props) => {
  const handleDelClick = (item: string) => {
    delBtnClick(item);
  };

  return (
    <tr className="odd:bg-gray-400">
      <td className="border p-2 border-black">{data.name}</td>
      <td className="border p-2 border-black">
        <button
          onClick={() => handleDelClick(data.id)}
          className=" p-2 border-black bg-black text-white hover:opacity-25"
        >
          Remover
        </button>
      </td>
    </tr>
  );
};
