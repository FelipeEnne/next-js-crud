import Client from "../core/Client";
import { IconEdit, IconTrash } from "./Icons";

interface TableProps {
  clients: Client[];
  clientSelected?: (client: Client) => void;
  clientExcluded?: (client: Client) => void;
  children?:any;
}

export default function Table(props: TableProps) {

  const showActions = props.clientSelected || props.clientExcluded;

  function renderTableHead() {
    return (
        <tr>
          <th className="text-left p-4">ID</th>
          <th className="text-left p-4">Name</th>
          <th className="text-left p-4">Age</th>
          {showActions ? (
            <th className="text-left p-4">Actions</th>
          ) : false }
        </tr>
    );
  }

  function renderTableData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={`${client.id}-renderTableData`}
          className={`${i%2 === 0 ? `bg-purple-200` : `bg-purple-100`}`}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions ? (
            renderActions(client)
          ) : false }
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className="flex">
        {props.clientSelected ? (
          <button onClick={() => props.clientSelected?.(client)} 
          className={`
          flex justify-center items-center
          text-green-600 rounded-full
          hover:bg-purple-50 p-2 m-1
        `}>
          {IconEdit}
        </button>
        ) : false}
        {props.clientExcluded ? (
          <button  onClick={() => props.clientExcluded?.(client)} 
          className={`
          flex justify-center items-center
          text-red-600 rounded-full
          hover:bg-purple-50 p-2 m-1
        `}>
          {IconTrash}
        </button>
        ) : false}
        
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}>
      {renderTableHead()}
      </thead>
      
      <tbody>
        {renderTableData()}
      </tbody>
    </table>
  );
}
