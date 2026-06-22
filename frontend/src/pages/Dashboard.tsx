import { usePendingUsers } from '../hooks/usePendingUsers';
import { useApprovedUsers } from '../hooks/useApprovedUsers';
import { useAlerts } from '../hooks/useAlerts';
import { useApproveUser } from '../hooks/useApproveUser';
import { useRejectUser } from '../hooks/useRejectUser';

export default function Dashboard() {
const {
data: pendingUsers = [],
isLoading: pendingLoading,
} = usePendingUsers();

const {
data: approvedUsers = [],
isLoading: approvedLoading,
} = useApprovedUsers();

const {
data: alerts = [],
isLoading: alertsLoading,
} = useAlerts();

const approveMutation =
useApproveUser();

const rejectMutation =
useRejectUser();

const logout = () => {
localStorage.removeItem('token');
window.location.href = '/login';
};

if (
pendingLoading ||
approvedLoading ||
alertsLoading
) {
return ( <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
Loading Dashboard... </div>
);
}

return ( <div className="min-h-screen bg-gray-100 p-8"> <div className="max-w-7xl mx-auto"> <div className="flex justify-between items-center mb-8"> <div> <h1 className="text-4xl font-bold text-gray-800">
WeatherGuard Admin </h1>


        <p className="text-gray-500 mt-1">
          Invitation Based Weather Alert System
        </p>
      </div>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow"
      >
        Logout
      </button>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">
          Pending Users
        </h3>

        <p className="text-4xl font-bold text-yellow-500 mt-2">
          {pendingUsers.length}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">
          Approved Users
        </h3>

        <p className="text-4xl font-bold text-green-500 mt-2">
          {approvedUsers.length}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-gray-500">
          Weather Alerts
        </h3>

        <p className="text-4xl font-bold text-blue-500 mt-2">
          {alerts.length}
        </p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow mb-8">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">
          Pending Users
        </h2>
      </div>

      <div className="p-6">
        {pendingUsers.length === 0 ? (
          <p className="text-gray-500">
            No Pending Users
          </p>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-3">
                  Name
                </th>
                <th className="pb-3">
                  Email
                </th>
                <th className="pb-3">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {pendingUsers.map(
                (user: any) => (
                  <tr
                    key={user._id}
                    className="border-b"
                  >
                    <td className="py-4">
                      {user.name}
                    </td>

                    <td className="py-4">
                      {user.email}
                    </td>

                    <td className="py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            approveMutation.mutate(
                              user._id,
                            )
                          }
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            rejectMutation.mutate(
                              user._id,
                            )
                          }
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>

    <div className="bg-white rounded-xl shadow mb-8">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">
          Approved Users
        </h2>
      </div>

      <div className="p-6">
        {approvedUsers.length === 0 ? (
          <p className="text-gray-500">
            No Approved Users
          </p>
        ) : (
          approvedUsers.map(
            (user: any) => (
              <div
                key={user._id}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <p className="font-medium">
                    {user.name}
                  </p>

                  <p className="text-gray-500">
                    {user.email}
                  </p>
                </div>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Approved
                </span>
              </div>
            ),
          )
        )}
      </div>
    </div>

    <div className="bg-white rounded-xl shadow">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">
          Weather Alerts
        </h2>
      </div>

      <div className="p-6">
        {alerts.length === 0 ? (
          <p className="text-gray-500">
            No Alerts Available
          </p>
        ) : (
          alerts.map(
            (alert: any) => (
              <div
                key={alert._id}
                className="border-b py-4"
              >
                <p className="font-medium">
                  {alert.email}
                </p>

                <p className="text-blue-600">
                  {alert.alert}
                </p>
              </div>
            ),
          )
        )}
      </div>
    </div>
  </div>
</div>


);
}
