import { useEffect, useState } from "react"
import Client from "../core/Client"
import ClientRepo from "../core/ClientRepo"
import CollectionClient from "../../firebase/db/CollectionClient"
import useTableOrForm from "./useTableOrForm"


export default function useClients() {
    
  const repo: ClientRepo = new CollectionClient()

  const {
    isShowTable, 
    showTable,
    showForm
  } = useTableOrForm()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])

  useEffect(
    getAllClients
  ,[])

  function getAllClients() {
    repo.getAllClients().then(clients => {
      setClients(clients)
      showTable()
    })
  }

  function selectClient(client: Client) {
    setClient(client)
    showForm()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client)
    getAllClients()
  }

  function newClient() {
    setClient(Client.empty())
    showForm()
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAllClients()
  }

  return {
    saveClient, 
    newClient, 
    deleteClient, 
    selectClient,
    getAllClients,
    client,
    clients,
    isShowTable,
    showTable
  }

}