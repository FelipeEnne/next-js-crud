import Layout from "../components/Layout"
import Table from "../components/Table"
import Button from "../components/Button"
import Client from "../core/Client"
import Form from "../components/Form"
import { useEffect, useState } from "react"
import ClientRepo from "../core/ClientRepo"
import CollectionClient from "../../firebase/db/CollectionClient"

export default function Home() {

  const repo: ClientRepo = new CollectionClient()

  const [client, setClient] = useState<Client>(Client.empty())
  const [clients, setClients] = useState<Client[]>([])
  const [show, setShow] = useState<'table' | 'form'>('table')

  useEffect(
    getAllClients
  ,[])

  function getAllClients() {
    repo.getAllClients().then(clients => {
      setClients(clients)
      setShow('table')
    })
  }

  function clientSelected(client: Client) {
    setClient(client)
    setShow('form')
  }

  async function clientExcluded(client: Client) {
    await repo.delete(client)
    getAllClients()
  }

  function newClient() {
    setClient(Client.empty())
    setShow('form')
  }

  async function saveClient(client: Client) {
    await repo.save(client)
    getAllClients()
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Simple Register">
        {show === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button className={`
                mb-4
                bg-gradient-to-r from-green-400 to-green-700
                `}
                onClick={newClient}
              >
                New Client
              </Button>
            </div>
            <Table 
              clients={clients} 
              clientSelected={clientSelected}
              clientExcluded={clientExcluded}
            > 
            </Table>
          </>
        ) : (
          <Form  
            client={client}
            selectClient={saveClient}
            cancel={() => setShow('table')
          }/>
        )}
      </Layout>
    </div>
  )
}
