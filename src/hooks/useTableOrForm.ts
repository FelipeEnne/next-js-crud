import { useState } from "react"

export default function useTableOrForm() {
    
  const [show, setShow] = useState<'table' | 'form'>('table')

  const showTable = () => setShow('table');
  const showForm = () => setShow('form');

  return {
    isShowTable: show=='table',
    isShowForm: show=='form',
    showTable,
    showForm
  }

}