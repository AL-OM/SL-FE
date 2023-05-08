import { toast } from "@/components/toast";
import { UserRoleVM } from "@/core/view-models/user-role/user-role-vm";
import React from "react";

interface ComponentProps {
  userRoles: UserRoleVM[];
}

type Props = ComponentProps;

const UserComponent: React.FunctionComponent<Props> = (props) => {
  const renderUserRole = (): React.ReactElement[] => {
    return props.userRoles.map((item) => {
      return (
        <tr
          key={item.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td className="px-6 py-2">{item.id}</td>
          <td className="px-6 py-2">{item.name}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <button
        onClick={() => {
          toast.warn({
            description: "This is an info toast component",
            title: "Success",
          });
        }}
      >
        click
      </button>
      <div className="relative overflow-x-auto w-full flex items-center justify-center py-4">
        <table
          style={{ width: "400px" }}
          className="text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                {"ID"}
              </th>
              <th scope="col" className="px-6 py-3">
                {"Name"}
              </th>
            </tr>
          </thead>
          <tbody>{renderUserRole()}</tbody>
        </table>
      </div>
    </>
  );
};

export default UserComponent;
