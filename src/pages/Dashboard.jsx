import { useState, useEffect, useContext } from "react";
import TicketCard from "../components/TicketCard";
import axios from "axios";
import CategoriesContext from "../context";

const Dashboard = () => {
  const [tickets, setTickets] = useState(null);
  const { categories, setCategories } = useContext(CategoriesContext)

  useEffect(() => {
    const getTickets = async () => {
      const response = await axios.get('http://localhost:8000/tickets')
      const dataObject = response.data.data
      const arrayOfKeys = Object.keys(dataObject)
      const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])
      const formattedArray = []
      arrayOfKeys.forEach((key, index) => {
        const formmatedData = { ...arrayOfData[index] }
        formmatedData['documentId'] = key
        formattedArray.push(formmatedData)
      })
      setTickets(formattedArray)
    }
    getTickets()
  }, [])

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({category}) => category))])
  }, [tickets])

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(186,225,255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="dashboard w-full p-8">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="ticket-container h-[80vh] overflow-scroll">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="my-8 text-2xl font-semibold"> {uniqueCategory} </h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
