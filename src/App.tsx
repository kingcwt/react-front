import { useEffect, useState } from 'react'
import './App.css'
type DataType = {
  name: string;
  email: string;
  image: string;
}

function App() {
  const [data, setData] = useState<DataType[]>([])

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/list');
      const jsonData = await response.json();
      console.log(jsonData,'jsonData')
      setData(jsonData)
    })()
  }, [])

  return (
    <>
      <ul className="divide-y divide-gray-200 w-full">
        {data.map((item) => (
          <li key={item.email} className="py-4 flex">
            <img className="h-10 w-10 rounded-full" src={item.image} alt="" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
