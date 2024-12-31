import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHistoryAPI ,deleteHistoryAPI} from '../services/allAPI'

const History = () => {
  const [allHistory, setAllHistory] = useState([])

  useEffect(() => {
    getAllHistory()
    },[])

  const getAllHistory = async () => {
    try {
      const result = await getAllHistoryAPI()
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setAllHistory(result.data);

      }
      else {
        console.log("API call failed");

      }

    } catch (error) {
      console.log(error);

    }
  }

  const removeHistory = async (id) => {
    try{
      await deleteHistoryAPI(id)
    getAllHistory()
    }
    catch(err)
    {
      console.log(err);
      
    }
  } 

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="d-flex justify-content-between container">
        <h3>Watch History</h3>
        <Link to={'/home'}>
          Back to Home
        </Link>
      </div>
      <table className='container mt-5'>
        <thead>
          <th>#</th>
          <th>Caption</th>
          <th>Link</th>
          <th>TimeStamp</th>
          <th>...</th>
        </thead>
        <tbody>
          {
            allHistory?.length > 0 ?
              allHistory?.map((historyDeatils, index) => (
                <tr key={historyDeatils?.id}>
                  <td>{index + 1}</td>
                  <td>{historyDeatils?.caption}</td>
                  <td>{historyDeatils?.youtubeLink}</td>
                  <td>{historyDeatils?.timeStamp}</td>
                  <td><button onClick={()=>removeHistory(historyDeatils?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
                </tr>
              ))
              :
              <div className='fw-bolder text-warning'>
                no history!!
              </div>
          }
        </tbody>
      </table>
    </div>
  )
}

export default History