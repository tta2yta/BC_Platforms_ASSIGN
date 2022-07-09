const roleMappingsList = () => {
  const CustomerRolesBCRoles = new Map([
    ["001 - Admin", "BC_ADMIN"],
    ["002 - Clinical personnel", "BC_CLINICAL"],
    ["003 - Warehouse personnel", "BC_WAREHOUSE"],
  ]);
  CustomerRolesBCRoles.set("004", "NETWORK");
  return CustomerRolesBCRoles;
};

export default roleMappingsList;
