import Layout from "../components/Layout"
import Table from "../components/Table"
import Button from "../components/Button"
import Form from "../components/Form"
import useClients from "../hooks/useClients"

export default function Home() {

  const { 
    saveClient, 
    newClient, 
    deleteClient, 
    selectClient,
    client,
    clients,
    isShowTable,
    showTable
  } = useClients()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Simple Register">
        {isShowTable ? (
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
              clientSelected={selectClient}
              clientExcluded={deleteClient}
            > 
            </Table>
          </>
        ) : (
          <Form  
            client={client}
            selectClient={saveClient}
            cancel={showTable}
          />
        )}
      </Layout>
    </div>
  )
}
