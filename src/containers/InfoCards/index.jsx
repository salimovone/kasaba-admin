import React, { useEffect, useState } from 'react'
import InfoCard from '../../components/InfoCard'
import Axios from '../../services/Axios'

const InfoCards = () => {
  const [appsLen, setAppsLen] = useState(0)
  const [accepts, setAccepts] = useState([])
  const [employeLength, setEmployeLength] = useState(0)

  const fetchData = async () => {
    try {
      await Axios("/application/")
        .then((response) => {
          setAppsLen(response.data.length)
          setAccepts(response.data.filter(e=>e.status === "ad"))
        })
    } catch (err) {
      throw new Error("error: " + err.message)
    }
  }

  const fetchEmploye = async () => {
    try {
      await Axios("/employe/")
        .then((response) => {
          setEmployeLength(response.data.length)          
        })
    } catch (err) {
      throw new Error("error: " + err.message)
    }
  } 


  useEffect(() => {
    fetchData()
    fetchEmploye()
  }, [])

  let InfoCardData = [
    {
      id: 0,
      title: "hozirgi mablag'",
      value: 2257.81,
      compare: "+55%"
    },
    {
      id: 1,
      title: "Ishchilar",
      value: employeLength,
    },
    {
      id: 2,
      title: "Arizalar",
      value: appsLen
    },
    {
      id: 3,
      title: "qabul qilingan arizalar",
      value: accepts.length
    }
  ]

  return (
    <div className='grid items-center grid-cols-4 gap-3 w-full mt-4 mb-6 pr-4'>
      {
        InfoCardData.map((itm, idx) => {
          return (
            <InfoCard key={idx + 1} {...itm} />
          )
        })}
    </div>
  )
}

export default InfoCards