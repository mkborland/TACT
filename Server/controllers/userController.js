import knex from "../db/db.js";
// import { requestCurrentUser, checkAuthLevel } from "./helpers.js";

// const myAuth = async (req, res) => {
//   const currentUser = await requestCurrentUser(req.user.user_id, res)
//   const sheet = req.params 

//   return knex('user_roles')
//     .select('*') 
//     .where({user_id: currentUser[0].id, sheet_id: sheet.sheet_id})
//     .then(data => {
//       if (data[0]) {
//         res.status(200).send(data[0].role_name) 
//         return
//       }
//       res.status(401).send('GET out here')
//     })
// }

// const addUserRole = async (req, res) => {
//   const targetId = req.params.sheet_id;
//   const { users } = req.body;

//   if (!await checkAuthLevel('userManage', targetId, req)) {
//     res.status(401).send("Unauthorized");
//     return;
//   }//

//   let flag = false;
//   let results = [];
//   await users.forEach(user => {
//     knex('users')
//       .select('id')
//       .where({ id: user.user_id })
//       .then(data => {
//         if (data.length > 0) {
//           knex('user_roles')
//             .select('*')
//             .where({ user_id: user.user_id, sheet_id: targetId })
//             .then(data => {
//               if (data.length === 0) {
//                 return knex('user_roles')
//                   .insert({ user_id: user.user_id, role_name: user.role_name, sheet_id: targetId })
//                   .then(() => {
//                     flag = true;
//                     results.push(flag);
//                   })
//               } else {
//                 flag = false;
//                 results.push(flag);
//               }
//               return flag
//             })
//         }
//       })
//   })


//   res.status(201).json(`user role has been added`)

// };

// const getUserId = async (req, res) => {
//   const { user_id, name } = req.user
//   const data = await requestCurrentUser(user_id, res);

//   res.status(200).json(data[0])

// }

const requestAllUsers = async (req, res) => {
    knex('users')
        .select('userName', 'userID')
        .then(data => res.status(200).json(data))
}


// const getAllSheetUsers = (req, res) => {
//   const reqId = req.params.sheet_id
//   if(!reqId) {
//     res.status(400).send("Need a sheet to get the users")
//     return
//   }

//   knex('user_roles')
//     .join('users', 'user_roles.user_id', 'users.id')
//     .select('user_id', 'role_name', 'name', 'picture', 'email')
//     .where({sheet_id: reqId})
//     .then(data => res.status(200).json(data))
// }

// const editUserRoles = async (req, res) => {
//   const targetId = req.params.sheet_id;
//   const { users } = req.body;

//   if (!await checkAuthLevel('userManage', targetId, req)) {
//     res.status(401).send("Unauthorized");
//     return;
//   }

//   console.log('Target ID:', req.params.sheet_id)
//   console.log('Request Body:', req.body)

//   users.forEach(user => {
//     knex('user_roles')
//     .select('*')
//     .where({user_id: user.user_id, sheet_id: targetId})
//     .update({role_name: user.role_name})
//     .then()
//   })
//   res.status(200).json(`user roles updated`)
// }

// const removeUserRoles = async (req, res) => {
//   const targetId = req.params.sheet_id;
//   const { users } = req.body.title;
//   const currentUser = await requestCurrentUser(req.user.user_id, res)

//   if(currentUser[0].id !== users[0].user_id) {
//     if (!await checkAuthLevel('userManage', targetId, req)) {
//       res.status(401).send("Unauthorized");
//       return;
//     }
//   }


//   users.forEach(user => {
//     knex('user_roles')
//     .select('*')
//       .where({user_id: user.user_id, sheet_id: targetId})
//       .del()
//       .then(data => res.status(201).json(`${data} records deleted`))
//   })
// }

const addUser = (req, res) => {
    const { user_id, name, picture, email } = req.user

    knex("users")
        .select("*")
        .where({ name: name })
        .then((data) => {
            if (data.length === 0) {
                return knex("users")
                    .insert({ name: name, firebase_uuid: user_id, picture: picture, email: email })
                    .then(() => {
                        res.status(201).send(`${name} has been added.`);
                    });
            } else {
                res.status(202).send(`${name} already exists.`);
            }
        });
};


export { addUser, requestAllUsers };
