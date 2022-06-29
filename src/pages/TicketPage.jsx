import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import CategoriesContext from "../context";

const TicketPage = ({ editMode }) => {
  const {categories, setCategories} = useContext(CategoriesContext)

  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
  });

  const navigate = useNavigate()
  let {id} = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(editMode) {
      const response = await axios.put(`http://localhost:8000/tickets/${id}`, {
        data: formData
    })
    const success = response.status === 200
      if (success) {
        navigate("/")
      }
    }

    if(!editMode) {
      const response = await axios.post("http://localhost:8000/tickets", {
        formData
      })
      const success = response.status === 200
      if (success) {
        navigate("/")
      }
    }
  };

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:8000/tickets/${id}`)
    setFormData(response.data.data)
  }

  useEffect(() => {
    if (editMode) {
      fetchData()
    }
  }, [])

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="ticket p-8 w-full">
      <h1 className="text-3xl font-bold">
        {" "}
        {editMode ? "Update your Ticket" : "Create a Ticket"}{" "}
      </h1>
      <div className="ticket-container flex w-full justify-center">
        <form className="flex" onSubmit={handleSubmit}>
          <section className="flex flex-col m-2.5 w-[500px]">
            <label className="mt-5" htmlFor="title">
              Title
            </label>
            <input
              className="my-2 mr-2 p-2.5 border-2 border-gray-500 rounded-xl"
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />

            <label className="mt-5" htmlFor="description">
              Description
            </label>
            <input
              className="my-2 mr-2 p-2.5 border-2 border-gray-500 rounded-xl"
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />

            <label className="mt-5" htmlFor="category">
              Category
            </label>
            <select
              className="my-2 mr-2 p-2.5 border-2 border-gray-500 rounded-xl"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories?.map((category, _index) => (
                <option key={_index} value={category}>
                  {" "}
                  {category}{" "}
                </option>
              ))}
            </select>

            <label className="mt-5" htmlFor="new-category">
              New Category
            </label>
            <input
              className="my-2 mr-2 p-2.5 border-2 border-gray-500 rounded-xl"
              id="new-category"
              name="category"
              type="text"
              onChange={handleChange}
              value={formData.category}
            />

            <label className="mt-5">Priority</label>
            <div className="multiple-input-container mt-2 space-x-4">
              <input
                type="radio"
                name="priority"
                id="priority-1"
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              />
              <label className="mt-5" htmlFor="priority-1">
                1
              </label>
              <input
                type="radio"
                name="priority"
                id="priority-2"
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              />
              <label className="mt-5" htmlFor="priority-2">
                2
              </label>
              <input
                type="radio"
                name="priority"
                id="priority-3"
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              />
              <label className="mt-5" htmlFor="priority-3">
                3
              </label>
              <input
                type="radio"
                name="priority"
                id="priority-4"
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              />
              <label className="mt-5" htmlFor="priority-4">
                4
              </label>
              <input
                type="radio"
                name="priority"
                id="priority-5"
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              />
              <label className="mt-5" htmlFor="priority-5">
                5
              </label>
            </div>

            {editMode && (
              <>
                <input
                  className="my-2 mr-2 p-2.5 border-2 border-gray-500 rounded-xl"
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
                />
                <label className="mt-5" htmlFor="progress">
                  Progress
                </label>

                <label className="mt-5" htmlFor="status">
                  Status
                </label>
                <select
                  className="my-2 mr-2 p-2.5 border-2 border-gray-500 rounded-xl"
                  name="status"
                  id="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option selected={formData.status === "done"} value="done">
                    Done
                  </option>
                  <option
                    selected={formData.status === "working on it"}
                    value="working on it"
                  >
                    Working on it
                  </option>
                  <option selected={formData.status === "stuck"} value="stuck">
                    Stuck
                  </option>
                  <option
                    selected={formData.status === "not started"}
                    value="not started"
                  >
                    Not started
                  </option>
                </select>
              </>
            )}

            <input
              className="bg-gray-200 hover:bg-gray-300 mt-5 mr-2 p-2.5 border-2 border-gray-500 rounded-xl cursor-pointer font-semibold"
              type="submit"
            />
          </section>
          <section className="flex flex-col m-2.5 w-[500px]">
            <label className="mt-5" htmlFor="owner">
              Owner
            </label>
            <input
              className="my-2 mr-2 p-2.5 border-2 border-gray-500 rounded-xl"
              type="text"
              name="owner"
              id="owner"
              onChange={handleChange}
              required={true}
              value={formData.owner}
            />

            <label className="mt-5" htmlFor="avatar">
              Avatar
            </label>
            <input
              className="my-2 mr-2 p-2.5 border-2 border-gray-500 rounded-xl"
              type="url"
              name="avatar"
              id="avatar"
              onChange={handleChange}
              required={true}
              value={formData.avatar}
            />
            <div className="img-preview">
              {formData.avatar && (
                <img src={formData.avatar} alt="img-preview" />
              )}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default TicketPage;
