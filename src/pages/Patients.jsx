import React, {useState} from 'react'
import MaterialTable from "material-table";


const Patients = () => {
    const [state, setState] = useState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ],
        data: [
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: 2017,
            birthCity: 34,
          },
        ],
      });  
    return ( 
        <div>

            <MaterialTable
         
            columns={state.columns}
            data={state.data}
            title="Lista de Pacientes"  
            // actions={[
            //   {
            //     icon: 'edit',
            //     tooltip: 'Editar Registro',
            //     onClick: (event, rowData) => seleccionarArtista(rowData, "Editar")
            //   },
            //   {
            //     icon: 'delete',
            //     tooltip: 'Eliminar Registro',
            //     onClick: (event, rowData) => seleccionarArtista(rowData, "Eliminar")
            //   },
            //   // {
            //   //   icon: 'visibility',
            //   //   tooltip: 'Ver detalles',
            //   //   onClick: (event, rowData) => seleccionarArtista(rowData, "Ver")
            //   // },
            //   {
            //     icon: 'visibility',
            //     tooltip: 'Ver detalles',
            //     onClick: (event, rowData) => detallePaciente(rowData)
           
            //   },
            // ]}
            // options={{
            //   actionsColumnIndex: -1,
            //   headerStyle: {
            //     backgroundColor: '#23272A',
            //     color: '#FFFFFF'
            //   },
            //   rowStyle: {
            //     backgroundColor: '#EEE',
            //     // fontFamily: "Mulish-Regular",
            //   }
            // }}
            // localization={{
            //   header:{
            //     actions: "Acciones"
            //   },
            //   body: {
            //     emptyDataSourceMessage: (
            //       <CircularProgress />
            //     ),
            // },
              
            // }}
          />
        </div>
     );
}
 
export default Patients;