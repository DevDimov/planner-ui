// import { useQuery } from '@apollo/client'
// // import { QUERY_EVENT_CLASS } from '../graphql/query'

// export default function DisplayEventClass() {
//   const { loading, error, data } = useQuery(QUERY_EVENT_CLASS)

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error : {error.message}</p>

//   return data.queryEventClass.map(({ id, label, user }: any) => (
//     <div key={id}>
//       <h3>{label}</h3>
//       <br />
//       <b>Created by</b>
//       <p>{user.email}</p>
//       <br />
//     </div>
//   ))

//   // return data.queryUser.map(({ id, email }: any) => (
//   //   <div key={id}>
//   //     <b>Email</b>
//   //     <p>{email}</p>
//   //     <br />
//   //   </div>
//   // ))
// }
