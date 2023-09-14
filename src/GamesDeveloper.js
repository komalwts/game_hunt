import movies from './MOVIE_DATA.json'
import BasicTable from './components/BacisTable'
import { useMemo } from 'react'
import './App.css'

function Dashboard() {

  const data = useMemo(() => movies, [])

  const movieColumns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Activated On',
      accessorKey: 'activated',
    },
    {
      header: 'Games',
      accessorKey: 'games',
    },
    {
      header: 'GamePlays',
      accessorKey: 'gameplay',
    },
    {
      header: 'rewards Won',
      accessorKey: 'rewared',
    },
    {
      header: 'Status',
      accessorKey: 'status',
      style: {
        cursor: 'pointer',
      },
       Cell:({ row }) =>{
        const data = row.original;
        console.log("hjdsfsdj"+data);
       }
    },
  ]

  return (
    <>
      {/* <h1>React-table</h1> */}
      <BasicTable data={data} columns={movieColumns} />
    </>
  )
}


export default Dashboard;