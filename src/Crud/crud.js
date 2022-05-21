// import React from "react";
// import { Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter } from "@chakra-ui/react ";
// import {AddIcon,DeletIcon,RepeatIcon}from '@chakra-ui/icons' ;

// class crud extends React.Component {
//   state = {
//     data: data,
//     modalActualizar: false,
//     modalInsertar: false,
//     form: {
//       id: "",
//       producto: "",
//       categoria: "",
//     },
//   };

//   mostrarModalActualizar = (dato) => {
//     this.setState({
//       form: dato,
//       modalActualizar: true,
//     });
//   };

//   cerrarModalActualizar = () => {
//     this.setState({ modalActualizar: false });
//   };

//   mostrarModalInsertar = () => {
//     this.setState({
//       modalInsertar: true,
//     });
//   };

//   cerrarModalInsertar = () => {
//     this.setState({ modalInsertar: false });
//   };

//   editar = (dato) => {
//     const contador = 0;
//     const arreglo = this.state.data;
//     arreglo.map((registro) => {
//       if (dato.id == registro.id) {
//         arreglo[contador].producto = dato.producto;
//         arreglo[contador].categoria = dato.categoria;
//       }
//       contador++;
//     });
//     this.setState({ data: arreglo, modalActualizar: false });
//   };

//   eliminar = (dato) => {
//     const opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
//     if (opcion == true) {
//       const contador = 0;
//       const arreglo = this.state.data;
//       arreglo.map((registro) => {
//         if (dato.id == registro.id) {
//           arreglo.splice(contador, 1);
//         }
//         contador++;
//       });
//       this.setState({ data: arreglo, modalActualizar: false });
//     }
//   };

//   insertar= ()=>{
//     const valorNuevo= {...this.state.form};
//     valorNuevo.id=this.state.data.length+1;
//     const lista= this.state.data;
//     lista.push(valorNuevo);
//     this.setState({ modalInsertar: false, data: lista });
//   }

//   handleChange = (e) => {
//     this.setState({
//       form: {
//         ...this.state.form,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   render() {

//     return (
//       <>
//         <Container>
//         <br />
//           <Button onClick={()=>this.mostrarModalInsertar()}>{AddIcon}</Button>
//           <br />
//           <br />
//           <Table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Producto</th>
//                 <th>Categoria</th>
//                 <th>Acción</th>
//               </tr>
//             </thead>

//             <tbody>
//               {this.state.data.map((dato) => (
//                 <tr key={dato.id}>
//                   <td>{dato.id}</td>
//                   <td>{dato.producto}</td>
//                   <td>{dato.categoria}</td>
//                   <td>
//                     <Button
//                       color="primary"
//                       onClick={() => this.mostrarModalActualizar(dato)}
//                     >
//                       Editar
//                     </Button>{" "}
//                     <Button  onClick={()=> this.eliminar(dato)}>{DeletIcon}</Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Container>

//         <Modal isOpen={this.state.modalActualizar}>
//           <ModalHeader>
//            <div><h3>Editar Registro</h3></div>
//           </ModalHeader>

//           <ModalBody>
//             <FormGroup>
//               <label>
//                Id:
//               </label>

//               <input
//                 className="form-control"
//                 readOnly
//                 type="text"
//                 value={this.state.form.id}
//               />
//             </FormGroup>

//             <FormGroup>
//               <label>
//                 Producto:
//               </label>
//               <input
//                 className="form-control"
//                 name="producto"
//                 type="text"
//                 onChange={this.handleChange}
//                 value={this.state.form.producto}
//               />
//             </FormGroup>

//             <FormGroup>
//               <label>
//                 categoria:
//               </label>
//               <input
//                 className="form-control"
//                 name="categoria"
//                 type="text"
//                 onChange={this.handleChange}
//                 value={this.state.form.categoria}
//               />
//             </FormGroup>
//           </ModalBody>

//           <ModalFooter>
//             <Button
//               onClick={() => this.editar(this.state.form)}
//             >
//               Editar
//             </Button>
//             <Button
//               onClick={() => this.cerrarModalActualizar()}
//             >
//               Cancelar
//             </Button>
//           </ModalFooter>
//         </Modal>
//         <Modal isOpen={this.state.modalInsertar}>
//           <ModalHeader>
//            <div><h3>Insertar Producto{RepeatIcon}</h3></div>
//           </ModalHeader>

//           <ModalBody>
//             <FormGroup>
//               <label>
//                 Id:
//               </label>

//               <input
//                 className="form-control"
//                 readOnly
//                 type="text"
//                 value={this.state.data.length+1}
//               />
//             </FormGroup>

//             <FormGroup>
//               <label>
//                 Producto:
//               </label>
//               <input
//                 className="form-control"
//                 name="producto"
//                 type="text"
//                 onChange={this.handleChange}
//               />
//             </FormGroup>

//             <FormGroup>
//               <label>
//                 Categoria:
//               </label>
//               <input
//                 className="form-control"
//                 name="categoria"
//                 type="text"
//                 onChange={this.handleChange}
//               />
//             </FormGroup>
//           </ModalBody>

//           <ModalFooter>
//             <Button
//               onClick={() => this.insertar()}
//             >
//               Insertar
//             </Button>
//             <Button
//               className="btn btn-danger"
//               onClick={() => this.cerrarModalInsertar()}
//             >
//               Cancelar
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </>
//     );
//   }
// }
// export default crud;
