import {useState} from "react"
export default function StudentCard() {
  const [students,setStudents] = useState(
    [
    {
      id: 1,
      name: "Yassine",
      note: 14,
      initial: "Y",
    },
    {
      id: 2,
      name: "Youssef",
      note: 16,
      admitted: true,
      initial: "Y",
    },
    {
      id: 3,
      name: "Abderrahmane",
      note: 17,
      initial: "A",
    },
    {
      id: 4,
      name: "Ghita",
      note: 18,
      initial: "G",
    },
    {
      id: 5,
      name: "Sara",
      note: 9,
      initial: "S",
    },
  ]
) 

function supprimer(id){
  setStudents(
  students.filter((item)=>{
    return(
      item.id != id
    )
  }))
}
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Liste des étudiants
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {students.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6
                         hover:shadow-xl transition"
            >

              <div className="flex items-center gap-4 mb-5">

                <div className="w-12 h-12 rounded-full bg-blue-100
                                flex items-center justify-center
                                text-blue-600 font-bold text-lg">
                  {item.initial}
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800" >
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-400" >
                    ID : {item.id}
                  </p>
                </div>

              </div>


              <div className="mb-5">
                <h4 className="text-sm text-gray-400 uppercase" >
                  Note
                </h4>

                <p className="text-3xl font-bold text-gray-800">
                  {item.note}
                  <span className="text-sm text-gray-400 font-normal">
                    /20
                  </span>
                </p>
              </div>


              <p
                className={`text-sm font-medium mb-5 ${
                  item.note>=10
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {item.admitted ? "Admis" : "Non admis"}
              </p>

              <div className="flex justify-end gap-3">

                <button
                  className="px-4 py-2 rounded-lg border
                             border-gray-300 text-gray-600
                             hover:bg-gray-100 transition"
                >
                  Modifier
                </button>

                <button
                  className="px-4 py-2 rounded-lg
                             text-red-500
                             hover:bg-red-50 transition"
                             onClick={()=>supprimer(item.id)}
                >
                  Supprimer
                </button>

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}