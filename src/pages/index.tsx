import Layout from "../components/Layout"
import Table from "../components/Table"
import Client from "../core/Client"

export default function Home() {

  const clients = [
    new Client('test1', 123, 'top1'),
    new Client('test2', 456, 'top3'),
    new Client('test3', 789, 'top3')
  ]

  function clientSelected(client: Client) {

  }

  function clientExcluded(client: Client) {
    
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 to-blue-600
      text-white
    `}>
      <Layout title="Simple Register">
        <Table 
          clients={clients} 
          clientSelected={clientSelected}
          clientExcluded={clientExcluded}
        > 
        </Table>
      </Layout>
    </div>
  )
}
