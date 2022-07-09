// import localStorage from 'localStorage';
import store from "store2";
import roleMappingsList from "../data/RoleMappings.js";

const CustomerAzureAD = [];

const bcRoles = [{ role: "BC_ADMIN" }, { role: "BC_CLINICAL" }];
const CustomerRolesBCRolesMappings = roleMappingsList();

// Put the object into storage
// localStorage.setItem("testObject", JSON.stringify(bcRoles));
store("bcRoles", bcRoles);

// to find out if the role does not exist
const checkRoleNotExist = (arr, val) => {
  let flag = true;
  arr.forEach((item) => {
    if (item.role === val) {
      flag = false;
    }
  });
  return flag;
};

// post new roles for a single user
const createCustomerRoles = async (req, res) => {
  const post = req.body;
  const syncResult = {};
  const { name, roles: customerRoles } = post;
  if (name === null || name === undefined || customerRoles === undefined) {
    return res.status(400).json({ message: "Bad request" });
  }
  try {
    await CustomerAzureAD.push(post);
    CustomerRolesBCRolesMappings.forEach((value, key) => {
      if (
        checkRoleNotExist(customerRoles, key) &&
        bcRoles.some((item) => item.role.trim() === value.trim())
      ) {
        syncResult.deletedRoles = [
          ...(syncResult.deletedRoles ?? []),
          `${value}`,
        ];
      } else if (
        customerRoles.some((item) => item.role === key) &&
        checkRoleNotExist(bcRoles, value)
      ) {
        console.log("Added");
        syncResult.addedRoles = [...(syncResult.addedRoles ?? []), `${value}`];
      } else if (
        customerRoles.some((item) => item.role === key) &&
        bcRoles.some((item) => item.role === value)
      ) {
        console.log("unchanged");
        syncResult.unchangedRoles = [
          ...(syncResult.unchangedRoles ?? []),
          `${value}`,
        ];
      }
      // else if (
      //   checkRoleNotExist(customerRoles, key) &&
      //   checkRoleNotExist(bcRoles, value)
      // ) {
      //   console.log("unassigned");
      //   syncResult.unAssigned = [...(syncResult.unAssigned ?? []), `${value}`];
      // }
    });
    store("syncRoles", syncResult);
    res.status(201).json(syncResult);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
  return false;
};

export default createCustomerRoles;
